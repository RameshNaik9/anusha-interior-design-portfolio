import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { MapPin, Award, Briefcase } from 'lucide-react';
import { personalInfo } from '../data/projects';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const stats = [
    { number: '4+', label: 'Projects Completed', icon: Briefcase },
    { number: '3', label: 'Software Mastered', icon: Award },
    { number: '2025', label: 'Certified Designer', icon: Award },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section id="about" className="section bg-white" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center"
        >
          {/* Image Side */}
          <motion.div variants={itemVariants} className="relative">
            <div className="relative aspect-[4/5] max-w-md mx-auto lg:mx-0">
              {/* Main Image Placeholder */}
              <div className="absolute inset-0 bg-gradient-to-br from-secondary to-background-alt rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="/images/profile-photo.png" 
                  alt="Anusha Lahori" 
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Decorative Frame */}
              <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-primary/20 rounded-2xl -z-10" />
              
              {/* Floating Badge */}
              <motion.div
                className="absolute -bottom-6 -left-6 bg-white shadow-xl rounded-xl p-4"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <MapPin className="text-primary" size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-text-secondary">Based in</p>
                    <p className="font-medium text-text-primary">India</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div variants={itemVariants} className="lg:pl-8">
            <div className="decorative-line ml-0!" />
            <h2 className="section-title text-left! mb-6!">
              About Me
            </h2>
            
            <p className="text-lg text-text-secondary mb-6 leading-relaxed">
              {personalInfo.about}
            </p>

            {/* Key Points */}
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                <p className="text-text-secondary">
                  <strong className="text-text-primary">Civil Engineering Background</strong> – Strong technical foundation in construction and materials
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                <p className="text-text-secondary">
                  <strong className="text-text-primary">GROVIO Certified</strong> – Professional training in interior design and visualization
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                <p className="text-text-secondary">
                  <strong className="text-text-primary">Detail-Oriented</strong> – Passion for creating functional and beautiful spaces
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center p-4 bg-secondary/30 rounded-xl"
                  whileHover={{ scale: 1.05, backgroundColor: 'rgba(232, 222, 209, 0.5)' }}
                  transition={{ duration: 0.2 }}
                >
                  <p className="text-2xl md:text-3xl font-heading font-bold text-primary mb-1">
                    {stat.number}
                  </p>
                  <p className="text-xs text-text-secondary">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
