import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './Button';
import { Instagram } from 'lucide-react';
import { handleCtaClick } from '../../utils/tracking';

export const ResultsRaylane: React.FC = () => {
  return (
    <section className="w-full py-16 px-4 md:px-8 lg:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16 space-y-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-sans font-medium text-navy-800 leading-[1.2]">
            <span className="font-light"> Acompanhe os influencers da Slima </span>
            <br/>
            <span>
              no desafio do emagrecimento
            </span>
          </h2>
          <p className="text-navy-800/70 font-sans text-lg md:text-xl max-w-4xl mx-auto leading-relaxed">
            Veja como influenciadores estão transformando seus corpos com o acompanhamento médico da Slima.
          </p>
        </motion.div>

        {/* Raylane Video */}
        <motion.div
          className="max-w-4xl mx-auto flex flex-col items-center"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.15 }}
        >
          <div className="w-full max-w-md md:max-w-lg aspect-[3/4] rounded-xl overflow-hidden shadow-sm border border-gray-100 mx-auto">
            <iframe
              src="https://www.youtube.com/embed/-xxtLMWhVTY"
              title="Jornada de emagrecimento da Influencer Raylane com a Slima"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
        </motion.div>

        {/* Raylane Caption */}
        <motion.div
          className="text-center font-sans text-navy-800 mt-3 md:mt-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.3 }}
        >
          <p className="text-sm md:text-xl font-bold">A transformação da Raylane com a Slima</p>
          <p className="text-xs md:text-base text-navy-800/70 mt-1">
            Acompanhe a jornada de emagrecimento da Influencer Raylane com a Slima
          </p>
          <a
            href="https://www.instagram.com/raylaneferrari/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 mt-2 text-sm md:text-base font-medium text-pink-600 hover:text-pink-700 transition-colors"
          >
            <Instagram className="w-4 h-4 md:w-5 md:h-5" />
            @raylaneferrari
          </a>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="mt-16 text-center flex flex-col items-center gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.4 }}
        >
          <Button variant="premium" onClick={handleCtaClick}>
            Quero ter resultado!
          </Button>
          <p className="text-xs text-gray-400 max-w-2xl mx-auto italic">
Resultados variam para cada pessoa.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ResultsRaylane;
