import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'M',
      role: 'CEO, luziga.',
      image: '/team/bina1.PNG',
      content: 'NazaWebTech transformed our outdated website into a modern, high-performing platform that increased our conversions by 200%. Their attention to detail and technical expertise is unmatched.',
      rating: 5
    },
    {
      name: 'David Kim',
      role: 'Founder, EcoCommerce',
      image: '/D',
      content: 'Working with NazaWebTech was a game-changer for our e-commerce business. They delivered a scalable solution that handles our peak traffic seamlessly. Highly recommended!',
      rating: 5
    },
    {
      name: 'Maria Santos',
      role: 'CTO, HealthTech Solutions',
      image: '/team/2.PNG',
      content: 'The team\'s expertise in healthcare technology and compliance requirements was impressive. They delivered a HIPAA-compliant platform that exceeds all our expectations.',
      rating: 5
    },
    {
      name: 'Robert Chengule',
      role: 'Director, Financial Services',
      image: 'ddy.PNG',
      content: 'Security and performance were our top priorities, and NazaWebTech delivered on both fronts. Our mobile app has been running flawlessly with zero security incidents.',
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            What Our <span className="bg-gradient-to-r from-yellow-400 to-orange-600 bg-clip-text text-transparent">Clients Say</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what our clients have to say about 
            working with NazaWebTech.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-yellow-500/50 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl relative"
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-yellow-500/20" />
              
              <div className="flex items-center mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="text-xl font-bold text-white">{testimonial.name}</h4>
                  <p className="text-gray-400">{testimonial.role}</p>
                </div>
              </div>

              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, starIndex) => (
                  <Star key={starIndex} className="w-5 h-5 text-yellow-500 fill-current" />
                ))}
              </div>

              <p className="text-gray-300 leading-relaxed italic">
                "{testimonial.content}"
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-8 bg-gray-900/50 rounded-full px-8 py-4 border border-gray-700/50">
            <div className="text-center">
              <div className="text-2xl font-bold text-yellow-400">4.9/5</div>
              <div className="text-gray-400 text-sm">Average Rating</div>
            </div>
            <div className="w-px h-12 bg-gray-700"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-yellow-400">50+</div>
              <div className="text-gray-400 text-sm">Happy Clients</div>
            </div>
            <div className="w-px h-12 bg-gray-700"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-yellow-400">100%</div>
              <div className="text-gray-400 text-sm">Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;