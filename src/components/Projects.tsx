import { ExternalLink, Github, Award } from 'lucide-react';
import { useEffect, useState, useRef } from 'react';

export default function Projects() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFilter, setActiveFilter] = useState('All');
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

  const projects = [
    {
      title: 'Couture AI',
      description: 'Advanced inventory management portal with AI-powered features for fashion retail optimization.',
      category: 'Full-Stack',
      tech: ['React', 'Node.js', 'AI/ML', 'MongoDB'],
      achievements: ['Automated inventory tracking', 'Real-time analytics', 'AI recommendations'],
      github: 'https://github.com/Sruthi141/store--admin',
      deploy: 'https://store-admin-nine-ivory.vercel.app/',
      featured: true,
      gradient: 'from-blue-500 to-teal-500',
    },
    {
      title: 'Real-Time Auction Platform',
      description: 'Live bidding system with WebSocket integration for seamless real-time interactions.',
      category: 'Full-Stack',
      tech: ['React', 'Node.js', 'WebSocket', 'PostgreSQL'],
      achievements: ['Live bidding', 'Real-time updates', 'Secure payments'],
      github: 'https://github.com/Sruthi141/Real-Time-Auction-Platform',
      deploy: 'https://fdfed-iota.vercel.app/',
      featured: true,
      gradient: 'from-teal-500 to-yellow-500',
    },
    {
      title: 'KalaMitra',
      description: 'GenAI-powered eCommerce platform revolutionizing online shopping with intelligent recommendations.',
      category: 'AI Projects',
      tech: ['Next.js', 'Django', 'GenAI', 'PostgreSQL'],
      achievements: ['AI-powered search', 'Personalized recommendations', 'Smart catalog'],
      github: 'https://github.com/Sruthi141/kalamitra',
      deploy: 'https://kalamitra-seven.vercel.app/',
      featured: true,
      gradient: 'from-yellow-500 to-blue-500',
    },
    {
      title: 'Plagiarism Detector',
      description: 'Multilingual NLP-based tool for detecting content similarity across multiple languages.',
      category: 'AI Projects',
      tech: ['Python', 'NLP', 'Flask', 'Machine Learning'],
      achievements: ['Multilingual support', 'High accuracy', 'Fast processing'],
      github: 'https://github.com/Sruthi141/plagiarism-checker',
      featured: false,
      gradient: 'from-blue-500 to-blue-600',
    },
    // {
    //   title: 'WorkXplore',
    //   description: 'Multi-role web application with comprehensive user management and role-based access control.',
    //   category: 'Web Apps',
    //   tech: ['React', 'Express', 'MongoDB', 'JWT'],
    //   achievements: ['Role-based access', 'User management', 'Secure authentication'],
    //   github: 'https://github.com/Sruthi141',
    //   featured: false,
    //   gradient: 'from-teal-500 to-teal-600',
    // },
    {
      title: 'QuizApp',
      description: 'Interactive quiz application with real-time scoring, multiple categories, and user progress tracking.',
      category: 'Web Apps',
      tech: ['React', 'Node.js', 'MongoDB', 'Express.js'],
      achievements: ['Real-time scoring', 'Multiple quiz categories', 'User authentication'],
      github: 'https://github.com/Sruthi141/QuizApp-main',
      deploy: 'https://quiz-app-nine-rouge.vercel.app/',
      featured: false,
      gradient: 'from-yellow-500 to-yellow-600',
    },
    {
      title: 'Weather Forecast App',
      description: 'Real-time weather forecasting application with location-based weather data and beautiful UI.',
      category: 'Web Apps',
      tech: ['React', 'OpenWeather API', 'Tailwind CSS', 'Axios'],
      achievements: ['Real-time weather data', 'Location detection', 'Responsive design'],
      github: 'https://github.com/Sruthi141/Weather-Forecast-App',
      deploy: 'https://weather-forecast-app-opal.vercel.app/',
      featured: false,
      gradient: 'from-cyan-500 to-blue-600',
    },
    {
      title: 'Food Delivery Website',
      description: 'Full-stack food ordering platform with menu browsing, cart management, and order tracking.',
      category: 'Full-Stack',
      tech: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
      achievements: ['Menu browsing', 'Cart management', 'Payment integration'],
      github: 'https://github.com/Sruthi141',
      deploy: 'https://github.com/Sruthi141/food-website',
      featured: false,
      gradient: 'from-orange-500 to-red-600',
    },
    {
      title: 'MedX-AI: AI-Powered Medical X-Ray Diagnosis',
      description: 'A modern web application that leverages artificial intelligence to analyze medical X-rays and provide diagnostic insights for chest, bone, and full-body scans.',
      category: 'AI/ML',
      tech: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
      achievements: ['Menu browsing', 'Cart management', 'Payment integration'],
      github: 'https://github.com/Sruthi141/Medical-x-ray',
      deploy: 'https://medical-x-ray.vercel.app/',
      featured: false,
      gradient: 'from-orange-500 to-red-600',
    },
  ];

  const filters = ['All', 'Full-Stack', 'AI Projects', 'Web Apps'];

  const filteredProjects =
    activeFilter === 'All' ? projects : projects.filter((project) => project.category === activeFilter);

  return (
    <section id="projects" ref={sectionRef} className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div
          className={`text-center mb-12 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            My <span className="bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-teal-500 mx-auto rounded-full mb-4"></div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Showcasing innovative solutions and real-world applications
          </p>
        </div>

        <div
          className={`flex flex-wrap justify-center gap-4 mb-12 transition-all duration-1000 delay-100 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeFilter === filter
                  ? 'bg-gradient-to-r from-blue-600 to-teal-500 text-white shadow-lg scale-105'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:scale-105'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className={`group bg-white rounded-2xl overflow-hidden border-2 border-gray-100 hover:border-transparent hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              } ${project.featured ? 'md:col-span-2 lg:col-span-1' : ''}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className={`h-2 bg-gradient-to-r ${project.gradient}`}></div>

              <div className="p-6">
                {project.featured && (
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-sm font-semibold mb-4">
                    <Award size={16} />
                    Featured Project
                  </div>
                )}

                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>

                <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>

                <div className="mb-4">
                  <div className="text-sm font-semibold text-gray-700 mb-2">Tech Stack:</div>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium group-hover:bg-blue-100 group-hover:text-blue-700 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <div className="text-sm font-semibold text-gray-700 mb-2">Key Achievements:</div>
                  <ul className="space-y-1">
                    {project.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                        <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${project.gradient}`}></div>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r ${project.gradient} text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105`}
                  >
                    <Github size={18} />
                    Code
                  </a>
                  {(project as any).deploy && (
                    <a
                      href={(project as any).deploy}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r ${project.gradient} text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105 opacity-80 hover:opacity-100`}
                    >
                      <ExternalLink size={18} />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div
          className={`text-center mt-12 transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <a
            href="https://github.com/Sruthi141"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gray-900 text-white rounded-lg font-semibold hover:bg-gray-800 hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            <Github size={20} />
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
