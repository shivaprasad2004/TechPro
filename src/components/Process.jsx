import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MessageSquare, FileCheck, Code, Gift } from 'lucide-react';

const ProcessStep = ({ icon: Icon, step, title, description, isLast }) => {
  return (
    <div className="relative flex flex-col items-center md:items-start md:flex-row gap-8">
      {!isLast && (
        <div className="absolute left-1/2 md:left-8 top-16 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 to-transparent md:to-cyan-500/20 -translate-x-1/2 md:translate-x-0 hidden md:block" />
      )}
      
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        className="relative z-10 w-16 h-16 rounded-2xl bg-slate-800 border border-cyan-500/30 flex items-center justify-center shadow-lg shadow-cyan-500/20 shrink-0"
      >
        <Icon className="w-8 h-8 text-cyan-400" />
        <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center text-xs font-bold border border-slate-900">
          {step}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="flex-1 pb-12 text-center md:text-left"
      >
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-400 leading-relaxed">{description}</p>
      </motion.div>
    </div>
  );
};

const Process = () => {
  const steps = [
    {
      icon: Mail,
      title: "Contact Us",
      description: "Send us an email with your project requirements or initial idea. We'll get back to you within 24 hours."
    },
    {
      icon: MessageSquare,
      title: "Requirement Discussion",
      description: "We discuss the details, technologies, and scope of your project to ensure everything is clear."
    },
    {
      icon: FileCheck,
      title: "Quote & Timeline",
      description: "You get a transparent price quote and a delivery schedule. No hidden charges or delays."
    },
    {
      icon: Code,
      title: "Development & Updates",
      description: "We start building your project. You'll receive regular updates and screenshots of the progress."
    },
    {
      icon: Gift,
      title: "Delivery & Support",
      description: "Get the complete source code, documentation, and a walkthrough session. We support you until your viva."
    }
  ];

  return (
    <section id="process" className="py-24 relative bg-slate-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-4"
          >
            How It <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Works</span>
          </motion.h2>
          <p className="text-gray-400 text-lg">
            Simple 5-step process to get your project done.
          </p>
        </div>

        <div className="space-y-4">
          {steps.map((step, index) => (
            <ProcessStep 
              key={index} 
              step={index + 1} 
              {...step} 
              isLast={index === steps.length - 1} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
