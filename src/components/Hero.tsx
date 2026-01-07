import { ArrowRight, Github, Linkedin, Mail, Download, Code2 } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center bg-gradient-to-br from-blue-50 via-white to-teal-50"
    >
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">

          {/* LEFT CONTENT */}
          <div
            className={`lg:w-1/2 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="inline-block mb-4 px-4 py-2 bg-blue-100 rounded-full text-blue-600 font-medium text-sm">
              👋 Welcome to my portfolio
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">
                Sruthi Kommati
              </span>
            </h1>

            <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-6">
              Full-Stack Developer
            </h2>

            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Building responsive, scalable, and interactive web applications with modern technologies.
              Passionate about creating seamless user experiences and robust backend systems.
            </p>

            {/* BUTTONS */}
            <div className="flex flex-wrap gap-4 mb-8">
              <button
                onClick={() => scrollToSection('projects')}
                className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-teal-500 text-white rounded-lg font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center gap-2"
              >
                View Portfolio
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </button>

              <button
                onClick={() => scrollToSection('contact')}
                className="px-8 py-4 bg-white text-gray-700 rounded-lg font-semibold border-2 border-gray-200 hover:border-blue-600 hover:text-blue-600 transition-all duration-300 hover:shadow-lg"
              >
                Contact Me
              </button>
            </div>

            {/* SOCIAL LINKS */}
            <div className="flex flex-wrap gap-3 items-center">
              <a
                href="https://github.com/Sruthi141"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white rounded-full shadow-md hover:shadow-xl hover:scale-110 transition-all duration-300"
              >
                <Github size={24} />
              </a>

              <a
                href="https://www.linkedin.com/in/sruthikommati/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white rounded-full shadow-md hover:shadow-xl hover:scale-110 transition-all duration-300"
              >
                <Linkedin size={24} />
              </a>

              <a
                href="mailto:sruthi.k22@iiits.in"
                className="p-3 bg-white rounded-full shadow-md hover:shadow-xl hover:scale-110 transition-all duration-300"
              >
                <Mail size={24} />
              </a>

              <a
                href="https://leetcode.com/Sruthi141/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white rounded-full shadow-md hover:shadow-xl hover:scale-110 transition-all duration-300"
              >
                <Code2 size={24} />
              </a>
            </div>

            {/* RESUME */}
            <div className="mt-6">
              <a
                href="https://drive.google.com/uc?export=download&id=18Y_qcRU4uqWB_j7IyFuEUoomIC1t1jsW"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-gray-700 rounded-lg font-semibold border-2 border-blue-200 hover:border-blue-600 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300 hover:shadow-lg"
              >
                <Download size={20} />
                Download Resume
              </a>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div
            className={`lg:w-1/2 flex justify-center transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="relative group flex justify-center">
              {/* Glow */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-teal-400 blur-3xl opacity-20"></div>

              {/* Profile Image */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-8 border-white shadow-2xl transition-transform duration-500 group-hover:scale-105">
                <img
                  src="/public/photo.png"
                  alt="Sruthi Kommati"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
