import React from 'react';
import { motion } from 'framer-motion';

const TechBadge = ({ name, color, category }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.1, rotate: 2 }}
      className="relative group cursor-default"
    >
      <div className={`absolute inset-0 bg-gradient-to-r ${color} rounded-xl blur-lg opacity-20 group-hover:opacity-40 transition-opacity duration-300`} />
      <div className="relative px-6 py-4 bg-slate-800/50 backdrop-blur-sm border border-white/10 rounded-xl flex items-center justify-center gap-3 hover:border-white/30 transition-colors">
        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${color}`} />
        <div>
          <span className="block font-bold text-white tracking-wide">{name}</span>
          <span className="text-xs text-gray-400 font-mono">{category}</span>
        </div>
      </div>
    </motion.div>
  );
};

const TechStack = () => {
  const technologies = [
    { name: "React", color: "from-cyan-400 to-blue-500", category: "Frontend" },
    { name: "Python", color: "from-blue-400 to-yellow-400", category: "AI/ML & Backend" },
    { name: "Node.js", color: "from-green-400 to-emerald-600", category: "Backend" },
    { name: "TensorFlow", color: "from-orange-400 to-red-500", category: "Machine Learning" },
    { name: "MongoDB", color: "from-green-500 to-teal-600", category: "Database" },
    { name: "Java", color: "from-red-500 to-orange-600", category: "Application" },
    { name: "C++", color: "from-blue-500 to-indigo-600", category: "System" },
    { name: "MySQL", color: "from-blue-400 to-cyan-500", category: "Database" },
    { name: "JavaScript", color: "from-yellow-400 to-orange-500", category: "Language" },
    { name: "Flutter", color: "from-cyan-400 to-blue-500", category: "Mobile" },
    { name: "Next.js", color: "from-gray-200 to-white", category: "Full Stack" },
  ];

  return (
    <section id="tech" className="py-24 relative bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-4"
          >
            Technologies We <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-500">Master</span>
          </motion.h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            We use the latest and most reliable technologies to build your projects.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
            >
              <TechBadge {...tech} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
