import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { PenTool, Layout, Box, Image, Palette, FileText } from 'lucide-react';
import { services } from '../data/projects';

const iconMap = {
  PenTool,
  Layout,
  Box,
  Image,
  Palette,
  FileText,
};

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  return (
    <section id="services" className="section bg-background-alt" ref={ref}>
      <div className="container mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="decorative-line" />
          <h2 className="section-title">What I Offer</h2>
          <p className="section-subtitle">
            Comprehensive interior design services from concept to visualization
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {services.map((service, index) => {
            const IconComponent = iconMap[service.icon];
            return (
              <motion.div
                key={service.id}
                variants={cardVariants}
                className="group relative bg-white rounded-2xl p-8 shadow-sm card-hover"
                whileHover={{ y: -8 }}
              >
                {/* Icon */}
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  {IconComponent && (
                    <IconComponent 
                      size={28} 
                      className="text-primary group-hover:text-white transition-colors duration-300" 
                    />
                  )}
                </div>

                {/* Content */}
                <h3 className="text-xl font-heading font-semibold text-text-primary mb-3">
                  {service.title}
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  {service.description}
                </p>

                {/* Hover Accent */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-accent rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Number */}
                <span className="absolute top-6 right-6 text-6xl font-heading font-bold text-secondary/50 group-hover:text-primary/10 transition-colors duration-300">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-text-secondary mb-4">
            Have a project in mind?
          </p>
          <motion.a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="btn btn-primary inline-flex"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Let's Discuss
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
