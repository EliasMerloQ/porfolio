import React, { useEffect, useRef } from 'react';
import { ChevronRight, Github, Linkedin, Mail, ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  const typingRef = useRef<HTMLSpanElement>(null);
  
  // Typing animation effect
  useEffect(() => {
    if (!typingRef.current) return;
    
    const skills = ['Web Developer', 'Frontend Expert', 'Backend Developer', 'UI/UX Enthusiast'];
    let currentSkillIndex = 0;
    let currentCharIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;
    
    const type = () => {
      const currentSkill = skills[currentSkillIndex];
      
      if (isDeleting) {
        // Deleting text
        if (typingRef.current) {
          typingRef.current.textContent = currentSkill.substring(0, currentCharIndex - 1);
          currentCharIndex--;
        }
        typingSpeed = 50; // faster when deleting
        
        if (currentCharIndex === 0) {
          isDeleting = false;
          currentSkillIndex = (currentSkillIndex + 1) % skills.length;
          typingSpeed = 200; // pause before typing next word
        }
      } else {
        // Typing text
        if (typingRef.current) {
          typingRef.current.textContent = currentSkill.substring(0, currentCharIndex + 1);
          currentCharIndex++;
        }
        typingSpeed = 100; // normal typing speed
        
        if (currentCharIndex === currentSkill.length) {
          isDeleting = true;
          typingSpeed = 1000; // pause before deleting
        }
      }
      
      setTimeout(type, typingSpeed);
    };
    
    setTimeout(type, 1000);
  }, []);

  return (
    <section id="home" className="pt-24 md:pt-32 pb-16 min-h-screen flex flex-col justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute -top-40 -left-40 w-80 h-80 bg-blue-400/30 dark:bg-blue-600/20 rounded-full filter blur-3xl opacity-70 animate-blob"></div>
      <div className="absolute top-0 -right-20 w-80 h-80 bg-teal-300/30 dark:bg-teal-500/20 rounded-full filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Main content with profile photo */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
            {/* Left side - Text content */}
            <div className="flex-1 text-center md:text-left">
              <div className="space-y-4 mb-8">
                <h2 className="text-lg md:text-xl text-blue-600 dark:text-blue-400 font-medium animate-fadeIn">
                  Hello, my name is
                </h2>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white animate-slideUp">
                  Elias Merlo
                </h1>
                <div className="flex justify-center md:justify-start items-center text-gray-700 dark:text-gray-300 text-xl md:text-2xl font-medium animate-slideUp animation-delay-200">
                  <span>I'm a </span>
                  <span ref={typingRef} className="text-blue-600 dark:text-blue-400 ml-2 min-w-40 inline-block"></span>
                  <span className="animate-blink ml-1">|</span>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mt-6 max-w-2xl mx-auto md:mx-0 animate-slideUp animation-delay-400">
                  Crafting beautiful, user-friendly web applications with clean code and modern technologies. 
                  Passionate about creating exceptional digital experiences that solve real problems.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4 animate-fadeIn animation-delay-600">
                <a
                  href="#projects"
                  className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all duration-300 flex items-center justify-center group"
                >
                  View My Work
                  <ChevronRight className="ml-1 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </a>
                <a
                  href="#contact"
                  className="px-6 py-3 border border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 hover:bg-blue-600/10 rounded-lg transition-all duration-300"
                >
                  Contact Me
                </a>
              </div>
              
              <div className="mt-10 flex items-center justify-center md:justify-start space-x-6 animate-fadeIn animation-delay-800">
                <a
                  href="https://github.com/EliasMerloQ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
                  aria-label="GitHub"
                >
                  <Github className="w-6 h-6" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
                <a
                  href="mailto:example@example.com"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
                  aria-label="Email"
                >
                  <Mail className="w-6 h-6" />
                </a>
              </div>
            </div>

            {/* Right side - Profile photo */}
            <div className="relative group animate-fadeIn animation-delay-400">
              <div className="w-64 h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-blue-500/20 dark:border-blue-400/20 shadow-2xl transition-all duration-300 group-hover:border-blue-500/40 dark:group-hover:border-blue-400/40 group-hover:shadow-3xl group-hover:scale-105">
                {/* Replace the src below with your photo path, e.g., "/images/profile.jpg" or import it */}
                <img 
                  src="" 
                  alt="Elias Merlo"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // Fallback to initials if image fails to load
                    e.currentTarget.style.display = 'none';
                    if (e.currentTarget.nextElementSibling) {
                      (e.currentTarget.nextElementSibling as HTMLElement).style.display = 'flex';
                    }
                  }}
                />
                {/* Fallback initials - shown if image fails to load */}
                <div 
                  className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-600 dark:from-blue-600 dark:to-blue-700 flex items-center justify-center text-white font-bold text-6xl md:text-7xl lg:text-8xl"
                  style={{ display: 'flex' }}
                >
                  EM
                </div>
              </div>
              {/* Decorative ring animation */}
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 via-teal-500 to-blue-500 rounded-full opacity-0 group-hover:opacity-30 blur-lg transition-all duration-500 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" aria-label="Scroll down">
          <ArrowDown className="w-6 h-6 text-gray-600 dark:text-gray-400" />
        </a>
      </div>
    </section>
  );
};

export default Hero;