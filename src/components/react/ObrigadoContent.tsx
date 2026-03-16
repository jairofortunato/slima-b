import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Mail, Clock, MessageCircle } from 'lucide-react';
import { Button } from './Button';

export const ObrigadoContent: React.FC = () => {
  const steps = [
    {
      icon: Mail,
      title: 'Confirmacao por E-mail',
      description: 'Voce recebera um e-mail com os detalhes da sua compra e proximos passos.',
    },
    {
      icon: Clock,
      title: 'Avaliacao Medica',
      description: 'Nossa equipe medica ira analisar suas informacoes em ate 24 horas.',
    },
    {
      icon: MessageCircle,
      title: 'Contato da Equipe',
      description: 'Entraremos em contato via WhatsApp para acompanhar sua jornada.',
    },
  ];

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="w-full py-16 md:py-24 lg:py-32">
        <div className="max-w-4xl mx-auto px-4 md:px-8 lg:px-12 text-center">
          {/* Success Icon */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="flex justify-center mb-8"
          >
            <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-gradient-to-br from-[#22c55e] to-[#16a34a] flex items-center justify-center shadow-lg">
              <CheckCircle className="w-12 h-12 md:w-16 md:h-16 text-white" strokeWidth={2.5} />
            </div>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="font-sans font-bold text-4xl md:text-5xl lg:text-6xl text-navy-900 mb-6"
          >
            Obrigado pela sua compra!
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="font-sans text-lg md:text-xl text-navy-800/70 mb-12 max-w-2xl mx-auto"
          >
            Sua jornada para uma vida mais saudavel comeca agora. Estamos muito felizes em ter voce conosco.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mb-16"
          >
            <Button
              variant="premium"
              size="large"
              onClick={() => window.open('https://www.instagram.com/slimasaude/', '_blank')}
            >
              Siga-nos no Instagram
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Next Steps Section */}
      <section className="w-full py-16 bg-white/50">
        <div className="max-w-6xl mx-auto px-4 md:px-8 lg:px-12">
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="font-sans font-bold text-2xl md:text-3xl lg:text-4xl text-navy-900 text-center mb-12"
          >
            Proximos passos
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#034B80] to-[#0469B2] flex items-center justify-center mb-5">
                  <step.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-sans font-bold text-lg md:text-xl text-navy-900 mb-3">
                  {step.title}
                </h3>
                <p className="font-sans text-navy-800/60 text-sm md:text-base">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="w-full py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 md:px-8 lg:px-12 text-center">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            className="bg-gradient-to-br from-[#034B80] to-[#0469B2] rounded-2xl p-8 md:p-12 text-white"
          >
            <h3 className="font-sans font-bold text-2xl md:text-3xl mb-4">
              Duvidas?
            </h3>
            <p className="font-sans text-white/80 text-base md:text-lg mb-6 max-w-xl mx-auto">
              Nossa equipe esta pronta para ajudar. Entre em contato pelo nosso Instagram ou aguarde nosso contato via WhatsApp.
            </p>
            <a
              href="https://www.instagram.com/slimasaude/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-[#034B80] font-bold px-6 py-3 rounded-full hover:bg-white/90 transition-colors"
            >
              Fale Conosco
            </a>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default ObrigadoContent;
