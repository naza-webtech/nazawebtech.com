import React from 'react';
import { Code2, Mail, Phone, MapPin, Twitter, Linkedin, Github, Instagram, Facebook } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Services: [
      'Web Development',
      'Mobile Apps',
      'E-Commerce',
      'UI/UX Design',
      'DevOps',
      'Consulting'
    ],
    Company: [
      'About Us',
      'Our Team',
      'Careers',
      'Blog',
      'Case Studies',
      'Contact'
    ],
    Resources: [
      'Documentation',
      'Support',
      'Privacy Policy',
      'Terms of Service',
      'FAQ',
      'Newsletter'
    ]
  };

  const socialLinks = [
    { icon: <Twitter className="w-5 h-5" />, href: '#', label: 'Twitter' },
    { icon: <Linkedin className="w-5 h-5" />, href: 'https://www.linkedin.com/in/mussa-aloyce-032049261/', label: 'LinkedIn' },
    { icon: <Github className="w-5 h-5" />, href: '#', label: 'GitHub' },
    { icon: <Instagram className="w-5 h-5" />, href: 'https://instagram.com/nazawebtech', label: 'Instagram' },
    { icon: <Facebook className="w-5 h-5" />, href: 'https://facebook.com/yourprofile', label: 'Facebook' },
    { icon: <Phone className="w-5 h-5" />, href: 'https://wa.me/255772207423', label: 'WhatsApp' } // Your number in international format
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-r from-blue-900 via-purple-900 to-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">

          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <Code2 className="h-8 w-8 text-blue-400" />
              <span className="text-2xl font-bold">NazaWebTech</span>
            </div>

            <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
              Transforming businesses through innovative web development and cutting-edge 
              technology solutions. Let's build the future together.
            </p>

            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-300">
                <Mail className="w-4 h-4" />
                <a href="mailto:nazawebtech1@gmail.com" className="hover:text-blue-400 transition-colors duration-200">
                  nazawebtech1@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Phone className="w-4 h-4" />
                <a href="tel:+255772207423" className="hover:text-green-400 transition-colors duration-200">
                  0772 207 423
                </a>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <MapPin className="w-4 h-4" />
                <span>Dar es Salaam, Tanzania</span>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-lg font-semibold mb-4">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <button
                      onClick={() => {
                        if (link === 'About Us') scrollToSection('#about');
                        else if (link === 'Contact') scrollToSection('#contact');
                      }}
                      className="text-gray-300 hover:text-white transition-colors duration-200 text-left"
                    >
                      {link}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">

            <p className="text-gray-400 mb-4 md:mb-0">
              © {currentYear} NazaWebTech. All rights reserved.
            </p>

            <div className="flex items-center space-x-4">
              <span className="text-gray-400 text-sm">Follow us:</span>
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors duration-200 p-2 hover:bg-gray-800 rounded-full"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <button
            onClick={() => scrollToSection('#home')}
            className="inline-flex items-center justify-center w-12 h-12 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-colors duration-200"
            aria-label="Back to top"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </button>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
