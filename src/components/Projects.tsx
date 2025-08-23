import React, { useState } from 'react';
import { ExternalLink, Github, ChevronRight } from 'lucide-react';

const Projects: React.FC = () => {
  // Project data
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-featured e-commerce solution with product catalog, shopping cart, user authentication, and payment processing.",
      image: "https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
      tags: ["React", "Node.js", "MongoDB", "Stripe", "Redux"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      featured: true,
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A productivity application for managing tasks, projects, and team collaboration with real-time updates.",
      image: "https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
      tags: ["React", "TypeScript", "Firebase", "Tailwind CSS"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      featured: true,
    },
    {
      id: 3,
      title: "Finance Dashboard",
      description: "An analytics dashboard for visualizing financial data with interactive charts and customizable widgets.",
      image: "https://images.pexels.com/photos/7567441/pexels-photo-7567441.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
      tags: ["Next.js", "D3.js", "PostgreSQL", "Material UI"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      featured: true,
    },
    {
      id: 4,
      title: "Social Media API",
      description: "RESTful API for a social media platform with user profiles, posts, comments, and notifications.",
      image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
      tags: ["Node.js", "Express", "MongoDB", "JWT", "Socket.io"],
      liveUrl: "",
      githubUrl: "https://github.com",
      featured: false,
    },
    {
      id: 5,
      title: "Weather Forecast App",
      description: "A weather application that shows current conditions and forecasts based on user location.",
      image: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
      tags: ["React", "OpenWeather API", "Geolocation", "CSS Animations"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      featured: false,
    },
    {
      id: 6,
      title: "Recipe Sharing Platform",
      description: "A community-driven platform for sharing and discovering recipes with search functionality.",
      image: "https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
      tags: ["Vue.js", "Django", "PostgreSQL", "AWS S3"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      featured: false,
    }
  ];
  
  // State for filter
  const [showAll, setShowAll] = useState(false);
  
  // Filter projects based on showAll state
  const displayedProjects = showAll 
    ? projects 
    : projects.filter(project => project.featured);

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            My Projects
          </h2>
          <div className="h-1 w-20 bg-blue-600 dark:bg-blue-400 mx-auto rounded"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Here's a collection of my recent projects that showcase my skills and 
            experience as a full stack developer.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedProjects.map((project) => (
            <div 
              key={project.id}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col h-full"
            >
              <div className="relative overflow-hidden h-48">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 flex-grow">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span 
                      key={index}
                      className="px-2 py-1 text-xs bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex justify-between mt-auto">
                  {project.liveUrl && (
                    <a 
                      href={project.liveUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors duration-300"
                    >
                      Live Demo
                      <ExternalLink className="w-4 h-4 ml-1" />
                    </a>
                  )}
                  
                  <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
                  >
                    View Code
                    <Github className="w-4 h-4 ml-1" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {!showAll && projects.length > 3 && (
          <div className="text-center mt-12">
            <button
              onClick={() => setShowAll(true)}
              className="inline-flex items-center px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-300 group"
            >
              View All Projects
              <ChevronRight className="ml-1 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;