'use client'; // For client-side interactivity

import Image from 'next/image';
import { useState } from 'react';

const photos = [
  { src: '/images/photo5.jpg', alt: 'Sunset Glow', width: 400, height: 600 },
  { src: '/images/photo3.jpg', alt: 'Urban Shadows', width: 600, height: 400 },
  { src: '/images/photo4.jpg', alt: 'Forest Whisper', width: 400, height: 500 },
  { src: '/images/photo5.jpg', alt: 'Golden Hour', width: 400, height: 500 },
  { src: '/images/photo6.jpg', alt: 'Ocean Dream', width: 400, height: 500 },
  { src: '/images/photo3.jpg', alt: 'City Pulse', width: 400, height: 500 },
  // Add your photos here
];

export default function Gallery() {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Background Layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800 opacity-90" />
      <div className="absolute inset-0 bg-gradient-to-tl from-yellow-500/20 via-transparent to-blue-500/20 animate-gradient-shift" />
      <div className="absolute inset-0">
        <div className="w-full h-full bg-[url('https://www.transparenttextures.com/patterns/dark-mosaic.png')] opacity-10" />
      </div>
      <div className="absolute inset-0 pointer-events-none">
        <div className="w-96 h-96 bg-yellow-400 opacity-5 rounded-full blur-3xl absolute top-20 left-1/4 animate-pulse-slow" />
        <div className="w-72 h-72 bg-blue-400 opacity-5 rounded-full blur-3xl absolute bottom-1/3 right-1/4 animate-pulse-slow delay-1000" />
      </div>

      {/* Content */}
      <div className="container mx-auto py-24 px-6 relative z-10">
        <h1 className="text-5xl md:text-7xl font-extralight text-center mb-20 tracking-widest relative">
          <span className="relative inline-block">
            Gallery
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent opacity-50 animate-pulse" />
          </span>
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {photos.map((photo, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer"
              onClick={() => setSelectedPhoto(photo)}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                width={photo.width}
                height={photo.height}
                className="w-full h-full object-cover transform transition-all duration-700 group-hover:scale-110 group-hover:brightness-125"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAf/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwC+AAAAA//Z"
                quality={85}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center p-4">
                <span className="text-white text-lg font-light tracking-wide drop-shadow-md">
                  {photo.alt}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 bg-black/95 flex items-center justify-center z-50 animate-fade-in"
          onClick={() => setSelectedPhoto(null)}
        >
          <div className="relative max-w-5xl w-full p-6">
            <Image
              src={selectedPhoto.src}
              alt={selectedPhoto.alt}
              width={selectedPhoto.width * 2}
              height={selectedPhoto.height * 2}
              className="rounded-xl shadow-2xl max-h-[80vh] w-auto mx-auto"
              quality={100}
            />
            <button
              className="absolute top-4 right-4 text-white bg-gray-900/80 rounded-full p-3 hover:bg-gray-700 transition-all duration-300"
              onClick={() => setSelectedPhoto(null)}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <div className="text-center mt-6">
              <p className="text-xl font-light text-white tracking-wide drop-shadow-md">
                {selectedPhoto.alt}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}