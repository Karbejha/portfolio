"use client";

import React, { useState, useRef, useCallback } from "react";
import Image from "next/image";

const ImageCarousel = ({ images, alt }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);
  const isDragging = useRef(false);

  const totalImages = images.length;

  const goTo = useCallback(
    (index) => {
      setCurrentIndex((index + totalImages) % totalImages);
    },
    [totalImages],
  );

  const goNext = useCallback(() => goTo(currentIndex + 1), [currentIndex, goTo]);
  const goPrev = useCallback(() => goTo(currentIndex - 1), [currentIndex, goTo]);

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
    isDragging.current = true;
  };

  const handleTouchMove = (e) => {
    if (!isDragging.current) return;
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!isDragging.current || touchStartX.current === null || touchEndX.current === null) {
      isDragging.current = false;
      return;
    }
    const delta = touchStartX.current - touchEndX.current;
    const minSwipe = 50;
    if (Math.abs(delta) > minSwipe) {
      if (delta > 0) goNext();
      else goPrev();
    }
    touchStartX.current = null;
    touchEndX.current = null;
    isDragging.current = false;
  };

  const handleMouseDown = (e) => {
    touchStartX.current = e.clientX;
    isDragging.current = true;
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current) return;
    touchEndX.current = e.clientX;
  };

  const handleMouseUp = () => {
    if (!isDragging.current || touchStartX.current === null || touchEndX.current === null) {
      isDragging.current = false;
      return;
    }
    const delta = touchStartX.current - touchEndX.current;
    const minSwipe = 50;
    if (Math.abs(delta) > minSwipe) {
      if (delta > 0) goNext();
      else goPrev();
    }
    touchStartX.current = null;
    touchEndX.current = null;
    isDragging.current = false;
  };

  if (!images || images.length === 0) return null;

  if (images.length === 1) {
    return (
      <Image
        src={images[0]}
        alt={alt}
        fill
        sizes="(min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
        className="object-contain"
      />
    );
  }

  return (
    <div
      className="relative w-full h-full select-none"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={() => {
        if (isDragging.current) handleMouseUp();
      }}
      role="region"
      aria-roledescription="carousel"
      aria-label={alt}
    >
      {/* Image slides */}
      <div className="relative w-full h-full overflow-hidden">
        {images.map((src, index) => {
          const isLogo = src.toLowerCase().includes("logo") && !src.toLowerCase().includes("rankify");
          return (
            <div
              key={src}
              className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
                isLogo ? "bg-white" : ""
              } ${
                index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}
              aria-hidden={index !== currentIndex}
            >
            <Image
              src={src}
              alt={`${alt} - ${index + 1}/${totalImages}`}
              fill
              sizes="(min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
              className="object-contain"
              priority={index === 0}
              draggable={false}
            />
          </div>
          );
        })}
      </div>

      {/* Prev / Next buttons */}
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          goPrev();
        }}
        className="absolute left-1 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-8 h-8 rounded-full bg-black/50 text-white backdrop-blur-sm hover:bg-black/70 focus:outline-none focus:ring-2 focus:ring-primary-400 transition-all"
        aria-label="Previous image"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          goNext();
        }}
        className="absolute right-1 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-8 h-8 rounded-full bg-black/50 text-white backdrop-blur-sm hover:bg-black/70 focus:outline-none focus:ring-2 focus:ring-primary-400 transition-all"
        aria-label="Next image"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </button>

      {/* Dot indicators */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 z-20 flex items-center gap-1.5">
        {images.map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              goTo(index);
            }}
            className={`rounded-full transition-all duration-300 focus:outline-none ${
              index === currentIndex
                ? "w-5 h-2 bg-primary-400"
                : "w-2 h-2 bg-white/40 hover:bg-white/70"
            }`}
            aria-label={`Go to image ${index + 1}`}
            aria-current={index === currentIndex ? "true" : undefined}
          />
        ))}
      </div>

      {/* Counter badge */}
      <div className="absolute top-2 right-2 z-20 px-2 py-0.5 rounded-full bg-black/50 backdrop-blur-sm text-xs text-white/80 font-medium">
        {currentIndex + 1} / {totalImages}
      </div>
    </div>
  );
};

export default ImageCarousel;
