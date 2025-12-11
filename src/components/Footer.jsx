import { motion } from 'framer-motion';
import { Heart, ArrowUp } from 'lucide-react';
import { personalInfo } from '../data/projects';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-text-primary text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-heading font-semibold mb-2 text-white">
              {personalInfo.name.split(' ')[0]}
              <span className="text-primary-light"> {personalInfo.name.split(' ')[1]}</span>
            </h3>
            <p className="text-white/60 text-sm mb-4">
              {personalInfo.title}
            </p>
            <p className="text-white/40 text-sm leading-relaxed">
              Transforming spaces with creativity, precision, and passion for beautiful interiors.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="grid grid-cols-2 gap-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-white/60 hover:text-primary-light transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Get In Touch</h4>
            <div className="space-y-3 text-sm">
              <p className="text-white/60">
                <span className="text-white/40">Email: </span>
                <a 
                  href={`mailto:${personalInfo.email}`}
                  className="hover:text-primary-light transition-colors"
                >
                  {personalInfo.email}
                </a>
              </p>
              <p className="text-white/60">
                <span className="text-white/40">Phone: </span>
                <a 
                  href={`tel:${personalInfo.phone.replace(/\s/g, '')}`}
                  className="hover:text-primary-light transition-colors"
                >
                  {personalInfo.phone}
                </a>
              </p>
              <p className="text-white/60">
                <span className="text-white/40">Location: </span>
                {personalInfo.location}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/40 text-sm flex items-center gap-1">
              © {currentYear} {personalInfo.name}. Crafted with 
              <Heart size={14} className="text-primary-light fill-primary-light" /> 
              for beautiful spaces
            </p>

            {/* Back to Top */}
            <motion.button
              onClick={scrollToTop}
              className="flex items-center gap-2 text-white/60 hover:text-primary-light transition-colors text-sm"
              whileHover={{ y: -2 }}
            >
              Back to Top
              <ArrowUp size={16} />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
