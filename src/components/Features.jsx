import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Clock, FileText, Code2, RefreshCw, IndianRupee } from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, description, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className="group relative p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors duration-300"
    >
      <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
        <Icon className="w-24 h-24" />
      </div>
      
      <div className="relative z-10">
        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
          <Icon className="w-6 h-6 text-cyan-400" />
        </div>
        
        <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
        <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
};

const Features = () => {
  const features = [
    {
      icon: CheckCircle,
      title: "100% Original Work",
      description: "Every project is built from scratch ensuring zero plagiarism and unique implementation tailored to your requirements."
    },
    {
      icon: Clock,
      title: "On-Time Delivery",
      description: "Strict adherence to deadlines. We ensure you have enough time to review and prepare before your submission."
    },
    {
      icon: FileText,
      title: "Detailed Documentation",
      description: "Complete project reports, SRS, diagrams, and setup guides included to help you ace your documentation."
    },
    {
      icon: Code2,
      title: "Code Explanation",
      description: "One-on-one sessions to explain the codebase, logic, and architecture so you can confidently present your project."
    },
    {
      icon: RefreshCw,
      title: "Revision Support",
      description: "Free revisions based on supervisor feedback to ensure your project meets all academic requirements."
    },
    {
      icon: IndianRupee,
      title: "Student Friendly Pricing",
      description: "Affordable rates designed specifically for college students without compromising on quality."
    }
  ];

  return (
    <section id="features" className="py-24 relative bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Why Choose <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
                Our Services?
              </span>
            </h2>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              We understand the pressure of final year projects. Our team provides end-to-end support
              ensuring not just a working project, but a complete learning experience that prepares
              you for your viva and future career.
            </p>
            
            <div className="p-6 rounded-2xl bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20">
              <div className="flex items-center gap-4 mb-2">
                <div className="flex -space-x-4">
                  {[
                    "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop",
                    "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&h=100&fit=crop",
                    "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=100&h=100&fit=crop",
                    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop"
                  ].map((src, i) => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-slate-900 overflow-hidden">
                      <img src={src} alt={`Student ${i + 1}`} className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>
                <span className="text-sm font-medium text-purple-400">500+ Happy Students</span>
              </div>
              <p className="text-sm text-gray-400">Join hundreds of students from IITs, NITs, and top colleges who secured top grades with our help.</p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <FeatureCard 
                key={index} 
                {...feature} 
                delay={index * 0.1}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Features;
