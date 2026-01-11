import { Mail, Phone, Linkedin, Github, MapPin, Send } from 'lucide-react';
import { useEffect, useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
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

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // ✅ EMAILJS SUBMIT
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      await emailjs.send(
        'service_r6cicx1',          // Service ID
        'template_ujnlv69',         // Template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        'kI4WhWIlKq7oMLhad'          // Public Key
      );

      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('EmailJS Error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus('idle'), 3000);
    }
  };

  const contactInfo = [
    {
      icon: <Mail size={24} />,
      title: 'Email',
      value: 'sruthi.k22@iiits.in',
      link: 'mailto:sruthi.k22@iiits.in',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: <Mail size={24} />,
      title: 'Personal Email',
      value: 'sruthikommatisruthikommati@gmail.com',
      link: 'mailto:sruthikommatisruthikommati@gmail.com',
      color: 'from-teal-500 to-teal-600',
    },
    {
      icon: <Phone size={24} />,
      title: 'Phone',
      value: '+91 9347049414',
      link: 'tel:+919347049414',
      color: 'from-yellow-500 to-yellow-600',
    },
    {
      icon: <MapPin size={24} />,
      title: 'Location',
      value: 'IIIT Sri City, India',
      link: '',
      color: 'from-blue-500 to-teal-500',
    },
  ];

  const socialLinks = [
    {
      icon: <Linkedin size={24} />,
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/sruthikommati/',
      color: 'hover:bg-blue-600',
    },
    {
      icon: <Github size={24} />,
      name: 'GitHub',
      url: 'https://github.com/Sruthi141/',
      color: 'hover:bg-gray-800',
    },
  ];

  return (
    <section id="contact" ref={sectionRef} className="py-20 bg-gradient-to-br from-blue-50 via-white to-teal-50">
      <div className="container mx-auto px-6">

        {/* HEADER */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Get In <span className="bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-teal-500 mx-auto rounded-full mb-4"></div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Let's discuss your project or just say hello!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">

          {/* LEFT */}
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>

            <div className="space-y-4 mb-8">
              {contactInfo.map((info, index) => (
                <div key={index}>
                  {info.link ? (
                    <a href={info.link} className="flex gap-4 p-4 bg-white rounded-xl border hover:shadow-lg">
                      <div className={`p-3 bg-gradient-to-r ${info.color} text-white rounded-lg`}>
                        {info.icon}
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">{info.title}</p>
                        <p className="font-semibold">{info.value}</p>
                      </div>
                    </a>
                  ) : (
                    <div className="flex gap-4 p-4 bg-white rounded-xl border">
                      <div className={`p-3 bg-gradient-to-r ${info.color} text-white rounded-lg`}>
                        {info.icon}
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">{info.title}</p>
                        <p className="font-semibold">{info.value}</p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="flex gap-4">
              {socialLinks.map((social, i) => (
                <a
                  key={i}
                  href={social.url}
                  target="_blank"
                  className={`p-4 bg-white rounded-xl border hover:text-white ${social.color}`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* FORM */}
          <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold mb-6">Send a Message</h3>

            <input
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="Your Name"
              className="w-full mb-4 px-4 py-3 border rounded-lg"
            />

            <input
              required
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="Your Email"
              className="w-full mb-4 px-4 py-3 border rounded-lg"
            />

            <textarea
              required
              rows={5}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Your Message"
              className="w-full mb-6 px-4 py-3 border rounded-lg"
            />

            <button
              disabled={isSubmitting}
              className="w-full py-4 bg-gradient-to-r from-blue-600 to-teal-500 text-white rounded-lg font-semibold"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>

            {submitStatus === 'success' && (
              <p className="mt-4 text-green-600 text-center font-medium">
                Message sent successfully!
              </p>
            )}

            {submitStatus === 'error' && (
              <p className="mt-4 text-red-600 text-center font-medium">
                Failed to send message. Try again.
              </p>
            )}
          </form>

        </div>
      </div>
    </section>
  );
}
