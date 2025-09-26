import React from 'react';
import { useNavigate } from 'react-router-dom';
import { LOGO_CONFIG } from '../../constants';

const GlobalFooter = () => {
  const navigate = useNavigate();

  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-ayur-primary to-emerald-900 text-white overflow-hidden">
      {/* Animated Background Layers */}
      <div className="absolute inset-0">
        {/* Primary Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-ayur-primary/90 via-transparent to-ayur-secondary/80"></div>
        
        {/* Animated Geometric Patterns */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full">
            {/* Floating Orbs */}
            <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-ayur-gold/30 to-ayur-accent/40 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-32 right-16 w-80 h-80 bg-gradient-to-l from-emerald-400/25 to-ayur-gold/35 rounded-full blur-3xl animate-bounce" style={{animationDuration: '6s'}}></div>
            <div className="absolute top-1/2 left-1/4 w-48 h-48 bg-gradient-to-br from-white/20 to-ayur-light/30 rounded-full blur-2xl animate-ping" style={{animationDuration: '4s'}}></div>
            
            {/* Geometric Shapes */}
            <div className="absolute top-16 right-1/4 w-32 h-32 bg-ayur-accent/20 rotate-45 animate-spin" style={{animationDuration: '20s'}}></div>
            <div className="absolute bottom-20 left-1/3 w-24 h-24 bg-ayur-gold/25 rotate-12 animate-pulse"></div>
            
            {/* Hexagon Pattern */}
            <div className="absolute top-1/3 right-20 w-16 h-16 bg-white/10" style={{
              clipPath: 'polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)',
              animation: 'float 8s ease-in-out infinite'
            }}></div>
          </div>
        </div>
        
        {/* Particle Effect Simulation */}
        <div className="absolute inset-0 opacity-30">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-ayur-gold rounded-full animate-pulse"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${3 + Math.random() * 2}s`
              }}
            ></div>
          ))}
        </div>
        
        {/* Wave Animation */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden">
          <svg className="relative w-full h-20" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path 
              d="M0,60 C300,120 900,0 1200,60 L1200,120 L0,120 Z" 
              fill="rgba(255,255,255,0.05)"
              className="animate-pulse"
            />
            <path 
              d="M0,80 C400,20 800,100 1200,40 L1200,120 L0,120 Z" 
              fill="rgba(139,195,74,0.1)"
              style={{animation: 'wave 6s ease-in-out infinite'}}
            />
          </svg>
        </div>
        
        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}></div>
        
        {/* Radial Gradient Spotlight */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-full bg-gradient-radial from-ayur-accent/20 via-transparent to-transparent opacity-40"></div>
      </div>
      
      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        @keyframes wave {
          0%, 100% { transform: translateX(0px); }
          50% { transform: translateX(-50px); }
        }
        .bg-gradient-radial {
          background: radial-gradient(circle, var(--tw-gradient-stops));
        }
      `}</style>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-1 space-y-6">
            <div className="group">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-white to-ayur-light rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl">{LOGO_CONFIG.icon}</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-white to-ayur-light bg-clip-text text-transparent">
                    {LOGO_CONFIG.name}
                  </h3>
                  <p className="text-ayur-light text-sm font-medium">{LOGO_CONFIG.tagline}</p>
                </div>
              </div>
            </div>
            <p className="text-ayur-light leading-relaxed">
              Bridging ancient Ayurvedic wisdom with modern technology for holistic wellness and healing.
            </p>
            <div className="flex space-x-4">
              {['🌿', '💚', '✨'].map((icon, index) => (
                <div key={index} className="w-10 h-10 bg-ayur-accent/20 rounded-full flex items-center justify-center hover:bg-ayur-accent/30 transition-colors duration-300">
                  <span className="text-lg">{icon}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-xl font-bold relative">
              Quick Links
              <div className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-ayur-gold to-ayur-accent rounded-full"></div>
            </h4>
            <div className="space-y-3">
              {[
                { label: 'Home', path: '/' },
                { label: 'About Us', path: '/about' },
                { label: 'Services', path: '/pricing' },
                { label: 'Contact', path: '/contact' },
                { label: 'Login', path: '/login' }
              ].map((link, index) => (
                <button
                  key={index}
                  onClick={() => navigate(link.path)}
                  className="group flex items-center space-x-2 text-ayur-light hover:text-white transition-all duration-300 hover:translate-x-2"
                >
                  <span className="w-1 h-1 bg-ayur-gold rounded-full group-hover:w-2 transition-all duration-300"></span>
                  <span>{link.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="text-xl font-bold relative">
              Get in Touch
              <div className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-ayur-gold to-ayur-accent rounded-full"></div>
            </h4>
            <div className="space-y-4">
              {[
                { icon: '📧', text: 'info@healpoint.com', type: 'email' },
                { icon: '📞', text: '+91 98765 43210', type: 'phone' },
                { icon: '📍', text: '123 Wellness Street, Health City', type: 'address' },
                { icon: '🕒', text: 'Mon-Sat: 9AM-6PM', type: 'hours' }
              ].map((item, index) => (
                <div key={index} className="group flex items-start space-x-3 hover:bg-white/5 p-2 rounded-lg transition-colors duration-300">
                  <span className="text-lg group-hover:scale-110 transition-transform duration-300">{item.icon}</span>
                  <span className="text-ayur-light group-hover:text-white transition-colors duration-300">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Social & Newsletter */}
          <div className="space-y-6">
            <h4 className="text-xl font-bold relative">
              Stay Connected
              <div className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-ayur-gold to-ayur-accent rounded-full"></div>
            </h4>
            
            {/* Social Links */}
            <div className="grid grid-cols-2 gap-3">
              {[
                { icon: '📘', name: 'Facebook', color: 'hover:bg-blue-600' },
                { icon: '🐦', name: 'Twitter', color: 'hover:bg-sky-500' },
                { icon: '💼', name: 'LinkedIn', color: 'hover:bg-blue-700' },
                { icon: '📷', name: 'Instagram', color: 'hover:bg-pink-600' }
              ].map((social, index) => (
                <button
                  key={index}
                  className={`group flex items-center justify-center space-x-2 p-3 bg-white/10 rounded-xl ${social.color} transition-all duration-300 hover:scale-105 hover:shadow-lg`}
                >
                  <span className="text-lg group-hover:scale-110 transition-transform duration-300">{social.icon}</span>
                </button>
              ))}
            </div>

            {/* Newsletter */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
              <p className="text-sm text-ayur-light mb-3">Subscribe to our wellness newsletter</p>
              <div className="flex space-x-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-3 py-2 bg-white/20 border border-white/30 rounded-lg text-white placeholder-ayur-light text-sm focus:outline-none focus:border-ayur-gold transition-colors duration-300"
                />
                <button className="px-4 py-2 bg-gradient-to-r from-ayur-gold to-ayur-accent text-ayur-primary font-semibold rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105">
                  ✉️
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-4">
              <p className="text-ayur-light">
                &copy; 2024 {LOGO_CONFIG.name}. All rights reserved.
              </p>
              <div className="hidden md:flex items-center space-x-2 text-ayur-light">
                <span>Made with</span>
                <span className="text-red-400 animate-pulse">❤️</span>
                <span>in India</span>
              </div>
            </div>
            <div className="flex flex-wrap justify-center md:justify-end space-x-6">
              {['Privacy Policy', 'Terms of Service', 'Support', 'Sitemap'].map((link, index) => (
                <button
                  key={index}
                  className="text-ayur-light hover:text-white transition-colors duration-300 text-sm hover:underline underline-offset-4"
                >
                  {link}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default GlobalFooter;