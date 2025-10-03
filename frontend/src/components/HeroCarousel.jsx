import React, { useEffect, useState, useRef } from "react";
import { neoSoft, neoInset, cardClass } from "../utils/styles";

function HeroCarousel({ images, title, tagline, description }) {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);

  useEffect(() => {
    timeoutRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % images.length);
    }, 4000);
    return () => clearInterval(timeoutRef.current);
  }, [images.length]);

  const go = (i) => {
    setIndex(i % images.length);
    clearInterval(timeoutRef.current);
  };

  return (
    <section id="home" className="relative max-w-6xl mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <HeroContent
          title={title}
          tagline={tagline}
          description={description}
        />
        <Carousel images={images} index={index} go={go} />
      </div>
    </section>
  );
}

const HeroContent = ({ title, tagline, description }) => (
  <div>
    <div className={cardClass} style={{ ...neoSoft, ...neoInset }}>
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900">{title}</h1>
      <p className="mt-3 text-gray-600">{tagline}</p>
      <p className="mt-4 text-gray-500">{description}</p>
      <div className="mt-6 flex gap-3">
        <a
          href="#admission"
          className="px-4 py-2 rounded-xl font-medium shadow-sm"
          style={{
            background: "linear-gradient(90deg,#F5F5DC,#FFFDD0)",
            boxShadow: "6px 6px 18px rgba(72,60,50,0.06)",
          }}
        >
          Apply Now
        </a>
        <a
          href="#courses"
          className="px-4 py-2 rounded-xl font-medium border border-gray-200"
          style={{ background: "transparent" }}
        >
          View Courses
        </a>
      </div>
    </div>
  </div>
);

const Carousel = ({ images, index, go }) => (
  <div>
    <div
      className="relative rounded-2xl overflow-hidden"
      style={{ ...neoSoft, minHeight: 320 }}
    >
      <div className="w-full h-80 md:h-96 relative">
        {images.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`slide-${i}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
              i === index ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(0,0,0,0.08), rgba(0,0,0,0.0))",
          }}
        />
        <CarouselControls images={images} index={index} go={go} />
        <CarouselDots images={images} index={index} go={go} />
      </div>
    </div>
  </div>
);

const CarouselControls = ({ images, index, go }) => (
  <div className="absolute left-4 top-1/2 -translate-y-1/2 flex gap-2">
    <button
      onClick={() => go((index - 1 + images.length) % images.length)}
      aria-label="Previous"
      className="p-2 rounded-full"
      style={{ ...neoSoft }}
    >
      ‹
    </button>
    <button
      onClick={() => go((index + 1) % images.length)}
      aria-label="Next"
      className="p-2 rounded-full"
      style={{ ...neoSoft }}
    >
      ›
    </button>
  </div>
);

const CarouselDots = ({ images, index, go }) => (
  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
    {images.map((_, i) => (
      <button
        key={i}
        onClick={() => go(i)}
        className={`w-3 h-3 rounded-full ${
          i === index ? "ring-2 ring-gray-300" : "opacity-60"
        }`}
        aria-label={`Go to slide ${i + 1}`}
      />
    ))}
  </div>
);

export default HeroCarousel;
