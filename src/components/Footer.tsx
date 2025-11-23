import React from 'react';
import { ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#home" className="text-2xl font-bold text-blue-400 flex items-center">
              <span>&lt;</span>
              <span>Dev</span>
              <span>/&gt;</span>
            </a>
            <p className="mt-2 text-gray-400 max-w-md">
              Full Stack Developer specialized in creating beautiful, functional web applications
              with modern technologies.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-8 md:gap-16">
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a 
                    href="#home" 
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a 
                    href="#about" 
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a 
                    href="#projects" 
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                  >
                    Projects
                  </a>
                </li>
                <li>
                  <a 
                    href="#contact" 
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Connect</h3>
              <ul className="space-y-2">
                <li>
                  <a 
                    href="https://github.com/EliasMerloQ" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                  >
                    GitHub
                  </a>
                </li>
                <li>
                  <a 
                    href="https://linkedin.com" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a 
                    href="https://twitter.com" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                  >
                    Twitter
                  </a>
                </li>
                <li>
                  <a 
                    href="mailto:elias.q.merlo@gmail.com" 
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                  >
                    Email
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Elias Merlo. All rights reserved.
          </p>
          
          <button
            onClick={scrollToTop}
            className="mt-4 md:mt-0 p-3 bg-blue-600 hover:bg-blue-700 rounded-full transition-colors duration-300 group"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;