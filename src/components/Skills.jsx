import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { skills } from '../data/projects';

const Skills = () => {
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

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  return (
    <section id="skills" className="section bg-background-alt" ref={ref}>
      <div className="container mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="decorative-line" />
          <h2 className="section-title">Skills & Expertise</h2>
          <p className="section-subtitle">
            Technical proficiency combined with creative vision
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Software Skills */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            <motion.h3
              variants={itemVariants}
              className="text-2xl font-heading font-semibold text-text-primary mb-8"
            >
              Software Proficiency
            </motion.h3>
            
            <div className="space-y-8">
              {skills.software.map((skill, index) => (
                <motion.div key={skill.name} variants={itemVariants}>
                  <div className="flex justify-between items-center mb-3">
                    <div>
                      <h4 className="font-semibold text-text-primary">
                        {skill.name}
                      </h4>
                      <p className="text-sm text-text-secondary">
                        {skill.description}
                      </p>
                    </div>
                    <span className="text-2xl font-heading font-bold text-primary">
                      {skill.level}%
                    </span>
                  </div>
                  
                  {/* Progress Bar */}
                  <div className="h-3 bg-secondary rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                      transition={{ duration: 1, delay: 0.3 + index * 0.2, ease: 'easeOut' }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Other Tools */}
            <motion.div variants={itemVariants} className="mt-10">
              <h4 className="font-semibold text-text-primary mb-4">Other Tools</h4>
              <div className="flex flex-wrap gap-2">
                {skills.other.map((tool, index) => (
                  <motion.span
                    key={tool}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.8 + index * 0.1 }}
                    className="px-4 py-2 bg-white rounded-lg text-sm text-text-secondary shadow-sm"
                  >
                    {tool}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Design Skills */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            <motion.h3
              variants={itemVariants}
              className="text-2xl font-heading font-semibold text-text-primary mb-8"
            >
              Design Expertise
            </motion.h3>

            <div className="grid grid-cols-2 gap-4">
              {skills.design.map((skill, index) => (
                <motion.div
                  key={skill}
                  variants={itemVariants}
                  className="group relative bg-white rounded-xl p-5 shadow-sm hover:shadow-lg transition-all duration-300"
                  whileHover={{ y: -4, scale: 1.02 }}
                >
                  {/* Skill Name */}
                  <p className="text-text-primary font-medium text-sm">
                    {skill}
                  </p>
                  
                  {/* Decorative Element */}
                  <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-primary to-accent rounded-l-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.div>
              ))}
            </div>

            {/* Strengths */}
            <motion.div
              variants={itemVariants}
              className="mt-10 p-6 bg-white rounded-2xl shadow-sm"
            >
              <h4 className="font-semibold text-text-primary mb-4">Key Strengths</h4>
              <div className="space-y-3">
                {[
                  'Strong sense of color, balance & symmetry',
                  'Ability to convert raw measurements into accurate plans',
                  'Quick learner of new software tools',
                  'Good communication & client-handling ability',
                ].map((strength, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: -10 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 1 + index * 0.1 }}
                  >
                    <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                    <p className="text-text-secondary text-sm">{strength}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
