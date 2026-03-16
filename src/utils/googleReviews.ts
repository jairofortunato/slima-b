export interface GoogleReview {
  authorName: string;
  authorPhoto: string;
  rating: number;
  text: string;
  relativeTime: string;
  publishTime: string;
}

export interface GooglePlaceReviews {
  rating: number;
  totalReviews: number;
  reviews: GoogleReview[];
}

/**
 * Fetches reviews from Google Places API (New) at build time.
 * Returns null if API key or Place ID is not configured.
 */
export async function fetchGoogleReviews(): Promise<GooglePlaceReviews | null> {
  const apiKey = import.meta.env.GOOGLE_PLACES_API_KEY;
  const placeId = import.meta.env.GOOGLE_PLACE_ID;

  if (!apiKey || !placeId) {
    console.warn('[Google Reviews] API key or Place ID not configured — using fallback testimonials');
    return null;
  }

  try {
    const response = await fetch(
      `https://places.googleapis.com/v1/places/${placeId}?languageCode=pt-BR`,
      {
        headers: {
          'X-Goog-Api-Key': apiKey,
          'X-Goog-FieldMask': 'rating,userRatingCount,reviews',
        },
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      console.error(`[Google Reviews] API error ${response.status}:`, errorText);
      return null;
    }

    const data = await response.json();

    const EXCLUDED_AUTHORS = ['Jairo Fortunato'];

    return {
      rating: data.rating ?? 0,
      totalReviews: data.userRatingCount ?? 0,
      reviews: (data.reviews ?? []).filter((review: Record<string, unknown>) => {
        const author = (review.authorAttribution as Record<string, string> | undefined)?.displayName ?? '';
        return !EXCLUDED_AUTHORS.includes(author);
      }).map((review: Record<string, unknown>) => {
        const authorAttribution = review.authorAttribution as Record<string, string> | undefined;
        const text = review.text as Record<string, string> | undefined;
        const originalText = review.originalText as Record<string, string> | undefined;

        return {
          authorName: authorAttribution?.displayName ?? 'Anônimo',
          authorPhoto: authorAttribution?.photoUri ?? '',
          rating: (review.rating as number) ?? 5,
          text: text?.text ?? originalText?.text ?? '',
          relativeTime: (review.relativePublishTimeDescription as string) ?? '',
          publishTime: (review.publishTime as string) ?? '',
        };
      }),
    };
  } catch (error) {
    console.error('[Google Reviews] Fetch error:', error);
    return null;
  }
}
