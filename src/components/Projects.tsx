import React from 'react';
import { ExternalLink, Github, Calendar, Tag } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Empower Women Community Chat App",
      description: "An empowering community chat app creating a secure space for women to share and discuss various issues. Features multiple chat rooms, direct messaging, media sharing, and virtual events for networking and knowledge sharing.",
      image: "https://images.pexels.com/photos/5935791/pexels-photo-5935791.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Flutter", "Django", "Real-time Chat", "Media Sharing"],
      liveUrl: "#",
      githubUrl: "#",
      date: "Dec 2021 - Mar 2022"
    },
    {
      title: "Students Counselling System",
      description: "A comprehensive counselling system providing students with guidance and support. Features user authentication, counsellor assignment, appointment scheduling, real-time chat, and progress tracking with insightful reporting.",
      image: "https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["PHP", "MySQL", "Real-time Chat", "Reporting"],
      liveUrl: "#",
      githubUrl: "#",
      date: "Mar 2023 - Apr 2023"
    },
    {
      title: "Fine Arts Ordering System",
      description: "A streamlined ordering system for fine arts products including paintings, sculptures, and prints. Features customer accounts, order tracking, inventory management, and comprehensive sales reporting.",
      image: "https://images.pexels.com/photos/1183992/pexels-photo-1183992.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["PHP", "MySQL", "Inventory Management", "Order Tracking"],
      liveUrl: "#",
      githubUrl: "#",
      date: "Jul 2023"
    },
    {
      title: "Task Tracking System",
      description: "An efficient task and project management system for organizations. Features task assignment, deadline monitoring, progress tracking, team collaboration with comments and attachments, plus comprehensive analytics.",
      image: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["PHP", "MySQL", "Real-time Notifications", "Analytics"],
      liveUrl: "#",
      githubUrl: "#",
      date: "Sep 2021"
    },
    {
      title: "Full Real Estate Web Application",
      description: "A comprehensive real estate platform built with Python and Django. Features property listings, advanced search filters, user authentication, property management dashboard, and interactive maps for property locations.",
      image: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Python", "Django", "Real Estate", "Property Management"],
      liveUrl: "https://nazawebtech.com",
      githubUrl: "https://github.com/naza-webtech/Full-Realestate-web-application",
      date: "2023"
    },
    {
      title: "Shahadah Academic Facilitator",
      description: "A mobile application built with Flutter to facilitate academic processes and student management. Features student registration, course management, academic progress tracking, and communication tools for educational institutions.",
      image: "https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Flutter", "Mobile App", "Academic Management", "Student Portal"],
      liveUrl: "#",
      githubUrl: "https://github.com/naza-webtech/shahadah-academic-facilitator",
      date: "2023"
    },
    {
      title: "Location Using Phone Number",
      description: "A Python-based application that determines location information using phone numbers. Utilizes phone number parsing and geolocation APIs to provide accurate location data, useful for verification and security purposes.",
      image: "https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Python", "Geolocation API", "Phone Number Parsing", "Security"],
      liveUrl: "#",
      githubUrl: "https://github.com/naza-webtech/location-using-phoneNumber",
      date: "2023"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A showcase of my recent work and technical achievements
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-100"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                  <div className="flex items-center space-x-1 text-sm text-gray-600">
                    <Calendar size={14} />
                    <span>{project.date}</span>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="inline-flex items-center space-x-1 bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm"
                    >
                      <Tag size={12} />
                      <span>{tech}</span>
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  <a 
                    href={project.liveUrl}
                    className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200"
                  >
                    <ExternalLink size={16} />
                    <span>Live Demo</span>
                  </a>
                  <a 
                    href={project.githubUrl}
                    className="flex items-center space-x-2 border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                  >
                    <Github size={16} />
                    <span>Code</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a 
            href="https://nazawebtech.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200 transform hover:scale-105"
          >
            View All Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;