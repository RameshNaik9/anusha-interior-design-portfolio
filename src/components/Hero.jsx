import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { ArrowRight, Sparkles, MousePointer2, Layers, Palette } from 'lucide-react';
import { personalInfo } from '../data/projects';
import { useEffect } from 'react';

const Hero = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth spring animation for mouse movement
  const springConfig = { damping: 25, stiffness: 150 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  // Transform values for different layers (parallax effect)
  const rotateX = useTransform(y, [0, window.innerHeight], [15, -15]);
  const rotateY = useTransform(x, [0, window.innerWidth], [-15, 15]);
  
  // Background shapes movement
  const shape1X = useTransform(x, [0, window.innerWidth], [-50, 50]);
  const shape1Y = useTransform(y, [0, window.innerHeight], [-50, 50]);
  
  const shape2X = useTransform(x, [0, window.innerWidth], [30, -30]);
  const shape2Y = useTransform(y, [0, window.innerHeight], [30, -30]);

  const shape3X = useTransform(x, [0, window.innerWidth], [-20, 20]);
  const shape3Y = useTransform(y, [0, window.innerHeight], [-20, 20]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  const handleScrollToProjects = (e) => {
    e.preventDefault();
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleScrollToContact = (e) => {
    e.preventDefault();
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-background pt-20 lg:pt-0 perspective-1000"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_left,var(--tw-gradient-stops))] from-primary/10 via-background to-background" />
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_right,var(--tw-gradient-stops))] from-secondary/10 via-background to-background" />
        
        {/* Interactive Background Shapes */}
        <motion.div 
          style={{ x: shape1X, y: shape1Y }}
          className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl"
        />
        <motion.div 
          style={{ x: shape2X, y: shape2Y }}
          className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl"
        />
        
        {/* Geometric Accents with Rotation + Parallax */}
        <motion.div
          style={{ x: shape3X, y: shape3Y }}
          className="absolute top-1/4 right-1/4"
        >
          <motion.div
            className="w-4 h-4 bg-primary/20"
            animate={{ rotate: [45, 90, 45] }}
            transition={{ duration: 6, repeat: Infinity }}
          />
        </motion.div>

        <motion.div
          style={{ x: shape2X, y: shape2Y }}
          className="absolute bottom-1/3 left-1/4"
        >
          <motion.div
            className="w-6 h-6 border-2 border-accent/30"
            animate={{ rotate: [12, -12, 12] }}
            transition={{ duration: 8, repeat: Infinity }}
          />
        </motion.div>

        <motion.div
          style={{ x: shape1X, y: shape1Y }}
          className="absolute top-1/2 right-1/6"
        >
          <motion.div
            className="w-3 h-3 bg-primary-light/30 rounded-full"
            animate={{ scale: [1, 1.5, 1] }}
            transition={{ duration: 4, repeat: Infinity }}
          />
        </motion.div>

        {/* Grid */}
        <div className="absolute inset-0 opacity-[0.03]" 
          style={{
            backgroundImage: `linear-gradient(var(--text-secondary) 1px, transparent 1px),
                             linear-gradient(90deg, var(--text-secondary) 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Column: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-left"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-secondary/10 border border-secondary/20 mb-8 backdrop-blur-sm"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-sm font-medium text-secondary tracking-wide">
                Available for Projects
              </span>
            </motion.div>

            {/* Heading */}
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] mb-6">
              <span className="text-text-primary">Designing</span>
              <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-primary via-secondary to-accent">
                Experiences
              </span>
            </h1>

            <p className="text-lg md:text-xl text-text-secondary max-w-lg mb-10 leading-relaxed font-light">
              {personalInfo.tagline}. I am <span className="text-text-primary font-medium">{personalInfo.name}</span>, 
              an {personalInfo.title} specializing in {personalInfo.subtitle}.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4">
              <motion.a
                href="#projects"
                onClick={handleScrollToProjects}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group relative px-6 py-3 bg-primary text-white rounded-xl font-medium overflow-hidden transition-all hover:shadow-[0_0_20px_-5px_var(--primary)]"
              >
                <div className="absolute inset-0 w-full h-full bg-linear-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shimmer" />
                <span className="relative flex items-center gap-2">
                  View Projects <ArrowRight size={18} />
                </span>
              </motion.a>
              
              <motion.a
                href="#contact"
                onClick={handleScrollToContact}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-6 py-3 bg-transparent border border-text-secondary/20 text-text-primary rounded-xl font-medium hover:bg-text-secondary/5 transition-colors"
              >
                Contact Me
              </motion.a>
            </div>
            
            {/* Stats / Tech Stack Mini-bar */}
            <div className="mt-20 pt-8 border-t border-text-secondary/10 flex gap-8 text-text-secondary/60">
               <div className="flex items-center gap-2">
                  <Layers size={18} />
                  <span className="text-sm font-medium">AutoCAD</span>
               </div>
               <div className="flex items-center gap-2">
                  <Palette size={18} />
                  <span className="text-sm font-medium">SketchUp</span>
               </div>
               <div className="flex items-center gap-2">
                  <Sparkles size={18} />
                  <span className="text-sm font-medium">Enscape</span>
               </div>
            </div>
          </motion.div>

          {/* Right Column: Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ rotateX, rotateY, perspective: 1000 }}
            className="relative hidden lg:block"
          >
            {/* Abstract Composition */}
            <div className="relative w-full aspect-square max-w-md mx-auto">
              {/* Main glowing orb */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/20 rounded-full blur-[100px] animate-pulse" />
              
              {/* Floating Cards */}
              <motion.div 
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-10 right-10 z-20 p-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl w-48"
              >
                <div className="h-2 w-12 bg-primary/50 rounded-full mb-4" />
                <div className="h-2 w-24 bg-white/20 rounded-full mb-2" />
                <div className="h-2 w-16 bg-white/10 rounded-full" />
              </motion.div>

              <motion.div 
                animate={{ y: [0, 30, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-20 left-0 z-30 p-6 bg-secondary/10 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl w-56"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center">
                    <MousePointer2 size={20} className="text-secondary" />
                  </div>
                  <div>
                    <div className="h-2 w-16 bg-white/20 rounded-full mb-1" />
                    <div className="h-2 w-10 bg-white/10 rounded-full" />
                  </div>
                </div>
                <div className="h-20 bg-white/5 rounded-lg border border-white/5" />
              </motion.div>

              {/* Center Image/Shape */}
              <div className="absolute inset-10 z-10 rounded-full border border-white/10 flex items-center justify-center">
                 <div className="w-full h-full rounded-full border border-white/5 animate-[spin_10s_linear_infinite]" />
                 <div className="absolute inset-4 rounded-full border border-dashed border-white/10 animate-[spin_15s_linear_infinite_reverse]" />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
