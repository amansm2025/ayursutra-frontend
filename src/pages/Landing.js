import React from 'react';
import { useNavigate } from 'react-router-dom';
import GlobalHeader from '../components/common/GlobalHeader';
import GlobalFooter from '../components/common/GlobalFooter';
import AnimatedCounter from '../components/common/AnimatedCounter';

const Landing = () => {
  const navigate = useNavigate();

  const features = [
    {
      title: 'Automated Scheduling',
      description: 'Smart appointment booking with conflict resolution',
      icon: '🤖'
    },
    {
      title: 'Smart Notifications',
      description: 'Timely reminders and therapy updates',
      icon: '🔔'
    },
    {
      title: 'Real-time Tracking',
      description: 'Monitor therapy progress and outcomes',
      icon: '📊'
    },
    {
      title: 'Progress Visualization',
      description: 'Visual insights into healing journey',
      icon: '📈'
    }
  ];



  return (
    <div className="min-h-screen bg-gradient-to-b from-ayur-light to-white">
      <GlobalHeader />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-ayur-light via-white to-emerald-50"></div>
          
          {/* Floating Orbs */}
          <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-ayur-accent/30 to-ayur-gold/40 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-l from-emerald-300/40 to-ayur-primary/30 rounded-full blur-3xl animate-bounce" style={{animationDuration: '6s'}}></div>
          <div className="absolute top-1/2 left-10 w-64 h-64 bg-gradient-to-br from-ayur-gold/25 to-white/50 rounded-full blur-2xl animate-ping" style={{animationDuration: '4s'}}></div>
          
          {/* Geometric Shapes */}
          <div className="absolute top-32 right-32 w-32 h-32 border-4 border-ayur-accent/30 rotate-45 animate-spin" style={{animationDuration: '20s'}}></div>
          <div className="absolute bottom-32 left-32 w-24 h-24 bg-ayur-gold/20 rotate-12 animate-pulse"></div>
          
          {/* Particle Effects */}
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-ayur-gold/60 rounded-full animate-pulse"
              style={{
                top: `${10 + Math.random() * 80}%`,
                left: `${5 + Math.random() * 90}%`,
                animationDelay: `${i * 0.2}s`,
                animationDuration: `${2 + Math.random() * 3}s`
              }}
            ></div>
          ))}
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            {/* Main Heading */}
            <div className="mb-8">
              <h1 className="text-7xl md:text-8xl font-black mb-4 leading-tight">
                <span className="block bg-gradient-to-r from-ayur-primary via-ayur-secondary to-emerald-600 bg-clip-text text-transparent animate-pulse" style={{fontFamily: 'Inter, system-ui, sans-serif', fontWeight: '900'}}>
                  HealPoint
                </span>
              </h1>
              <div className="relative">
                <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-2" style={{fontFamily: 'Inter, system-ui, sans-serif', letterSpacing: '-0.02em'}}>
                  <span className="inline-block animate-bounce" style={{animationDelay: '0s'}}>Online</span>
                  <span className="inline-block animate-bounce mx-3" style={{animationDelay: '0.1s'}}>Patient</span>
                  <span className="inline-block animate-bounce" style={{animationDelay: '0.2s'}}>Management</span>
                </h2>
                <h3 className="text-2xl md:text-3xl font-semibold bg-gradient-to-r from-ayur-gold to-ayur-accent bg-clip-text text-transparent" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>
                  & Therapy Scheduling
                </h3>
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-ayur-gold to-ayur-accent rounded-full animate-pulse"></div>
              </div>
            </div>
            
            {/* Description */}
            <div className="mb-12">
              <p className="text-xl md:text-2xl text-gray-700 max-w-5xl mx-auto leading-relaxed" style={{fontFamily: 'Inter, system-ui, sans-serif', fontWeight: '400', lineHeight: '1.6'}}>
                Bringing the <span className="font-semibold text-ayur-primary">timeless wisdom of Ayurveda</span> into the digital era with 
                <span className="bg-gradient-to-r from-ayur-secondary to-ayur-accent bg-clip-text text-transparent font-semibold"> automated scheduling</span>, 
                <span className="bg-gradient-to-r from-ayur-gold to-ayur-primary bg-clip-text text-transparent font-semibold"> smart notifications</span>, and 
                <span className="bg-gradient-to-r from-emerald-500 to-ayur-secondary bg-clip-text text-transparent font-semibold"> real-time progress tracking</span>.
              </p>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
              <button 
                onClick={() => navigate('/login')}
                className="group relative px-12 py-5 text-xl font-bold text-white bg-gradient-to-r from-ayur-primary to-ayur-secondary rounded-2xl shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 overflow-hidden"
                style={{fontFamily: 'Inter, system-ui, sans-serif'}}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-ayur-secondary to-ayur-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative z-10 flex items-center">
                  🌿 Book Your Therapy
                </span>
                <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </button>
              
              <button 
                onClick={() => navigate('/pricing')}
                className="group px-12 py-5 text-xl font-bold text-ayur-primary bg-white border-3 border-ayur-primary rounded-2xl shadow-xl hover:shadow-2xl hover:bg-ayur-primary hover:text-white transform hover:scale-105 transition-all duration-300"
                style={{fontFamily: 'Inter, system-ui, sans-serif'}}
              >
                💰 View Pricing
              </button>
            </div>
            
            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center items-center gap-8 text-gray-600">
              <div className="flex items-center space-x-2">
                <span className="text-2xl">✅</span>
                <span className="font-semibold">500+ Happy Patients</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-2xl">👨⚕️</span>
                <span className="font-semibold">50+ Expert Practitioners</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-2xl">⭐</span>
                <span className="font-semibold">4.9/5 Rating</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-ayur-primary rounded-full flex justify-center">
            <div className="w-1 h-3 bg-ayur-primary rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
        
        {/* Custom Styles */}
        <style jsx>{`
          .shadow-3xl {
            box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.25);
          }
          .border-3 {
            border-width: 3px;
          }
        `}</style>
      </section>

      {/* Features Section */}
      <section className="relative py-24 bg-gradient-to-br from-slate-50 via-white to-ayur-light/20 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-ayur-primary/20 to-ayur-gold/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-l from-emerald-400/25 to-ayur-accent/35 rounded-full blur-3xl" style={{animation: 'float 8s ease-in-out infinite'}}></div>
          
          {/* Grid Pattern */}
          <div className="absolute inset-0 opacity-5" style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, #2D5016 2px, transparent 2px), radial-gradient(circle at 75% 75%, #4A7C59 2px, transparent 2px)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Title */}
          <div className="text-center mb-20">
            <h3 className="text-5xl font-black mb-6" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>
              <span className="bg-gradient-to-r from-ayur-primary via-ayur-secondary to-emerald-600 bg-clip-text text-transparent">
                Why Choose
              </span>
              <br />
              <span className="bg-gradient-to-r from-ayur-gold via-ayur-accent to-ayur-primary bg-clip-text text-transparent animate-pulse">
                HealPoint?
              </span>
            </h3>
            <div className="w-32 h-1 bg-gradient-to-r from-ayur-gold to-ayur-accent mx-auto rounded-full animate-pulse"></div>
            <p className="text-xl text-gray-600 mt-6 max-w-3xl mx-auto" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>
              Experience the perfect blend of ancient wisdom and modern technology
            </p>
          </div>
          
          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Automated Scheduling',
                description: 'Smart appointment booking with conflict resolution',
                icon: '🤖',
                color: 'from-blue-500 to-indigo-600',
                bgGradient: 'from-blue-50 to-indigo-100'
              },
              {
                title: 'Smart Notifications',
                description: 'Timely reminders and therapy updates',
                icon: '🔔',
                color: 'from-emerald-500 to-teal-600',
                bgGradient: 'from-emerald-50 to-teal-100'
              },
              {
                title: 'Real-time Tracking',
                description: 'Monitor therapy progress and outcomes',
                icon: '📊',
                color: 'from-purple-500 to-pink-600',
                bgGradient: 'from-purple-50 to-pink-100'
              },
              {
                title: 'Progress Visualization',
                description: 'Visual insights into healing journey',
                icon: '📈',
                color: 'from-orange-500 to-red-600',
                bgGradient: 'from-orange-50 to-red-100'
              }
            ].map((feature, index) => (
              <div 
                key={index} 
                className="group relative"
                style={{
                  animation: `slideUp 0.6s ease-out ${index * 0.1}s both`
                }}
              >
                {/* Glow Effect */}
                <div className={`absolute -inset-1 bg-gradient-to-r ${feature.color} rounded-3xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200`}></div>
                
                {/* Main Card */}
                <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/50 group-hover:bg-white/95 transition-all duration-500 group-hover:scale-105 group-hover:shadow-2xl transform-gpu">
                  {/* Icon Container */}
                  <div className="relative mb-6">
                    <div className={`w-20 h-20 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mx-auto shadow-lg group-hover:shadow-2xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-6`}>
                      <span className="text-3xl relative z-10">{feature.icon}</span>
                      <div className="absolute inset-0 bg-white/20 rounded-2xl animate-ping opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    
                    {/* Floating Particles */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      {[...Array(6)].map((_, i) => (
                        <div
                          key={i}
                          className={`absolute w-2 h-2 bg-gradient-to-r ${feature.color} rounded-full animate-bounce`}
                          style={{
                            top: `${20 + Math.random() * 60}%`,
                            left: `${20 + Math.random() * 60}%`,
                            animationDelay: `${i * 0.1}s`,
                            animationDuration: '2s'
                          }}
                        ></div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="text-center">
                    <h4 className="text-2xl font-bold text-ayur-primary mb-4 group-hover:text-ayur-secondary transition-colors duration-300" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>
                      {feature.title}
                    </h4>
                    <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>
                      {feature.description}
                    </p>
                  </div>
                  
                  {/* Bottom Accent */}
                  <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${feature.color} rounded-b-3xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center`}></div>
                  
                  {/* Corner Decoration */}
                  <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-40 transition-opacity duration-300">
                    <div className={`w-8 h-8 border-2 border-current rounded-full animate-spin`} style={{animationDuration: '8s', color: feature.color.split(' ')[1]}}></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Custom Animations */}
        <style jsx>{`
          @keyframes slideUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-20px) rotate(180deg); }
          }
        `}</style>
      </section>

      {/* How It Works */}
      <section className="relative py-24 bg-gradient-to-b from-white via-ayur-light/30 to-white overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-10 right-20 w-64 h-64 bg-gradient-to-r from-ayur-accent/20 to-ayur-gold/25 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 left-10 w-80 h-80 bg-gradient-to-l from-emerald-300/20 to-ayur-primary/15 rounded-full blur-3xl" style={{animation: 'pulse 4s ease-in-out infinite'}}></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold bg-gradient-to-r from-ayur-primary to-ayur-secondary bg-clip-text text-transparent mb-4">
              How HealPoint Works
            </h3>
            <div className="w-24 h-1 bg-gradient-to-r from-ayur-gold to-ayur-accent mx-auto rounded-full"></div>
          </div>
          
          <div className="relative">
            {/* Connection Lines */}
            <div className="hidden md:block absolute top-24 left-1/2 transform -translate-x-1/2 w-full max-w-4xl">
              <svg className="w-full h-2" viewBox="0 0 800 20">
                <defs>
                  <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#8FBC8F" />
                    <stop offset="50%" stopColor="#DAA520" />
                    <stop offset="100%" stopColor="#4A7C59" />
                  </linearGradient>
                </defs>
                <path d="M50 10 Q400 5 750 10" stroke="url(#lineGradient)" strokeWidth="3" fill="none" strokeDasharray="10,5" className="animate-pulse" />
              </svg>
            </div>

            <div className="grid md:grid-cols-3 gap-12">
              {[
                {
                  step: '1',
                  title: 'Choose Your Therapy',
                  description: 'Browse our range of authentic Ayurvedic treatments',
                  icon: '🎯',
                  color: 'from-blue-500 to-purple-600',
                  bgColor: 'from-blue-50 to-purple-50'
                },
                {
                  step: '2',
                  title: 'Book Your Session',
                  description: 'Select your preferred date, time, and practitioner',
                  icon: '📅',
                  color: 'from-emerald-500 to-teal-600',
                  bgColor: 'from-emerald-50 to-teal-50'
                },
                {
                  step: '3',
                  title: 'Experience Healing',
                  description: 'Enjoy personalized treatment and track your progress',
                  icon: '🌟',
                  color: 'from-orange-500 to-red-600',
                  bgColor: 'from-orange-50 to-red-50'
                }
              ].map((item, index) => (
                <div key={index} className="group text-center relative">
                  {/* Card Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.bgColor} rounded-3xl transform group-hover:scale-105 transition-all duration-500 opacity-0 group-hover:opacity-100`}></div>
                  
                  <div className="relative z-10 p-8">
                    {/* Step Number */}
                    <div className="relative mb-6">
                      <div className={`w-20 h-20 bg-gradient-to-br ${item.color} rounded-full flex items-center justify-center mx-auto shadow-lg group-hover:shadow-2xl transition-all duration-500 group-hover:scale-110`}>
                        <span className="text-2xl text-white font-bold">{item.step}</span>
                      </div>
                      <div className={`absolute inset-0 w-20 h-20 bg-gradient-to-br ${item.color} rounded-full mx-auto animate-ping opacity-20`}></div>
                    </div>
                    
                    {/* Icon */}
                    <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300 group-hover:animate-bounce">
                      {item.icon}
                    </div>
                    
                    {/* Content */}
                    <h4 className="text-2xl font-bold text-ayur-primary mb-4 group-hover:text-ayur-secondary transition-colors duration-300">
                      {item.title}
                    </h4>
                    <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                      {item.description}
                    </p>
                    
                    {/* Decorative Arrow */}
                    {index < 2 && (
                      <div className="hidden md:block absolute top-1/2 -right-6 transform -translate-y-1/2">
                        <div className="text-ayur-accent text-3xl animate-pulse">→</div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="bg-gradient-to-r from-ayur-primary via-ayur-secondary to-ayur-primary py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-32 h-32 bg-ayur-gold rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-ayur-accent rounded-full blur-3xl animate-bounce" style={{animationDuration: '3s'}}></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-4xl font-bold text-center text-white mb-16">
            Our Impact in Numbers
          </h3>
          <div className="grid md:grid-cols-4 gap-8 text-center text-white">
            {[
              { number: 500, suffix: '+', label: 'Happy Patients', icon: '😊', color: 'from-green-400 to-green-600' },
              { number: 50, suffix: '+', label: 'Expert Practitioners', icon: '👨‍⚕️', color: 'from-blue-400 to-blue-600' },
              { number: 5000, suffix: '+', label: 'Sessions Completed', icon: '✅', color: 'from-purple-400 to-purple-600' },
              { number: 4.9, suffix: '', label: 'Average Rating', icon: '⭐', color: 'from-yellow-400 to-yellow-600', decimals: 1 }
            ].map((stat, index) => (
              <div key={index} className="group">
                <div className={`w-20 h-20 bg-gradient-to-br ${stat.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <span className="text-2xl">{stat.icon}</span>
                </div>
                <div className="text-5xl font-bold mb-2 group-hover:scale-105 transition-transform duration-300">
                  <AnimatedCounter 
                    end={stat.number} 
                    suffix={stat.suffix} 
                    duration={2500}
                    decimals={stat.decimals || 0}
                  />
                </div>
                <div className="text-ayur-light text-lg font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="relative py-24 overflow-hidden bg-gradient-to-br from-slate-50 via-ayur-light to-emerald-50">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-ayur-accent/20 to-ayur-gold/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-l from-emerald-200/40 to-ayur-primary/20 rounded-full blur-3xl animate-bounce" style={{animationDuration: '8s'}}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-ayur-gold/15 to-white/30 rounded-full blur-2xl animate-spin" style={{animationDuration: '20s'}}></div>
          
          {/* Floating Particles */}
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute w-3 h-3 bg-ayur-gold/40 rounded-full animate-pulse"
              style={{
                top: `${10 + Math.random() * 80}%`,
                left: `${5 + Math.random() * 90}%`,
                animationDelay: `${i * 0.3}s`,
                animationDuration: `${2 + Math.random() * 3}s`
              }}
            ></div>
          ))}
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Animated Title */}
          <div className="text-center mb-20">
            <div className="inline-block">
              <h3 className="text-5xl font-bold bg-gradient-to-r from-ayur-primary via-ayur-secondary to-emerald-600 bg-clip-text text-transparent mb-4 animate-pulse">
                What Our Users Say
              </h3>
              <div className="w-32 h-1 bg-gradient-to-r from-ayur-gold to-ayur-accent mx-auto rounded-full animate-pulse"></div>
            </div>
            <p className="text-xl text-gray-600 mt-6 max-w-2xl mx-auto">
              Real stories from our community of healers and patients
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Dr. Priya Sharma',
                role: 'Ayurvedic Practitioner',
                text: 'HealPoint has transformed how I manage my practice. The automated scheduling saves hours every week.',
                rating: 5,
                avatar: '👩‍⚕️',
                color: 'from-pink-400 to-rose-500'
              },
              {
                name: 'Rajesh Kumar',
                role: 'Patient',
                text: 'The progress tracking helped me stay motivated throughout my online treatment.',
                rating: 5,
                avatar: '👨‍💼',
                color: 'from-blue-400 to-indigo-500'
              },
              {
                name: 'Sarah Johnson',
                role: 'Wellness Enthusiast',
                text: 'Amazing platform! The booking system is so intuitive and the practitioners are excellent.',
                rating: 5,
                avatar: '👩‍🦰',
                color: 'from-emerald-400 to-teal-500'
              }
            ].map((testimonial, index) => (
              <div 
                key={index} 
                className="group relative"
              >
                {/* Card Glow Effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-ayur-gold via-ayur-accent to-ayur-primary rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                
                {/* Main Card */}
                <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-white/50 group-hover:bg-white/90 transition-all duration-500 group-hover:scale-105 group-hover:shadow-3xl">
                  {/* Quote Icon */}
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-ayur-gold to-ayur-accent rounded-full flex items-center justify-center shadow-lg group-hover:rotate-12 transition-transform duration-300">
                    <span className="text-white text-xl font-bold">"</span>
                  </div>
                  
                  {/* Avatar */}
                  <div className="text-center mb-6">
                    <div className={`w-20 h-20 bg-gradient-to-br ${testimonial.color} rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 relative overflow-hidden`}>
                      <span className="text-3xl relative z-10">{testimonial.avatar}</span>
                      <div className="absolute inset-0 bg-white/20 rounded-full animate-ping"></div>
                    </div>
                    
                    {/* Animated Stars */}
                    <div className="flex justify-center mb-4 space-x-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <span 
                          key={i} 
                          className="text-yellow-400 text-2xl animate-bounce"
                          style={{
                            animationDelay: `${i * 0.1}s`,
                            animationDuration: '2s'
                          }}
                        >
                          ⭐
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Testimonial Text */}
                  <div className="relative">
                    <p className="text-gray-700 mb-6 italic text-lg leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
                      "{testimonial.text}"
                    </p>
                    
                    {/* User Info */}
                    <div className="border-t border-gray-200 pt-4">
                      <p className="font-bold text-ayur-primary text-lg group-hover:text-ayur-secondary transition-colors duration-300">
                        {testimonial.name}
                      </p>
                      <p className="text-gray-500 group-hover:text-gray-600 transition-colors duration-300">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                  
                  {/* Decorative Elements */}
                  <div className="absolute bottom-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                    <div className="w-16 h-16 border-2 border-ayur-accent rounded-full animate-spin" style={{animationDuration: '10s'}}></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Custom CSS */}
        <style jsx>{`
          @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-10px) rotate(1deg); }
          }
          .shadow-3xl {
            box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.25);
          }
        `}</style>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl font-bold text-ayur-primary mb-4">
            Ready to Begin Your Healing Journey?
          </h3>
          <p className="text-xl text-gray-700 mb-8">
            Join thousands of satisfied patients who have experienced the power of authentic Ayurveda
          </p>
          <div className="space-x-4">
            <button 
              onClick={() => navigate('/login')}
              className="btn-primary text-lg px-8 py-4"
            >
              Book Your First Session
            </button>
            <button 
              onClick={() => navigate('/pricing')}
              className="btn-secondary text-lg px-8 py-4"
            >
              View All Pricing
            </button>
          </div>
        </div>
      </section>

      <GlobalFooter />
    </div>
  );
};

export default Landing;