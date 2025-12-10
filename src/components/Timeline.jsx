import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, Award } from 'lucide-react';
import { education } from '../data/projects';

const Timeline = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

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
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section id="education" className="section bg-white" ref={ref}>
      <div className="container mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="decorative-line" />
          <h2 className="section-title">Education & Certifications</h2>
          <p className="section-subtitle">
            My academic journey and professional qualifications
          </p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="max-w-3xl mx-auto"
        >
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-secondary" />

            {/* Timeline Items */}
            {education.map((item, index) => (
              <motion.div
                key={item.id}
                variants={itemVariants}
                className={`relative flex items-start gap-8 mb-12 last:mb-0 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Content Card */}
                <div className={`flex-1 ml-20 md:ml-0 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                  <motion.div
                    className="bg-background-alt rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow duration-300"
                    whileHover={{ y: -4 }}
                  >
                    {/* Year Badge */}
                    <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-3">
                      {item.year}
                    </span>
                    
                    {/* Degree */}
                    <h3 className="text-xl font-heading font-semibold text-text-primary mb-2">
                      {item.degree}
                    </h3>
                    
                    {/* Institution */}
                    <p className="text-primary font-medium mb-3">
                      {item.institution}
                    </p>
                    
                    {/* Description */}
                    <p className="text-text-secondary text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </motion.div>
                </div>

                {/* Timeline Node */}
                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center border-4 border-primary z-10">
                  {index === 0 ? (
                    <Award className="text-primary" size={24} />
                  ) : (
                    <GraduationCap className="text-primary" size={24} />
                  )}
                </div>

                {/* Empty space for alternating layout */}
                <div className="hidden md:block flex-1" />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Languages Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-20 text-center"
        >
          <h3 className="text-xl font-heading font-semibold text-text-primary mb-6">
            Languages
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {['English', 'Telugu', 'Hindi'].map((language, index) => (
              <motion.span
                key={language}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 1 + index * 0.1 }}
                className="px-6 py-3 bg-secondary/50 rounded-full text-text-primary font-medium"
                whileHover={{ scale: 1.05, backgroundColor: 'rgba(139, 115, 85, 0.15)' }}
              >
                {language}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Timeline;
