import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { HEADER_LINKS, LOGO_CONFIG } from '../../constants';

const GlobalHeader = () => {
  const navigate = useNavigate();
  const { user, isAuthenticated, logout } = useAuth();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <header className={`relative backdrop-blur-xl border-b sticky top-0 z-50 transition-all duration-500 ${
      scrolled 
        ? 'bg-white/95 shadow-2xl border-gray-200/50 py-2' 
        : 'bg-white/80 shadow-lg border-white/20 py-4'
    }`}>
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-32 h-32 bg-gradient-to-r from-ayur-primary/10 to-ayur-gold/15 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-0 right-1/4 w-40 h-40 bg-gradient-to-l from-emerald-400/10 to-ayur-accent/15 rounded-full blur-3xl animate-bounce" style={{animationDuration: '6s'}}></div>
        
        {/* Particle Effects */}
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-ayur-gold/40 rounded-full animate-pulse"
            style={{
              top: `${20 + Math.random() * 60}%`,
              left: `${10 + Math.random() * 80}%`,
              animationDelay: `${i * 0.3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          ></div>
        ))}
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div 
            className="flex items-center space-x-4 cursor-pointer group"
            onClick={() => navigate('/')}
          >
            <div className="relative group-hover:animate-pulse">
              {/* Outer Glow Ring */}
              <div className="absolute -inset-2 bg-gradient-to-r from-ayur-gold via-ayur-accent to-ayur-primary rounded-full blur-lg opacity-30 group-hover:opacity-70 animate-spin" style={{animationDuration: '8s'}}></div>
              
              {/* Main Logo Container */}
              <div className="relative w-20 h-20 bg-gradient-to-br from-ayur-primary via-ayur-secondary to-ayur-accent rounded-full flex items-center justify-center shadow-2xl group-hover:shadow-3xl transition-all duration-700 group-hover:scale-125 group-hover:rotate-12 overflow-hidden">
                {/* Animated Background Layers */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/40 via-transparent to-ayur-gold/30 rounded-full animate-pulse"></div>
                <div className="absolute inset-0 bg-gradient-to-bl from-transparent via-ayur-accent/20 to-white/20 rounded-full" style={{animation: 'spin 15s linear infinite reverse'}}></div>
                
                {/* Inner Logo Circle */}
                <div className="relative w-14 h-14 bg-gradient-to-br from-white via-ayur-light to-white rounded-full flex items-center justify-center shadow-xl border-2 border-white/50 overflow-hidden group-hover:scale-110 transition-transform duration-500">
                  {/* Shimmer Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent -skew-x-12 animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{animation: 'shimmer 2s ease-in-out infinite'}}></div>
                  
                  {/* Main H Letter */}
                  <span className="text-3xl font-black bg-gradient-to-br from-ayur-primary via-ayur-secondary to-ayur-accent bg-clip-text text-transparent relative z-10 group-hover:scale-125 transition-all duration-500 drop-shadow-lg" style={{fontFamily: 'Inter, system-ui, sans-serif', textShadow: '0 2px 4px rgba(0,0,0,0.1)'}}>
                    H
                  </span>
                  
                  {/* Floating Particles Inside */}
                  {[...Array(4)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-1 h-1 bg-ayur-gold rounded-full animate-bounce opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{
                        top: `${20 + Math.random() * 60}%`,
                        left: `${20 + Math.random() * 60}%`,
                        animationDelay: `${i * 0.2}s`,
                        animationDuration: '1.5s'
                      }}
                    ></div>
                  ))}
                </div>
                
                {/* Rotating Ring */}
                <div className="absolute inset-1 border-2 border-ayur-gold/30 rounded-full animate-spin opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{animationDuration: '4s'}}></div>
              </div>
              
              {/* Plus Badge */}
              <div className="absolute -top-3 -right-3 w-8 h-8 bg-gradient-to-r from-ayur-gold via-yellow-400 to-ayur-accent rounded-full flex items-center justify-center shadow-xl animate-bounce group-hover:scale-125 transition-transform duration-300 border-2 border-white">
                <span className="text-sm text-white font-black drop-shadow-lg">+</span>
                <div className="absolute inset-0 bg-white/20 rounded-full animate-ping"></div>
              </div>
              
              {/* Floating Orbs */}
              <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full animate-pulse shadow-lg"></div>
              <div className="absolute top-0 left-0 w-2 h-2 bg-gradient-to-r from-pink-400 to-rose-500 rounded-full animate-bounce" style={{animationDelay: '0.5s'}}></div>
              <div className="absolute bottom-0 right-2 w-3 h-3 bg-gradient-to-r from-purple-400 to-indigo-500 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
              
              {/* Hover Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-ayur-primary/20 via-ayur-gold/30 to-ayur-accent/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>
            </div>
            
            {/* Custom Animations */}
            <style jsx>{`
              @keyframes shimmer {
                0% { transform: translateX(-100%) skewX(-12deg); }
                100% { transform: translateX(200%) skewX(-12deg); }
              }
            `}</style>
            <div>
              <h1 className="text-4xl font-black tracking-tight bg-gradient-to-r from-ayur-primary via-ayur-secondary to-emerald-600 bg-clip-text text-transparent group-hover:from-ayur-gold group-hover:to-ayur-primary transition-all duration-500" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>
                {LOGO_CONFIG.name}
              </h1>
              <p className="text-sm text-gray-500 hidden sm:block font-semibold tracking-wide bg-gradient-to-r from-gray-500 to-ayur-primary bg-clip-text text-transparent">{LOGO_CONFIG.tagline}</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-2">
            {HEADER_LINKS.map((link, index) => (
              <button
                key={link.label}
                onClick={() => navigate(link.path)}
                className="relative px-8 py-4 text-gray-700 hover:text-white font-bold text-sm tracking-wide transition-all duration-500 rounded-2xl group overflow-hidden"
                style={{fontFamily: 'Inter, system-ui, sans-serif'}}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-ayur-primary/0 via-ayur-secondary/0 to-ayur-accent/0 group-hover:from-ayur-primary group-hover:via-ayur-secondary group-hover:to-ayur-accent transition-all duration-500 rounded-2xl"></div>
                <span className="relative z-10 group-hover:scale-105 transition-transform duration-300">{link.label}</span>
                <div className="absolute bottom-2 left-1/2 w-2 h-2 bg-gradient-to-r from-ayur-gold to-ayur-accent rounded-full transform -translate-x-1/2 scale-0 group-hover:scale-100 transition-transform duration-300 animate-pulse"></div>
              </button>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            {isAuthenticated() ? (
              <>
                <div className="flex items-center space-x-3 px-4 py-2 bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl border border-gray-200">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">{(user?.name?.charAt(0) || 'U').toUpperCase()}</span>
                  </div>
                  <span className="text-gray-700 font-semibold text-sm">
                    {user?.name?.split(' ')[0] || 'User'}
                  </span>
                </div>
                <button 
                  onClick={() => {
                    if (user?.role === 'patient') navigate('/patient');
                    else if (user?.role === 'practitioner') navigate('/practitioner');
                    else navigate('/admin');
                  }}
                  className="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-2xl font-semibold text-sm hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  Dashboard
                </button>
                <button 
                  onClick={handleLogout}
                  className="px-4 py-3 text-gray-500 hover:text-red-600 font-semibold text-sm transition-all duration-300 hover:bg-red-50 rounded-2xl"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <button 
                  onClick={() => navigate('/login')}
                  className="px-6 py-3 text-gray-700 hover:text-blue-600 font-semibold text-sm transition-all duration-300 hover:bg-blue-50 rounded-2xl"
                >
                  Sign In
                </button>
                <button 
                  onClick={() => navigate('/signup')}
                  className="px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-2xl font-semibold text-sm transition-all duration-300 border border-gray-200 hover:border-gray-300"
                >
                  Register
                </button>
                <button 
                  onClick={() => navigate('/login')}
                  className="relative px-10 py-4 bg-gradient-to-r from-ayur-primary via-ayur-secondary to-ayur-accent text-white rounded-3xl font-black text-sm shadow-2xl hover:shadow-3xl transform hover:scale-110 transition-all duration-500 overflow-hidden group"
                  style={{fontFamily: 'Inter, system-ui, sans-serif'}}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-ayur-gold via-ayur-accent to-ayur-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative z-10 flex items-center space-x-2">
                    <span>✨</span>
                    <span>Book Appointment</span>
                    <span className="group-hover:animate-bounce">🏥</span>
                  </span>
                </button>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-3 bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl hover:from-gray-100 hover:to-blue-100 transition-all duration-300 border border-gray-200"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span className={`block w-6 h-1 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-full transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`block w-6 h-1 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-full mt-1 transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block w-6 h-1 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-full mt-1 transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 animate-fade-in">
            <nav className="flex flex-col space-y-4">
              {HEADER_LINKS.map((link) => (
                <button
                  key={link.label}
                  onClick={() => {
                    navigate(link.path);
                    setIsMobileMenuOpen(false);
                  }}
                  className="text-left text-gray-700 hover:text-ayur-primary font-medium transition-colors duration-300"
                >
                  {link.label}
                </button>
              ))}
              <div className="flex flex-col space-y-2 pt-4 border-t border-gray-200">
                {isAuthenticated() ? (
                  <>
                    <span className="text-ayur-primary font-medium">
                      Welcome, {user?.name?.split(' ')[0] || 'User'}
                    </span>
                    <button 
                      onClick={() => {
                        if (user?.role === 'patient') navigate('/patient');
                        else if (user?.role === 'practitioner') navigate('/practitioner');
                        else navigate('/admin');
                        setIsMobileMenuOpen(false);
                      }}
                      className="text-left text-ayur-primary hover:text-ayur-secondary font-medium transition-colors duration-300"
                    >
                      Dashboard
                    </button>
                    <button 
                      onClick={() => {
                        handleLogout();
                        setIsMobileMenuOpen(false);
                      }}
                      className="text-left text-gray-600 hover:text-ayur-primary font-medium transition-colors duration-300"
                    >
                      Logout
                    </button>
                  </>
                ) : (
                  <>
                    <button 
                      onClick={() => {
                        navigate('/login');
                        setIsMobileMenuOpen(false);
                      }}
                      className="text-left text-ayur-primary hover:text-ayur-secondary font-medium transition-colors duration-300"
                    >
                      Login
                    </button>
                    <button 
                      onClick={() => {
                        navigate('/signup');
                        setIsMobileMenuOpen(false);
                      }}
                      className="text-left text-ayur-secondary hover:text-ayur-primary font-medium transition-colors duration-300"
                    >
                      Sign Up
                    </button>
                    <button 
                      onClick={() => {
                        navigate('/login');
                        setIsMobileMenuOpen(false);
                      }}
                      className="btn-primary w-full"
                    >
                      Book Now
                    </button>
                  </>
                )}
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default GlobalHeader;