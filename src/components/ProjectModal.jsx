import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Check } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Keyboard } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const ProjectModal = ({ project, onClose }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Close on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleEscape);
    document.body.style.overflow = 'hidden';
    
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-text-primary/90 backdrop-blur-sm" />

      {/* Modal Content */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ duration: 0.3 }}
        className="relative w-full max-w-6xl max-h-[90vh] bg-white rounded-2xl overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-text-primary hover:bg-primary hover:text-white transition-colors shadow-lg"
        >
          <X size={20} />
        </button>

        <div className="flex flex-col lg:grid lg:grid-cols-2 h-full">
          {/* Image Gallery */}
          <div className="relative bg-secondary/30 h-64 sm:h-80 lg:h-full w-full shrink-0">
            <Swiper
              modules={[Navigation, Pagination, Keyboard]}
              navigation={{
                prevEl: '.swiper-button-prev-custom',
                nextEl: '.swiper-button-next-custom',
              }}
              pagination={{ clickable: true }}
              keyboard={{ enabled: true }}
              onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
              className="h-full"
            >
              {project.images.map((image, index) => (
                <SwiperSlide key={index}>
                  <div className="w-full h-full flex items-center justify-center p-4">
                    <img
                      src={image}
                      alt={`${project.title} - Image ${index + 1}`}
                      className="max-w-full max-h-full object-contain rounded-lg"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Custom Navigation */}
            {project.images.length > 1 && (
              <>
                <button className="swiper-button-prev-custom absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-text-primary hover:bg-primary hover:text-white transition-colors shadow-lg">
                  <ChevronLeft size={20} />
                </button>
                <button className="swiper-button-next-custom absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-text-primary hover:bg-primary hover:text-white transition-colors shadow-lg">
                  <ChevronRight size={20} />
                </button>
              </>
            )}

            {/* Image Counter */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full text-sm text-text-primary z-10">
              {activeIndex + 1} / {project.images.length}
            </div>
          </div>

          {/* Project Details */}
          <div className="p-6 md:p-8 lg:p-10 overflow-y-auto flex-1 lg:h-full bg-white">
            {/* Category & Type */}
            <div className="flex items-center gap-2 mb-4">
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium uppercase tracking-wider">
                {project.type}
              </span>
              <span className="text-text-secondary text-sm capitalize">
                {project.category}
              </span>
            </div>

            {/* Title */}
            <h2 className="text-3xl font-heading font-bold text-text-primary mb-2">
              {project.title}
            </h2>
            <p className="text-lg text-text-secondary mb-6">
              {project.subtitle}
            </p>

            {/* Tools */}
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tools.map((tool, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-secondary/50 rounded-lg text-sm font-medium text-text-primary"
                >
                  {tool}
                </span>
              ))}
            </div>

            {/* Description */}
            <div className="mb-8">
              <h3 className="text-lg font-heading font-semibold text-text-primary mb-3">
                About This Project
              </h3>
              <p className="text-text-secondary leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Highlights */}
            <div>
              <h3 className="text-lg font-heading font-semibold text-text-primary mb-4">
                Key Highlights
              </h3>
              <ul className="space-y-3">
                {project.highlights.map((highlight, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check size={12} className="text-primary" />
                    </div>
                    <span className="text-text-secondary">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectModal;
