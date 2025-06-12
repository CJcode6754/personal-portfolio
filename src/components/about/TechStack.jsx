import React from 'react';
import { Code, Users, ExternalLink } from 'lucide-react';

const TechStack = () => {
  const technologies = [
    { name: 'Next.js', icon: '⚡' },
    { name: 'React', icon: '⚛️' },
    { name: 'TypeScript', icon: '📘' },
    { name: 'Tailwind CSS', icon: '🎨' },
    { name: 'Node.js', icon: '🟢' },
    { name: 'ShadCN/UI', icon: '🧩' },
  ];

  const stats = [
    { number: '19+', label: 'Projects' },
    { number: '9+', label: 'Clients' },
    { number: '4+', label: 'Years' },
    { number: '100%', label: 'Satisfaction' },
  ];

  const services = [
    'Web Development',
    'UI/UX Design', 
    'Performance Optimization',
    'Technical Consulting',
    'Deployment & Hosting',
    'Maintenance & Support'
  ];

  return (
    <section className="py-24 bg-slate-950 ml-24">
      <div className="max-w-6xl mx-auto px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-light text-white mb-4">
            Tech Stack & Experience
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto">
            The technologies I work with and the results I deliver
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Left Column - Technologies & Stats */}
          <div className="space-y-12">
            
            {/* Technologies */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <Code className="w-5 h-5 text-slate-400" />
                <h3 className="text-xl font-light text-white">Technologies</h3>
              </div>
              
              <div className="grid gap-3">
                {technologies.map((tech, index) => (
                  <div key={index} className="group bg-slate-900 border border-slate-800 rounded-lg p-4 hover:border-slate-700 transition-colors">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className="text-lg">{tech.icon}</span>
                        <div>
                          <h4 className="text-white font-medium">{tech.name}</h4>
                        </div>
                      </div>
                      <ExternalLink className="w-4 h-4 text-slate-600 group-hover:text-slate-400 transition-colors" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <Users className="w-5 h-5 text-slate-400" />
                <h3 className="text-xl font-light text-white">By the Numbers</h3>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => (
                  <div key={index} className="bg-slate-900 border border-slate-800 rounded-lg p-6 text-center">
                    <div className="text-2xl font-light text-white mb-1">{stat.number}</div>
                    <div className="text-slate-500 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Services & CTA */}
          <div className="space-y-12">
            
            {/* Services */}
            <div>
              <h3 className="text-xl font-light text-white mb-8">Services</h3>
              <div className="grid gap-3">
                {services.map((service, index) => (
                  <div key={index} className="bg-slate-900 border border-slate-800 rounded-lg p-4 hover:border-slate-700 transition-colors">
                    <span className="text-slate-300">{service}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="bg-slate-900 border border-slate-800 rounded-lg p-8 text-center">
              <h3 className="text-xl font-light text-white mb-4">
                Ready to work together?
              </h3>
              <p className="text-slate-500 mb-6">
                Let's discuss your project and bring your ideas to life.
              </p>
              <button className="bg-white text-slate-950 px-6 py-2 rounded-md font-medium hover:bg-slate-100 transition-colors">
                Start a conversation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;