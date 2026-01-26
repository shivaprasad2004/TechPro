import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Code, Database, Cpu } from 'lucide-react';

const Hero = () => {
  return (
    <div id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-slate-900">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/20 rounded-full blur-[100px] animate-pulse-slow" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/20 rounded-full blur-[100px] animate-pulse-slow" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6 backdrop-blur-md">
              <span className="text-cyan-400 font-medium">Final Year Project Experts</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Build Your Dream <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">
                Tech Project
              </span>
            </h1>
            
            <p className="text-gray-400 text-lg md:text-xl mb-8 max-w-lg leading-relaxed">
              Premium freelance services for computer science students. 
              Web Development, AI/ML, Mobile Apps, and more. 
              Get distinction-grade projects with documentation.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#contact"
                className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl font-bold text-white shadow-lg shadow-cyan-500/25 overflow-hidden transition-all hover:scale-105"
              >
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                <span className="relative flex items-center gap-2">
                  Start Your Project <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </a>
              
              <a 
                href="#services"
                className="px-8 py-4 bg-white/5 border border-white/10 rounded-xl font-bold text-white hover:bg-white/10 transition-all hover:scale-105 flex items-center justify-center gap-2"
              >
                View Services
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              {/* Floating Cards */}
              <motion.div 
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-0 right-0 p-6 glass-card rounded-2xl z-20"
              >
                <Code className="w-8 h-8 text-cyan-400 mb-2" />
                <div className="h-2 w-24 bg-white/20 rounded mb-2" />
                <div className="h-2 w-16 bg-white/10 rounded" />
              </motion.div>

              <motion.div 
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-10 left-0 p-6 glass-card rounded-2xl z-20"
              >
                <Database className="w-8 h-8 text-purple-400 mb-2" />
                <div className="h-2 w-24 bg-white/20 rounded mb-2" />
                <div className="h-2 w-16 bg-white/10 rounded" />
              </motion.div>

              <motion.div 
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                className="absolute bottom-20 right-10 p-6 glass-card rounded-2xl z-20"
              >
                <Cpu className="w-8 h-8 text-blue-400 mb-2" />
                <div className="h-2 w-24 bg-white/20 rounded mb-2" />
                <div className="h-2 w-16 bg-white/10 rounded" />
              </motion.div>

              {/* Main Abstract Shape */}
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/30 to-purple-500/30 rounded-full blur-3xl animate-pulse" />
              <div className="relative z-10 w-full h-full bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-3xl p-8 transform rotate-6 hover:rotate-0 transition-transform duration-500">
                <div className="w-full h-full bg-slate-900/50 rounded-2xl p-6 border border-white/5">
                  <div className="flex gap-2 mb-4">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                  </div>
                  <div className="space-y-3">
                    <div className="h-2 w-3/4 bg-white/20 rounded animate-pulse" />
                    <div className="h-2 w-1/2 bg-white/10 rounded" />
                    <div className="h-2 w-full bg-white/10 rounded" />
                    <div className="h-2 w-5/6 bg-white/10 rounded" />
                  </div>
                  <div className="mt-8 grid grid-cols-2 gap-4">
                    <div className="h-24 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-xl border border-cyan-500/30" />
                    <div className="h-24 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl border border-purple-500/30" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
