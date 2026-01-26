import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Globe, Smartphone, Brain, Cpu, Database, Layout } from 'lucide-react';

const ServiceCard = ({ icon: Icon, title, description, color }) => {
  const ref = useRef(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    setRotateX(-yPct * 20);
    setRotateY(xPct * 20);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
        transition: 'transform 0.1s ease-out',
      }}
      className="relative h-full p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 group overflow-hidden"
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
      
      <div className="relative z-10">
        <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center mb-6 shadow-lg transform group-hover:scale-110 transition-transform duration-300`}>
          <Icon className="w-8 h-8 text-white" />
        </div>
        
        <h3 className="text-xl font-bold mb-4 text-white group-hover:text-cyan-400 transition-colors">
          {title}
        </h3>
        
        <p className="text-gray-400 leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

const Services = () => {
  const services = [
    {
      icon: Globe,
      title: "Web Development",
      description: "Modern, responsive websites using React, Next.js, and Tailwind CSS. Full-stack solutions with robust backends.",
      color: "from-cyan-500 to-blue-600"
    },
    {
      icon: Smartphone,
      title: "Mobile App Dev",
      description: "Native and cross-platform mobile applications for iOS and Android using React Native and Flutter.",
      color: "from-purple-500 to-pink-600"
    },
    {
      icon: Brain,
      title: "AI & Machine Learning",
      description: "Intelligent systems, predictive models, and data analysis using Python, TensorFlow, and PyTorch.",
      color: "from-emerald-500 to-green-600"
    },
    {
      icon: Database,
      title: "Backend Systems",
      description: "Scalable database architecture, API development, and cloud infrastructure management.",
      color: "from-blue-500 to-indigo-600"
    },
    {
      icon: Layout,
      title: "Software Development",
      description: "Custom desktop applications and enterprise software solutions tailored to your needs.",
      color: "from-pink-500 to-rose-600"
    }
  ];

  return (
    <section id="services" className="py-24 relative bg-slate-900 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-4"
          >
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Expertise</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 text-lg max-w-2xl mx-auto"
          >
            Comprehensive technical solutions for your final year projects. We cover everything from web to hardware.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <ServiceCard {...service} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
