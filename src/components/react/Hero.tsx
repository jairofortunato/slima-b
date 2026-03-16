import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Star } from 'lucide-react';
import { handleCtaClick } from '../../utils/tracking';
import type { GooglePlaceReviews } from '../../utils/googleReviews';

const GoogleLogo: React.FC<{ size?: number }> = ({ size = 20 }) => (
  <svg viewBox="0 0 48 48" width={size} height={size} aria-label="Google">
    <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
    <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
    <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
    <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
  </svg>
);

interface HeroProps {
  googleReviews?: GooglePlaceReviews | null;
}

export const Hero: React.FC<HeroProps> = ({ googleReviews }) => {
  const rating = googleReviews?.rating ?? 5.0;
  const totalReviews = googleReviews?.totalReviews ?? 0;

  return (
    <section className="relative w-full bg-[#F7FBFF] pt-12 pb-16 md:pt-20 md:pb-24 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
        {/* Google Rating Badge */}
        <motion.div
          className="flex items-center gap-2 mb-4 md:mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <GoogleLogo size={20} />
          <div className="flex items-center gap-1.5">
            <span className="font-bold text-sm text-[#1e293b]">{rating.toFixed(1)}</span>
            <div className="flex gap-0.5">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star
                  key={i}
                  className={`w-4 h-4 ${i <= Math.round(rating) ? 'fill-[#FBBC04] text-[#FBBC04]' : 'fill-gray-200 text-gray-200'}`}
                />
              ))}
            </div>
            {totalReviews > 0 && (
              <span className="text-gray-500 text-xs">({totalReviews} avaliações)</span>
            )}
          </div>
        </motion.div>

        {/* Big Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-7xl lg:text-[5.5rem] leading-[1.05] font-sans text-[#1e293b] mb-12 md:mb-16 max-w-4xl">
          <motion.span
            className="font-medium text-[#015AC1] inline-block"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            Emagrecimento
          </motion.span>
          <br />
          <motion.span
            className="font-medium md:whitespace-nowrap inline-block"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.15 }}
          >
            personalizado para você
          </motion.span>
        </h1>

        {/* Two Containers */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {/* Left Container */}
          <motion.div
            className="group min-h-48 md:h-64 rounded-2xl bg-gradient-to-br from-[#2196F3] to-[#01335A] overflow-hidden relative p-5 md:p-6 cursor-pointer transition-all duration-300 lg:hover:scale-[1.03] lg:hover:shadow-2xl lg:hover:shadow-blue-500/25 flex flex-col justify-between"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.3 }}
            onClick={handleCtaClick}
          >
            {/* Top left text */}
            <p className="relative z-10 text-white font-sans text-lg md:text-xl font-bold leading-tight">
              Perca peso<br />
              <span className="font-normal text-white/80">do seu jeito</span>
            </p>

            {/* Center image */}
            <motion.img
              src="/icones.png"
              alt="Ícones de tratamento"
              className="absolute inset-0 m-auto w-40 md:w-52 h-auto object-contain opacity-90"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 0.9, scale: 1 }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 0.5 }}
            />

            {/* Bottom row */}
            <div className="relative z-10 flex justify-end">
              <div className="bg-white/20 lg:group-hover:bg-white/30 rounded-full flex items-center gap-1.5 pl-4 pr-2 py-1.5 md:py-2 transition-all duration-300">
                <span className="text-white font-semibold text-sm md:text-base whitespace-nowrap">Quero emagrecer</span>
                <ChevronRight className="w-6 h-6 md:w-7 md:h-7 text-white transition-transform duration-300 lg:group-hover:translate-x-1" />
              </div>
            </div>
          </motion.div>

          {/* Right Container */}
          <motion.div
            className="group min-h-48 md:h-64 rounded-2xl bg-gradient-to-b from-[#1F3148] to-[#1565C0] overflow-hidden relative p-5 md:p-6 cursor-pointer transition-all duration-300 lg:hover:scale-[1.03] lg:hover:shadow-2xl lg:hover:shadow-blue-500/25 flex flex-col justify-between"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.45 }}
            onClick={handleCtaClick}
          >
            {/* Top left text */}
            <p className="relative z-10 text-white font-sans text-lg md:text-xl font-bold leading-tight">
              Monitore seu progresso
            </p>

            {/* Center image */}
            <motion.img
              src="/doses.png"
              alt="Controle de doses"
              className="absolute inset-0 m-auto w-56 md:w-72 h-auto object-contain opacity-90"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 0.9, scale: 1 }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 0.65 }}
            />

            {/* Bottom row */}
            <div className="relative z-10 flex justify-end">
              <div className="bg-white/20 lg:group-hover:bg-white/30 rounded-full flex items-center gap-1.5 pl-4 pr-2 py-1.5 md:py-2 transition-all duration-300">
                <span className="text-white font-semibold text-sm md:text-base whitespace-nowrap">Quero emagrecer</span>
                <ChevronRight className="w-6 h-6 md:w-7 md:h-7 text-white transition-transform duration-300 lg:group-hover:translate-x-1" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
