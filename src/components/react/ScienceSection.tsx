import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './Button';
import { handleCtaClick } from '../../utils/tracking';

export const ScienceSection: React.FC = () => {
  return (
    <section className="relative w-full py-24 lg:pt-32 lg:pb-64 pb-64 overflow-hidden flex items-center min-h-[600px] z-10">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src="/menosfome.webp"
          alt=""
          className="w-full h-full object-cover"
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/20 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 lg:px-12 w-full">
        <div className="max-w-xl pr-12 md:pr-0">
           <motion.h2
             className="text-5xl md:text-6xl lg:text-[4rem] font-sans font-bold font-normal text-white mb-6 leading-[1.1]"
             initial={{ opacity: 0, x: -40 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.7, ease: 'easeOut' }}
           >
             Menos fome, <br />
             perda de peso.
           </motion.h2>
           <motion.p
             className="text-white/95 font-sans text-lg md:text-xl leading-relaxed mb-10 max-w-lg font-normal"
             initial={{ opacity: 0, x: -30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6, ease: 'easeOut', delay: 0.15 }}
           >
             Por anos nos disseram que obesidade era falta de força de vontade. A ciência provou o contrário. Junte-se aos milhares de brasileiros que escolheram tratar a biologia, não apenas a dieta.
           </motion.p>

           <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.5, ease: 'easeOut', delay: 0.3 }}
           >
             <Button variant="premium" onClick={handleCtaClick}>
               Começar Agora
             </Button>
           </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ScienceSection;
