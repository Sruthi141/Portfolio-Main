import { Code2, Database, Globe, GraduationCap } from 'lucide-react';
import { useEffect, useState, useRef } from 'react';

export default function About() {
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

  const skills = [
    {
      category: 'Programming Languages',
      icon: <Code2 size={24} />,
      items: ['C', 'C++', 'Java', 'Python', 'JavaScript', 'TypeScript'],
      color: 'from-blue-500 to-blue-600',
    },
    {
      category: 'Web Development & Frameworks',
      icon: <Globe size={24} />,
      items: ['React.js', 'Next.js', 'Redux', 'Node.js', 'Express.js', 'GraphQL', 'Django'],
      color: 'from-teal-500 to-teal-600',
    },
    {
      category: 'UI/UX & Design',
      icon: <Globe size={24} />,
      items: ['Tailwind CSS', 'Material UI', 'Responsive Design', 'Figma', 'CSS Animations'],
      color: 'from-pink-500 to-pink-600',
    },
    {
      category: 'AI/ML & Data Science',
      icon: <Database size={24} />,
      items: ['Machine Learning', 'NLP', 'TensorFlow', 'Pandas', 'Data Analysis'],
      color: 'from-purple-500 to-purple-600',
    },
    {
      category: 'Databases & Cloud',
      icon: <Database size={24} />,
      items: ['PostgreSQL', 'MongoDB', 'MySQL', 'Docker', 'Supabase'],
      color: 'from-yellow-500 to-yellow-600',
    },
  ];

  const tools = ['Git', 'GitHub', 'Postman', 'VS Code', 'Vercel', 'Linux/Ubuntu'];

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About <span className="bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-teal-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div
            className={`transition-all duration-1000 delay-100 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <div className="p-2 bg-blue-100 rounded-lg">
                <GraduationCap className="text-blue-600" size={28} />
              </div>
              My Journey
            </h3>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p className="text-lg">
                Hi, I'm <span className="font-semibold text-gray-900">Sruthi Kommati</span>, a final-year B.Tech
                Computer Science and Engineering student at{' '}
                <span className="font-semibold text-gray-900">IIIT Sri City</span> (2022–2026).
              </p>
              <p>
                I'm passionate about building scalable and interactive web applications that solve real-world problems.
                My experience spans both frontend and full-stack development, with internships at{' '}
                <span className="font-semibold text-gray-900">Mindshift Technologies</span> and{' '}
                <span className="font-semibold text-gray-900">Octanet Services</span>.
              </p>
              <p>
                I love working with modern technologies like React, Node.js, and Django to create seamless user
                experiences backed by robust server-side architecture. My goal is to continuously learn and build
                innovative solutions that make a difference.
              </p>
            </div>

            <div className="mt-8 space-y-4">
              <div className="p-6 bg-gradient-to-br from-blue-50 to-teal-50 rounded-xl border border-blue-100">
                <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                  <GraduationCap className="text-blue-600" size={20} />
                  Education
                </h4>
                <div className="space-y-4">
                  <div>
                    <p className="text-gray-700 font-semibold">B.Tech in Computer Science & Engineering</p>
                    <p className="text-gray-600">IIIT Sri City</p>
                    <p className="text-gray-500 text-sm">2022 – 2026</p>
                  </div>
                  <div className="border-t border-blue-200 pt-4">
                    <p className="text-gray-700 font-semibold">Intermediate (MPC)</p>
                    <p className="text-gray-600">Racharala Junior College, Gollapally</p>
                    <p className="text-gray-500 text-sm">Marks: 888/1000 • 2020–2022</p>
                  </div>
                  <div className="border-t border-blue-200 pt-4">
                    <p className="text-gray-700 font-semibold">10th Standard</p>
                    <p className="text-gray-600">TS Model School, Mustabad</p>
                    <p className="text-gray-500 text-sm">2019–2020</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className={`transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Technical Skills</h3>
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="group p-6 bg-white border-2 border-gray-100 rounded-xl hover:border-blue-200 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`p-2 bg-gradient-to-r ${skill.color} text-white rounded-lg`}>
                      {skill.icon}
                    </div>
                    <h4 className="font-bold text-gray-900">{skill.category}</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skill.items.map((item, i) => (
                      <span
                        key={i}
                        className="px-4 py-2 bg-gray-50 text-gray-700 rounded-lg text-sm font-medium hover:bg-gradient-to-r hover:from-blue-500 hover:to-teal-500 hover:text-white transition-all duration-300 cursor-default"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}

              <div className="p-6 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl">
                <h4 className="font-bold text-gray-900 mb-4">Tools & Technologies</h4>
                <div className="flex flex-wrap gap-2">
                  {tools.map((tool, i) => (
                    <span
                      key={i}
                      className="px-4 py-2 bg-white text-gray-700 rounded-lg text-sm font-medium shadow-sm hover:shadow-md hover:scale-105 transition-all duration-300 cursor-default"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
