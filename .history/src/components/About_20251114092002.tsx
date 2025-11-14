import React from 'react';
import { Users, Award, Target, Heart } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: <Target className="w-6 h-6" />,
      title: 'Mission-Driven',
      description: 'We are committed to delivering solutions that drive real business results and exceed expectations.'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Collaborative',
      description: 'We work closely with our clients as partners, ensuring transparency and alignment throughout the project.'
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: 'Excellence',
      description: 'We maintain the highest standards of quality in every line of code and every design decision we make.'
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: 'Passionate',
      description: 'We love what we do and it shows in the quality and innovation we bring to every project.'
    }
  ];

  const team = [
    {
      name: 'Eng.Mussa Aloyce',
      role: 'Lead Developer',
      image: 'p',
      expertise: 'Full-Stack Development, React, Node.js,python, Django'
    },
    {
      name: 'Michael N',
      role: 'UI/UX Designer',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg',
      expertise: 'User Experience, Visual Design, Prototyping'
    },
    {
      name: 'Mike Rodriguez',
      role: 'DevOps Engineer',
      image: 'https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg',
      expertise: 'Cloud Infrastructure, CI/CD, Security'
    }
  ];

  return (
    <section id="about" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About <span className="bg-gradient-to-r from-emerald-400 to-blue-600 bg-clip-text text-transparent">NazaWebTech</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            We're a passionate team of developers, designers, and strategists dedicated to creating 
            exceptional digital experiences that drive business growth.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h3 className="text-3xl font-bold text-white mb-6">Our Story</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Founded in 2019, NazaWebTech began as a vision to bridge the gap between cutting-edge 
              technology and business success. We've grown from a small startup to a trusted partner 
              for businesses ranging from startups to enterprise corporations.
            </p>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Our approach combines technical expertise with deep business understanding, ensuring 
              that every solution we create not only works flawlessly but also drives measurable 
              results for our clients.
            </p>
            <div className="flex items-center space-x-8">
              <div>
                <div className="text-2xl font-bold text-emerald-400">50+</div>
                <div className="text-gray-400 text-sm">Happy Clients</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-blue-400">100+</div>
                <div className="text-gray-400 text-sm">Projects</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-orange-400">5+</div>
                <div className="text-gray-400 text-sm">Years</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl transform rotate-3"></div>
            <img
              src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg"
              alt="Team working"
              className="relative rounded-2xl w-full h-96 object-cover"
            />
          </div>
        </div>

        <div className="mb-20">
          <h3 className="text-3xl font-bold text-white text-center mb-12">Our Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                  {value.icon}
                </div>
                <h4 className="text-xl font-bold text-white mb-3">{value.title}</h4>
                <p className="text-gray-400 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-3xl font-bold text-white text-center mb-12">Meet Our Team</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="group text-center">
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full transform group-hover:scale-105 transition-transform duration-300"></div>
                  <img
                    src={member.image}
                    alt={member.name}
                    className="relative w-48 h-48 rounded-full object-cover mx-auto p-1"
                  />
                </div>
                <h4 className="text-xl font-bold text-white mb-2">{member.name}</h4>
                <p className="text-blue-400 font-semibold mb-3">{member.role}</p>
                <p className="text-gray-400 text-sm">{member.expertise}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;