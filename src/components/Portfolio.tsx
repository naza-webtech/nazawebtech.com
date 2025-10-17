import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A modern e-commerce solution with real-time inventory management, secure payments, and advanced analytics dashboard.',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      category: 'Web Application',
      featured: true
    },
    {
      title: 'Healthcare Management System',
      description: 'Comprehensive patient management system with appointment scheduling, medical records, and telemedicine capabilities.',
      image: 'https://images.pexels.com/photos/48604/pexels-photo-48604.jpeg',
      technologies: ['Next.js', 'PostgreSQL', 'WebRTC', 'AWS'],
      category: 'Enterprise Software',
      featured: true
    },
    {
      title: 'FinTech Mobile App',
      description: 'Secure mobile banking application with biometric authentication, real-time transactions, and investment tracking.',
      image: 'https://images.pexels.com/photos/106344/pexels-photo-106344.jpeg',
      technologies: ['React Native', 'Firebase', 'Blockchain', 'AI'],
      category: 'Mobile App',
      featured: false
    },
    {
      title: 'Real Estate Platform',
      description: 'Property listing and management platform with virtual tours, mortgage calculators, and agent dashboard.',
      image: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg',
      technologies: ['Vue.js', 'Laravel', 'MySQL', '3D Integration'],
      category: 'Web Platform',
      featured: false
    },
    {
      title: 'AI-Powered Analytics',
      description: 'Business intelligence platform with machine learning algorithms for predictive analytics and data visualization.',
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg',
      technologies: ['Python', 'TensorFlow', 'D3.js', 'Docker'],
      category: 'Data Analytics',
      featured: false
    },
    {
      title: 'Social Media Dashboard',
      description: 'Comprehensive social media management tool with content scheduling, analytics, and multi-platform integration.',
      image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg',
      technologies: ['Angular', 'Express', 'Redis', 'GraphQL'],
      category: 'Web Application',
      featured: false
    }
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section id="portfolio" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">Portfolio</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Explore our recent projects and see how we've helped businesses transform 
            their digital presence with innovative solutions.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white mb-8">Featured Projects</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => (
              <div
                key={index}
                className="group bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {project.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-8">
                  <h4 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors duration-300">
                    {project.title}
                  </h4>
                  <p className="text-gray-400 mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex space-x-4">
                    <button className="flex items-center space-x-2 text-purple-400 hover:text-purple-300 transition-colors duration-200">
                      <ExternalLink className="w-4 h-4" />
                      <span>Live Demo</span>
                    </button>
                    <button className="flex items-center space-x-2 text-gray-400 hover:text-gray-300 transition-colors duration-200">
                      <Github className="w-4 h-4" />
                      <span>Code</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Other Projects */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-8">More Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {otherProjects.map((project, index) => (
              <div
                key={index}
                className="group bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-40 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
                </div>
                
                <div className="p-6">
                  <span className="text-purple-400 text-sm font-medium">
                    {project.category}
                  </span>
                  <h4 className="text-lg font-bold text-white mb-2 group-hover:text-purple-400 transition-colors duration-300">
                    {project.title}
                  </h4>
                  <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.technologies.slice(0, 2).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-gray-700 text-gray-300 px-2 py-1 rounded text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 2 && (
                      <span className="text-gray-400 text-xs px-2 py-1">
                        +{project.technologies.length - 2} more
                      </span>
                    )}
                  </div>
                  
                  <button className="flex items-center space-x-2 text-purple-400 hover:text-purple-300 transition-colors duration-200 text-sm">
                    <ExternalLink className="w-3 h-3" />
                    <span>View Project</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-16">
          <button 
            onClick={() => {
              const element = document.querySelector('#contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
          >
            Let's Build Something Amazing Together
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;