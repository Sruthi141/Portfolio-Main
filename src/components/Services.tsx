import { Code, Database, Layers } from 'lucide-react';
import { useEffect, useState, useRef } from 'react';

export default function Services() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      icon: <Code size={40} />,
      title: 'Frontend Development',
      description:
        'Creating responsive, modern, and interactive user interfaces with React, Next.js, and cutting-edge CSS frameworks.',
      features: ['Responsive UI Design', 'React & Next.js', 'Modern CSS & Animations', 'State Management'],
      color: 'from-blue-500 to-blue-600',
      shadowColor: 'group-hover:shadow-blue-200',
    },
    {
      icon: <Database size={40} />,
      title: 'Backend Development',
      description:
        'Building robust server-side applications with Node.js, Express, Django, and efficient database management.',
      features: ['RESTful APIs', 'Node.js & Express', 'Django Framework', 'Database Integration'],
      color: 'from-teal-500 to-teal-600',
      shadowColor: 'group-hover:shadow-teal-200',
    },
    {
      icon: <Layers size={40} />,
      title: 'Full-Stack Development',
      description:
        'End-to-end application development, seamlessly integrating frontend and backend with deployment and optimization.',
      features: ['Complete Integration', 'Performance Optimization', 'Cloud Deployment', 'Scalable Architecture'],
      color: 'from-yellow-500 to-yellow-600',
      shadowColor: 'group-hover:shadow-yellow-200',
    },
  ];

  return (
    <section id="services" ref={sectionRef} className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-6">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            My <span className="bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">Services</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-teal-500 mx-auto rounded-full mb-4"></div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Comprehensive web development solutions tailored to your needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group bg-white rounded-2xl p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 ${
                service.shadowColor
              } ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div
                className={`inline-flex p-4 bg-gradient-to-r ${service.color} text-white rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
              >
                {service.icon}
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                {service.title}
              </h3>

              <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>

              <ul className="space-y-3">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-700">
                    <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.color}`}></div>
                    <span className="text-sm font-medium">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 pt-6 border-t border-gray-100">
                <div
                  className={`text-sm font-semibold bg-gradient-to-r ${service.color} bg-clip-text text-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                >
                  Learn More →
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
