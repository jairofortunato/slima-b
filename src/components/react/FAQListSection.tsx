import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { Button } from './Button';
import { handleCtaClick } from '../../utils/tracking';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "O que é a Slima?",
    answer: "Somos uma plataforma de saúde que oferece acompanhamento individualizado. Conectamos você a especialistas para avaliação e, se indicado, um plano personalizado com suporte contínuo."
  },
  {
    question: "Como funciona o processo de avaliação?",
    answer: "Você responde um questionário clínico sobre seu histórico de saúde. Um especialista revisa suas informações e decide se o acompanhamento é indicado para você. Todo o processo é seguro e confidencial."
  },
  {
    question: "Preciso já ter acompanhamento?",
    answer: "Não. A avaliação está inclusa no serviço da Slima. Um especialista analisará seu perfil e indicará o melhor caminho para você."
  },
  {
    question: "O acompanhamento é seguro?",
    answer: "Sim. Todos os atendimentos são realizados por profissionais licenciados após avaliação individual. A Slima segue todas as normas da ANVISA e do Conselho Federal de Medicina."
  },
  {
    question: "Os resultados são garantidos?",
    answer: "Os resultados variam de pessoa para pessoa e dependem de diversos fatores individuais. O acompanhamento pode auxiliar no processo, mas não garantimos resultados específicos. Nossa equipe acompanhará sua evolução."
  }
];

export const FAQListSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="w-full bg-white pb-56">
      <div className="max-w-3xl mx-auto px-4 md:px-8">
        <div className="space-y-0">
           {faqs.map((faq, index) => (
             <motion.div
               key={index}
               className="border-b border-gray-100 last:border-b-0"
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.4, ease: 'easeOut', delay: index * 0.08 }}
             >
               <button
                 onClick={() => setOpenIndex(openIndex === index ? null : index)}
                 className="w-full flex justify-between items-center py-8 text-left group cursor-pointer"
               >
                 <span className="text-2xl md:text-3xl font-sans font-medium text-navy-900 pr-8 tracking-tight">
                   {faq.question}
                 </span>
                 <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                   openIndex === index
                     ? 'bg-gray-100 text-navy-900'
                     : 'bg-gray-100 text-navy-900 group-hover:bg-gray-200'
                 }`}>
                    <div className={`transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}>
                       {openIndex === index ? <Minus size={20} strokeWidth={2} /> : <Plus size={20} strokeWidth={2} />}
                    </div>
                 </div>
               </button>
               <div
                 className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                   openIndex === index ? 'grid-rows-[1fr] opacity-100 pb-8' : 'grid-rows-[0fr] opacity-0 pb-0'
                 }`}
               >
                 <div className="overflow-hidden">
                   <p className="text-navy-900/70 font-sans text-xl leading-relaxed pr-8">
                     {faq.answer}
                   </p>
                 </div>
               </div>
             </motion.div>
           ))}
        </div>

        {/* CTA Section */}
        <motion.div
          className="mt-16 text-center flex flex-col items-center gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <Button variant="premium" onClick={handleCtaClick}>
            Iniciar avaliação
          </Button>
          <p className="text-xs text-gray-400 max-w-2xl mx-auto italic">
            Os resultados variam de pessoa para pessoa. O acompanhamento depende de avaliação individual.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQListSection;
