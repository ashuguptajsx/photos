'use client';

import Image from 'next/image';
import { useState, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Camera, Aperture, Globe, Download, Menu, X } from 'lucide-react';

// Enhanced photo collection with more metadata
const photoCollections = [
  {
    category: 'Landscapes',
    photos: [
      {
        src: '/images/photo2.jpg',
        alt: 'Misty Mountain Peak',
        width: 1600,
        height: 1067,
        location: 'Patagonia, Argentina',
        camera: 'Sony Alpha A7R IV',
        lens: '16-35mm f/2.8',
        aperture: 'f/11',
        shutterSpeed: '1/125s',
        iso: '100'
      },
      {
        src: '/images/photo3.jpg',
        alt: 'Desert Solitude',
        width: 1600,
        height: 1067,
        location: 'Sahara Desert, Morocco',
        camera: 'Canon EOS R5',
        lens: '24-70mm f/2.8',
        aperture: 'f/8',
        shutterSpeed: '1/250s',
        iso: '200'
      },
      {
        src: '/images/photo6.jpg',
        alt: 'Alpine Serenity',
        width: 1600,
        height: 1067,
        location: 'Swiss Alps, Switzerland',
        camera: 'Nikon D850',
        lens: '14-24mm f/2.8',
        aperture: 'f/10',
        shutterSpeed: '1/160s',
        iso: '64'
      },
      {
        src: '/images/photo12.jpg',
        alt: 'Emerald Rainforest',
        width: 1600,
        height: 1067,
        location: 'Amazon Rainforest, Brazil',
        camera: 'Fujifilm GFX 100S',
        lens: '32-64mm f/4',
        aperture: 'f/5.6',
        shutterSpeed: '1/80s',
        iso: '400'
      },
      {
        src: '/images/photo8.jpg',
        alt: 'Arctic Wilderness',
        width: 1600,
        height: 1067,
        location: 'Iceland',
        camera: 'Sony A7R IV',
        lens: '16-35mm f/2.8',
        aperture: 'f/11',
        shutterSpeed: '1/200s',
        iso: '100'
      }
    ]
  },
  {
    category: 'Urban',
    photos: [
      {
        src: '/images/photo4.jpg',
        alt: 'City Lights',
        width: 1600,
        height: 1067,
        location: 'Tokyo, Japan',
        camera: 'Fujifilm GFX 100S',
        lens: '32-64mm f/4',
        aperture: 'f/5.6',
        shutterSpeed: '1/30s',
        iso: '800'
      },
      {
        src: '/images/photo5.jpg',
        alt: 'Architectural Harmony',
        width: 1600,
        height: 1067,
        location: 'Barcelona, Spain',
        camera: 'Leica SL2',
        lens: '24-70mm f/2.8',
        aperture: 'f/4',
        shutterSpeed: '1/60s',
        iso: '400'
      },
      {
        src: '/images/photo9.jpg',
        alt: 'Neon Metropolis',
        width: 1600,
        height: 1067,
        location: 'Shanghai, China',
        camera: 'Canon EOS R5',
        lens: '70-200mm f/2.8',
        aperture: 'f/4',
        shutterSpeed: '1/125s',
        iso: '1600'
      },
      {
        src: '/images/photo10.jpg',
        alt: 'Street Rhythm',
        width: 1600,
        height: 1067,
        location: 'New York City, USA',
        camera: 'Leica M10',
        lens: '35mm f/1.4',
        aperture: 'f/2.8',
        shutterSpeed: '1/250s',
        iso: '800'
      },
      {
        src: '/images/photo11.jpg',
        alt: 'Modern Symmetry',
        width: 1600,
        height: 1067,
        location: 'Dubai, UAE',
        camera: 'Sony A7R IV',
        lens: '16-35mm f/2.8',
        aperture: 'f/5.6',
        shutterSpeed: '1/100s',
        iso: '200'
      }
    ]
  }
];

export default function AdvancedPhotoGallery() {
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [activeCategory, setActiveCategory] = useState('Landscapes');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleKeyDown = useCallback((event) => {
    if (event.key === 'Escape') {
      setSelectedPhoto(null);
      setIsMobileMenuOpen(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);

  const downloadImage = (photo) => {
    const link = document.createElement('a');
    link.href = photo.src;
    link.download = `${photo.alt.replace(/\s+/g, '-')}.jpg`;
    link.click();
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-[#121212] text-white relative overflow-hidden"
    >
      {/* Subtle Background Animation */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800 opacity-80"
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%'],
          transition: { duration: 10, repeat: Infinity, repeatType: 'reverse' }
        }}
      />

      {/* Header Section */}
      <header className="container mx-auto px-4 sm:px-6 py-6 sm:py-12 relative z-10">
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            <Aperture className="w-8 h-8 sm:w-12 sm:h-12 text-yellow-400" />
            <h1 className="text-xl sm:text-3xl font-light tracking-wide">
              Ashu's Stories
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            {photoCollections.map((collection) => (
              <button
                key={collection.category}
                onClick={() => setActiveCategory(collection.category)}
                className={`
                  text-xs sm:text-sm uppercase tracking-wide transition-all duration-300
                  ${activeCategory === collection.category 
                    ? 'text-yellow-400 border-b-2 border-yellow-400' 
                    : 'text-gray-400 hover:text-white'}
                `}
              >
                {collection.category}
              </button>
            ))}
          </nav>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden absolute left-0 right-0 top-full bg-gray-900 z-50"
          >
            <div className="flex flex-col items-center py-4 space-y-4">
              {photoCollections.map((collection) => (
                <button
                  key={collection.category}
                  onClick={() => {
                    setActiveCategory(collection.category);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`
                    text-sm uppercase tracking-wide transition-all duration-300
                    ${activeCategory === collection.category 
                      ? 'text-yellow-400' 
                      : 'text-gray-400 hover:text-white'}
                  `}
                >
                  {collection.category}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </header>

      {/* Gallery Grid */}
      <motion.div 
        layout
        className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 px-4 sm:px-6 pb-16"
      >
        {photoCollections
          .find(collection => collection.category === activeCategory)
          .photos.map((photo, index) => (
            <motion.div
              key={photo.src}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ 
                delay: index * 0.1,
                type: 'spring',
                stiffness: 100 
              }}
              className="group relative overflow-hidden rounded-xl sm:rounded-2xl shadow-xl cursor-pointer"
              onClick={() => setSelectedPhoto(photo)}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                width={photo.width}
                height={photo.height}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:brightness-75"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAf/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwC+AAAAA//Z"
                quality={85}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-3 sm:p-6">
                <div>
                  <h3 className="text-base sm:text-xl font-light tracking-wide text-white drop-shadow-md">
                    {photo.alt}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-300 flex items-center">
                    <Globe className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                    {photo.location}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
      </motion.div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedPhoto(null)}
          >
            <motion.div 
              layoutId={selectedPhoto.src}
              className="relative w-full max-w-6xl flex flex-col md:flex-row bg-gray-900 rounded-xl overflow-hidden"
            >
              {/* Close Button */}
              <button
                className="absolute top-2 right-2 z-10 text-white bg-gray-900/80 rounded-full p-2 hover:bg-gray-700 transition-all duration-300"
                onClick={() => setSelectedPhoto(null)}
              >
                <X className="w-6 h-6" />
              </button>

              {/* Image Section */}
              <div className="w-full md:w-2/3 flex items-center justify-center p-4">
                <Image
                  src={selectedPhoto.src}
                  alt={selectedPhoto.alt}
                  width={selectedPhoto.width}
                  height={selectedPhoto.height}
                  className="rounded-xl shadow-2xl max-h-[80vh] w-auto object-contain"
                  quality={100}
                />
              </div>

              {/* Metadata Section */}
              <div className="w-full md:w-1/3 bg-gray-800 p-4 sm:p-6 overflow-y-auto">
                <h2 className="text-xl sm:text-2xl font-light mb-4">{selectedPhoto.alt}</h2>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <Globe className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 text-yellow-400" />
                    <span className="text-sm sm:text-base">{selectedPhoto.location}</span>
                  </div>
                  <div className="flex items-center">
                    <Camera className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 text-yellow-400" />
                    <span className="text-sm sm:text-base">{selectedPhoto.camera}</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 mt-4">
                    {[
                      { label: 'Lens', value: selectedPhoto.lens },
                      { label: 'Aperture', value: selectedPhoto.aperture },
                      { label: 'Shutter', value: selectedPhoto.shutterSpeed },
                      { label: 'ISO', value: selectedPhoto.iso }
                    ].map((detail) => (
                      <div key={detail.label}>
                        <p className="text-xs text-gray-400">{detail.label}</p>
                        <p className="text-sm">{detail.value}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    downloadImage(selectedPhoto);
                  }}
                  className="mt-4 sm:mt-6 w-full flex items-center justify-center bg-yellow-400 text-black py-2 sm:py-3 rounded-lg hover:bg-yellow-500 transition-colors"
                >
                  <Download className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2" />
                  <span className="text-sm sm:text-base">Download</span>
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}