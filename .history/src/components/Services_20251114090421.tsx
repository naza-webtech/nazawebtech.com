import React from 'react';
import { 
  Code, Smartphone, Globe, Zap, Database, Shield,
  Wifi, Camera, Settings, Printer
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Code className="w-8 h-8" />,
      title: 'Web Development',
      description: 'Custom web applications built with modern frameworks like React, Next.js, and Node.js for optimal performance and scalability.',
      features: ['React & Next.js', 'Full-Stack Development', 'API Integration', 'Performance Optimization']
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile applications that deliver exceptional user experiences across iOS and Android devices.',
      features: ['React Native', 'iOS & Android', 'App Store Deployment', 'Push Notifications']
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'E-Commerce Solutions',
      description: 'Complete online store development with secure payment processing, inventory management, and customer analytics.',
      features: ['Shopify & WooCommerce', 'Payment Integration', 'Inventory Management', 'Analytics Dashboard']
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Performance Optimization',
      description: 'Speed up your existing applications with advanced optimization techniques and best practices for better user experience.',
      features: ['Speed Optimization', 'SEO Enhancement', 'Core Web Vitals', 'CDN Implementation']
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: 'Database Design',
      description: 'Robust database architecture and management solutions that scale with your business growth and ensure data integrity.',
      features: ['Database Architecture', 'Cloud Migration', 'Data Analytics', 'Backup Solutions']
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Security & Maintenance',
      description: 'Comprehensive security audits, ongoing maintenance, and support to keep your applications secure and up-to-date.',
      features: ['Security Audits', 'Regular Updates', '24/7 Support', 'Backup & Recovery']
    },

    // ------------------------------
    // 🚀 NEW SERVICES ADDED BELOW
    // ------------------------------

    {
      icon: <Wifi className="w-8 h-8" />,
      title: 'Networking Solutions',
      description: 'Professional setup of wired and wireless networks for homes, offices, and enterprises.',
      features: ['LAN/WAN Setup', 'WiFi Configuration', 'Router & Switch Setup', 'Network Troubleshooting']
    },
    {
      icon: <Camera className="w-8 h-8" />,
      title: 'CCTV Camera Installation',
      description: 'Advanced CCTV surveillance systems for enhanced security and real-time monitoring.',
      features: ['HD & IP Cameras', 'Remote Monitoring', 'Indoor & Outdoor Setup', 'Maintenance & Support']
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: 'Hardware Maintenance',
      description: 'Reliable repair and maintenance for all types of computers, printers, and office equipment.',
      features: ['PC Repair', 'Laptop Fixing', 'Printer Maintenance', 'Part Replacement']
    },
    {
      icon: <Printer className="w-8 h-8" />,
      title: 'Digital Printing',
      description: 'High-quality digital printing services for branding, marketing, and office needs.',
      features: ['Business Cards', 'Brochures & Flyers', 'Posters & Banners', 'Custom Designs']
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            We offer comprehensive technology solutions tailored to your business needs, 
            from concept to deployment and beyond.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl"
            >
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors duration-300">
                {service.title}
              </h3>
              
              <p className="text-gray-400 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-300">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <button 
            onClick={() => {
              const element = document.querySelector('#contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
          >
            Start Your Project Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
