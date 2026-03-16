import React, { useRef, useState, useEffect } from 'react';
import { Star, ArrowLeft, ArrowRight, User } from 'lucide-react';
import { Button } from './Button';
import { handleCtaClick } from '../../utils/tracking';
import type { GooglePlaceReviews } from '../../utils/googleReviews';

interface FallbackTestimonial {
  id: number;
  title: string;
  content: string;
  author: string;
  role: string;
  image?: string;
  date: string;
}

const fallbackTestimonials: FallbackTestimonial[] = [
  {
    id: 1,
    title: "Atendimento excelente!",
    content: "O acompanhamento profissional fez toda a diferença. Me sinto muito mais segura sabendo que tenho especialistas acompanhando minha jornada de saúde.",
    author: "Lisliane",
    role: "Paciente Slima",
    date: "10 de Janeiro, 2026",
    image: "/testimonial1.webp"
  },
  {
    id: 2,
    title: "Melhorei minha relação com a alimentação",
    content: "A Slima me ajudou a ter mais consciência sobre minha alimentação. O suporte da equipe é incrível e sempre respondem minhas dúvidas.",
    author: "Fernanda",
    role: "Paciente Slima",
    date: "9 de Janeiro, 2026",
    image: "/testimonial2.webp"
  },
  {
    id: 3,
    title: "Suporte de qualidade",
    content: "O processo é muito profissional. A avaliação foi detalhada e me senti acolhida durante todo o acompanhamento. Recomendo!",
    author: "Camila",
    role: "Paciente Slima",
    date: "8 de Janeiro, 2026",
    image: "/camilao.webp"
  },
  {
    id: 4,
    title: "Confiança no processo",
    content: "Gostei muito da seriedade do atendimento. Os profissionais são atenciosos e o acompanhamento é individualizado. Me sinto mais confiante.",
    author: "Juliana",
    role: "Paciente Slima",
    date: "7 de Janeiro, 2026",
    image: "/julianaf.webp"
  },
  {
    id: 5,
    title: "Equipe sempre disponível",
    content: "Qualquer dúvida que eu tenho, a equipe responde rapidamente. O acompanhamento contínuo faz toda a diferença na minha jornada de saúde.",
    author: "Amanda",
    role: "Paciente Slima",
    date: "6 de Janeiro, 2026",
    image: "/amandap.webp"
  }
];

const GoogleLogo: React.FC<{ size?: number }> = ({ size = 20 }) => (
  <svg viewBox="0 0 48 48" width={size} height={size} aria-label="Google">
    <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
    <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
    <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
    <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
  </svg>
);

const RatingStars: React.FC<{ rating: number; style?: 'google' | 'brand' }> = ({ rating, style = 'brand' }) => {
  const roundedRating = Math.round(rating);
  if (style === 'google') {
    return (
      <div className="flex gap-0.5">
        {[1, 2, 3, 4, 5].map((i) => (
          <Star
            key={i}
            className={`w-4 h-4 ${i <= roundedRating ? 'fill-[#FBBC04] text-[#FBBC04]' : 'fill-gray-200 text-gray-200'}`}
          />
        ))}
      </div>
    );
  }
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((i) => (
        <div
          key={i}
          className={`p-1 rounded-[2px] ${i <= roundedRating ? 'bg-[#FBBC04]' : 'bg-gray-200'}`}
        >
          <Star className="w-3 h-3 text-white fill-white" />
        </div>
      ))}
    </div>
  );
};

interface TestimonialsProps {
  googleReviews?: GooglePlaceReviews | null;
}

export const Testimonials: React.FC<TestimonialsProps> = ({ googleReviews }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const hasGoogleReviews = googleReviews && googleReviews.reviews.length > 0;

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    const container = scrollRef.current;
    if (container) {
      container.addEventListener('scroll', checkScroll);
      window.addEventListener('resize', checkScroll);
      checkScroll();
    }
    return () => {
      container?.removeEventListener('scroll', checkScroll);
      window.removeEventListener('resize', checkScroll);
    };
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 350;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="bg-[#F8FAFC] py-16 md:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-sans font-medium text-[#1e293b] mb-4">
            <span className="font-bold">O que nossos pacientes</span> <span className="font-normal italic">dizem sobre nós</span>
          </h2>

          {/* Google Rating Summary */}
          {hasGoogleReviews && (
            <div className="flex items-center justify-center gap-3 mt-6">
              <GoogleLogo size={24} />
              <div className="flex items-center gap-2">
                <span className="font-bold text-xl text-[#1e293b]">{googleReviews.rating.toFixed(1)}</span>
                <RatingStars rating={googleReviews.rating} style="google" />
                <span className="text-gray-500 text-sm">
                  ({googleReviews.totalReviews} avaliações)
                </span>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Carousel */}
      <div className="relative w-full">
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-8 snap-x hide-scrollbar pl-4 md:pl-[max(2rem,calc((100vw-80rem)/2+2rem))] pr-4"
          style={{ msOverflowStyle: 'none', scrollbarWidth: 'none' }}
        >
          {hasGoogleReviews
            ? googleReviews.reviews.map((review, index) => (
                <div
                  key={index}
                  className="min-w-[300px] md:min-w-[350px] bg-white p-6 md:p-8 rounded-xl shadow-sm border border-gray-100 flex flex-col justify-between snap-center"
                >
                  <div>
                    {/* Stars */}
                    <RatingStars rating={review.rating} />

                    {/* Content */}
                    <p className="text-gray-600 text-sm leading-relaxed mt-4 mb-6 font-sans">
                      "{review.text}"
                    </p>
                  </div>

                  {/* Author */}
                  <div className="mt-auto">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-200 flex-shrink-0">
                        {review.authorPhoto ? (
                          <img
                            src={review.authorPhoto}
                            alt={review.authorName}
                            loading="lazy"
                            className="w-full h-full object-cover"
                            referrerPolicy="no-referrer"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center bg-gray-300">
                            <User size={20} className="text-gray-500" />
                          </div>
                        )}
                      </div>
                      <div>
                        <p className="font-bold text-[#1e293b] text-sm font-sans">{review.authorName}</p>
                        <div className="flex items-center gap-1.5">
                          <GoogleLogo size={12} />
                          <span className="text-gray-400 text-xs font-sans">{review.relativeTime}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            : fallbackTestimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="min-w-[300px] md:min-w-[350px] bg-white p-6 md:p-8 rounded-xl shadow-sm border border-gray-100 flex flex-col justify-between snap-center"
                >
                  <div>
                    {/* Stars */}
                    <div className="flex gap-1 mb-4">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <div key={star} className="bg-[#22c55e] p-1 rounded-[2px]">
                          <Star className="w-3 h-3 text-white fill-white" />
                        </div>
                      ))}
                    </div>

                    {/* Title */}
                    <h3 className="font-bold text-[#1e293b] text-lg mb-3 leading-tight font-sans">
                      {testimonial.title}
                    </h3>

                    {/* Content */}
                    <p className="text-gray-600 text-sm leading-relaxed mb-6 font-sans">
                      {testimonial.content}
                    </p>
                  </div>

                  {/* Author */}
                  <div className="mt-auto">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-200">
                        {testimonial.image ? (
                          <img src={testimonial.image} alt={testimonial.author} loading="lazy" className="w-full h-full object-cover" />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center bg-gray-300">
                            <User size={20} className="text-gray-500" />
                          </div>
                        )}
                      </div>
                      <div>
                        <p className="font-bold text-[#1e293b] text-sm font-sans">{testimonial.author}</p>
                        <div className="flex items-center gap-1">
                          <span className="text-[#22c55e] text-xs font-bold font-sans">{testimonial.role}</span>
                        </div>
                      </div>
                    </div>

                    <p className="text-[10px] text-gray-400 font-medium font-sans">
                      Data da avaliação: {testimonial.date}
                    </p>
                  </div>
                </div>
              ))
          }
          <div className="w-4 flex-shrink-0" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Bottom Navigation */}
        <div className="flex justify-end gap-4 mt-4">
             <button
                onClick={() => scroll('left')}
                disabled={!canScrollLeft}
                className={`p-2 rounded-full transition-colors ${
                  !canScrollLeft
                    ? 'text-gray-300 opacity-50 cursor-not-allowed'
                    : 'text-[#1e293b] hover:bg-gray-200 cursor-pointer'
                }`}
             >
                <ArrowLeft className="w-6 h-6" />
             </button>
             <button
                onClick={() => scroll('right')}
                disabled={!canScrollRight}
                className={`p-2 rounded-full transition-colors ${
                  !canScrollRight
                    ? 'text-gray-300 opacity-50 cursor-not-allowed'
                    : 'text-[#1e293b] hover:bg-gray-200 cursor-pointer'
                }`}
             >
                <ArrowRight className="w-6 h-6" />
             </button>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center flex flex-col items-center gap-6">
          <Button variant="premium" onClick={handleCtaClick}>
            Iniciar avaliação
          </Button>
          <p className="text-xs text-gray-400 max-w-2xl mx-auto italic">
            Os resultados variam de pessoa para pessoa. O tratamento depende de avaliação médica individual.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
