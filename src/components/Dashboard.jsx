import React from 'react';
import { motion } from 'framer-motion';
import { Activity, Users, Zap, Clock, TrendingUp, Award, Calendar } from 'lucide-react';

const Dashboard = ({ user }) => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white pt-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Welcome Section */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-600 mb-2">
            Welcome back, {user?.name || 'Developer'}!
          </h1>
          <p className="text-slate-400 text-lg">
            Here's what's happening in your TechPro workspace today.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div 
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
        >
          {[
            { label: 'Active Projects', value: '12', icon: Zap, color: 'text-yellow-400' },
            { label: 'Team Members', value: '24', icon: Users, color: 'text-blue-400' },
            { label: 'Hours Coded', value: '1,234', icon: Clock, color: 'text-purple-400' },
            { label: 'Efficiency', value: '+14%', icon: TrendingUp, color: 'text-green-400' }
          ].map((stat, index) => (
            <motion.div 
              key={index}
              variants={item}
              className="bg-slate-900/50 border border-white/5 rounded-2xl p-6 backdrop-blur-sm hover:bg-slate-900/80 transition-colors"
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`p-3 rounded-xl bg-white/5 ${stat.color}`}>
                  <stat.icon className="w-6 h-6" />
                </div>
                <span className={`text-sm font-medium ${stat.color} bg-white/5 px-2 py-1 rounded-lg`}>
                  Live
                </span>
              </div>
              <h3 className="text-3xl font-bold text-white mb-1">{stat.value}</h3>
              <p className="text-slate-400 text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Recent Activity & Upcoming */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Activity Feed */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="lg:col-span-2 bg-slate-900/50 border border-white/5 rounded-2xl p-6 backdrop-blur-sm"
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold flex items-center gap-2">
                <Activity className="w-5 h-5 text-cyan-400" />
                Recent Activity
              </h2>
              <button className="text-sm text-cyan-400 hover:text-cyan-300">View All</button>
            </div>
            <div className="space-y-6">
              {[
                { title: 'Project "Alpha" deployed', time: '2 hours ago', type: 'deployment' },
                { title: 'New team member joined', time: '4 hours ago', type: 'team' },
                { title: 'System maintenance scheduled', time: 'Yesterday', type: 'system' }
              ].map((activity, i) => (
                <div key={i} className="flex items-start gap-4 group">
                  <div className="w-2 h-2 mt-2 rounded-full bg-cyan-500 ring-4 ring-cyan-500/20 group-hover:bg-cyan-400 transition-colors" />
                  <div>
                    <p className="text-white font-medium group-hover:text-cyan-400 transition-colors">{activity.title}</p>
                    <p className="text-slate-500 text-sm">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="space-y-6"
          >
            {/* Pro Card */}
            <div className="bg-gradient-to-br from-indigo-600 to-violet-700 rounded-2xl p-6 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <Award className="w-24 h-24" />
              </div>
              <h3 className="text-lg font-bold mb-2">Pro Plan</h3>
              <p className="text-indigo-200 text-sm mb-4">You are currently on the Pro plan. Your next billing date is March 1st.</p>
              <button className="w-full py-2 bg-white/10 hover:bg-white/20 rounded-lg text-sm font-medium transition-colors">
                Manage Subscription
              </button>
            </div>

            {/* Upcoming Events */}
            <div className="bg-slate-900/50 border border-white/5 rounded-2xl p-6 backdrop-blur-sm">
              <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                <Calendar className="w-5 h-5 text-purple-400" />
                Upcoming
              </h3>
              <div className="space-y-4">
                <div className="p-3 rounded-lg bg-white/5 border border-white/5">
                  <p className="text-sm font-medium text-white">Team Sync</p>
                  <p className="text-xs text-slate-400">Tomorrow, 10:00 AM</p>
                </div>
                <div className="p-3 rounded-lg bg-white/5 border border-white/5">
                  <p className="text-sm font-medium text-white">Project Review</p>
                  <p className="text-xs text-slate-400">Feb 15, 2:00 PM</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
