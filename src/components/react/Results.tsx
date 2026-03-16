import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './Button';
import { handleCtaClick } from '../../utils/tracking';

export const Results: React.FC = () => {
  return (
    <section className="w-full py-16 px-4 md:px-8 lg:px-12 bg-[#F0F6FF]">
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
            <span className="font-light"> Resultados reais de quem escolheu </span>
            <br/>
            <span>
              a Slima para emagrecer
            </span>
          </h2>
          <p className="text-navy-800/70 font-sans text-lg md:text-xl max-w-4xl mx-auto leading-relaxed">
            Veja o que é possível alcançar quando unimos a medicação correta ao acompanhamento médico contínuo da Slima.
          </p>
        </motion.div>

        {/* Results Grid */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {/* Bruno */}
          <motion.div
            className="flex flex-col"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
          >
            <div className="group">
              <div className="w-full aspect-[7/8] bg-transparent rounded-xl overflow-hidden relative">
                <img
                  src="/bruno-prova.webp"
                  alt="Bruno - resultado do tratamento"
                  loading="lazy"
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-navy-800/0 group-hover:bg-navy-800/5 transition-colors duration-300"></div>
              </div>
            </div>
            <div className="text-center font-sans text-navy-800 mt-3">
              <p className="text-sm md:text-xl">
                <span className="font-bold">Bruno</span>
                <span className="text-gray-300 mx-2">|</span>
                <span className="font-bold text-[#015AC1]">-28Kg em 3 meses</span>
              </p>
            </div>
          </motion.div>

          {/* Lis */}
          <motion.div
            className="flex flex-col"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.25 }}
          >
            <div className="group">
              <div className="w-full aspect-[7/8] bg-transparent rounded-xl overflow-hidden relative">
                <img
                  src="/lis-prova.webp"
                  alt="Lis - resultado do tratamento"
                  loading="lazy"
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-navy-800/0 group-hover:bg-navy-800/5 transition-colors duration-300"></div>
              </div>
            </div>
            <div className="text-center font-sans text-navy-800 mt-3">
              <p className="text-sm md:text-xl">
                <span className="font-bold">Lis</span>
                <span className="text-gray-300 mx-2">|</span>
                <span className="font-bold text-[#015AC1]">-10Kg em 2 meses</span>
              </p>
            </div>
          </motion.div>

          {/* Marco */}
          <motion.div
            className="flex flex-col"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.4 }}
          >
            <div className="group">
              <div className="w-full aspect-[7/8] bg-transparent rounded-xl overflow-hidden relative">
                <img
                  src="/marco-prova.webp"
                  alt="Marco - resultado do tratamento"
                  loading="lazy"
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-navy-800/0 group-hover:bg-navy-800/5 transition-colors duration-300"></div>
              </div>
            </div>
            <div className="text-center font-sans text-navy-800 mt-3">
              <p className="text-sm md:text-xl">
                <span className="font-bold">Marco</span>
                <span className="text-gray-300 mx-2">|</span>
                <span className="font-bold text-[#015AC1]">-15Kg em 3 meses</span>
              </p>
            </div>
          </motion.div>
        </div>

        {/* CTA Section */}
        <motion.div
          className="mt-16 text-center flex flex-col items-center gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.5 }}
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

export default Results;
