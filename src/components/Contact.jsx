import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Mail, Phone, MapPin, Linkedin, Instagram, ExternalLink } from 'lucide-react';
import { personalInfo } from '../data/projects';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
    },
    {
      icon: Phone,
      label: 'Phone',
      value: personalInfo.phone,
      href: `tel:${personalInfo.phone.replace(/\s/g, '')}`,
    },
    {
      icon: MapPin,
      label: 'Location',
      value: personalInfo.location,
      href: null,
    },
  ];

  const socialLinks = [
    { icon: Linkedin, label: 'LinkedIn', href: personalInfo.socialLinks.linkedin },
    { icon: Instagram, label: 'Instagram', href: personalInfo.socialLinks.instagram },
    { icon: ExternalLink, label: 'Behance', href: personalInfo.socialLinks.behance },
  ];

  return (
    <section id="contact" className="section bg-background-alt" ref={ref}>
      <div className="container mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="decorative-line" />
          <h2 className="section-title">Let's Work Together</h2>
          <p className="section-subtitle">
            Have a project in mind? I'd love to hear from you.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Info Cards */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-4"
            >
              {contactInfo.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="group"
                >
                  {item.href ? (
                    <a
                      href={item.href}
                      className="flex items-center gap-4 p-5 bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 group-hover:-translate-y-1"
                    >
                      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                        <item.icon className="text-primary group-hover:text-white transition-colors duration-300" size={22} />
                      </div>
                      <div>
                        <p className="text-sm text-text-secondary">{item.label}</p>
                        <p className="font-medium text-text-primary">{item.value}</p>
                      </div>
                    </a>
                  ) : (
                    <div className="flex items-center gap-4 p-5 bg-white rounded-xl shadow-sm">
                      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                        <item.icon className="text-primary" size={22} />
                      </div>
                      <div>
                        <p className="text-sm text-text-secondary">{item.label}</p>
                        <p className="font-medium text-text-primary">{item.value}</p>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </motion.div>

            {/* CTA & Social Links */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col justify-between"
            >
              {/* Message Box */}
              <div className="bg-white rounded-2xl p-8 shadow-sm mb-6">
                <h3 className="text-xl font-heading font-semibold text-text-primary mb-4">
                  Ready to Transform Your Space?
                </h3>
                <p className="text-text-secondary mb-6 leading-relaxed">
                  Whether you need a complete floor plan, 3D visualization, or design consultation, 
                  I'm here to help bring your vision to life.
                </p>
                <motion.a
                  href={`mailto:${personalInfo.email}?subject=Interior Design Inquiry`}
                  className="btn btn-primary w-full"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Mail size={18} />
                  Send Me an Email
                </motion.a>
              </div>

              {/* Social Links */}
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <p className="text-sm text-text-secondary mb-4 text-center">Connect with me</p>
                <div className="flex justify-center gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-secondary/50 rounded-xl flex items-center justify-center text-text-secondary hover:bg-primary hover:text-white transition-all duration-300"
                      whileHover={{ scale: 1.1, y: -4 }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 0.6 + index * 0.1 }}
                      title={social.label}
                    >
                      <social.icon size={20} />
                    </motion.a>
                  ))}
                </div>
                {/* <p className="text-xs text-text-secondary/60 text-center mt-3">
                  (Update with actual links)
                </p> */}
              </div>
            </motion.div>
          </div>

          {/* Bottom Message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center mt-12 pt-8 border-t border-secondary"
          >
            <p className="text-text-secondary italic">
              "Every space has a story. Let's create yours together."
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
