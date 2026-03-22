"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

type Slide = {
  id: string;
  title: string;
  flavor: string;
  image: string;
};

const SLIDES: Slide[] = [
  {
    id: "slide-1",
    title: "x x",
    flavor: "x x",
    image: "/images/products/box-fiesta-frutal.svg",
  },
  {
    id: "slide-2",
    title: "x x",
    flavor: "x",
    image: "/images/products/mix-luxury-tropical.svg",
  },
  {
    id: "slide-3",
    title: "x x",
    flavor: "x",
    image: "/images/products/mini-party-pack.svg",
  },
  {
    id: "slide-4",
    title: "x x",
    flavor: "x",
    image: "/images/products/choco-crunch-collection.svg",
  },
  {
    id: "slide-5",
    title: "x x",
    flavor: "x",
    image: "/images/products/box-fiesta-frutal.svg",
  },
];

function getWrappedIndex(index: number, total: number) {
  return (index + total) % total;
}

export function HeroSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) {
      return;
    }

    const interval = window.setInterval(() => {
      setDirection(1);
      setActiveIndex((prev) => getWrappedIndex(prev + 1, SLIDES.length));
    }, 4000);

    return () => window.clearInterval(interval);
  }, [isPaused]);

  const currentSlide = SLIDES[activeIndex];

  return (
    <section
      className="relative isolate overflow-hidden border-b-2 border-[var(--color-primary)] bg-[linear-gradient(180deg,#0fb8b4_0%,#0ca9a6_100%)]"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="relative w-full h-[500px] sm:h-[600px] lg:h-[700px]">
        <motion.div
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.2}
          onDragEnd={(_, info) => {
            if (info.offset.x < -50) {
              setDirection(1);
              setActiveIndex((prev) => getWrappedIndex(prev + 1, SLIDES.length));
            } else if (info.offset.x > 50) {
              setDirection(-1);
              setActiveIndex((prev) => getWrappedIndex(prev - 1, SLIDES.length));
            }
          }}
          className="w-full h-full cursor-grab active:cursor-grabbing"
        >
          <AnimatePresence initial={false} mode="popLayout">
            <motion.div
              key={currentSlide.id}
              initial={{
                opacity: 0,
                x: direction > 0 ? 800 : -800,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              exit={{
                opacity: 0,
                x: direction > 0 ? -800 : 800,
              }}
              transition={{
                duration: 0.5,
                ease: "easeInOut",
                type: "spring",
                stiffness: 250,
                damping: 28,
              }}
              className="absolute inset-0 w-full h-full"
            >
              <Image
                src={currentSlide.image}
                alt={currentSlide.title}
                fill
                className="object-cover"
                priority
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex flex-col items-center justify-center">
                <h2 className="text-white text-4xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-wide text-center mb-4">
                  {currentSlide.title}
                </h2>
                <p className="text-white/90 text-lg sm:text-xl">
                  {currentSlide.flavor}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>

      <div className="flex items-center justify-center gap-2 py-6 bg-[linear-gradient(180deg,#0ca9a6_0%,#0a9698_100%)]">
        {SLIDES.map((slide, index) => (
          <button
            key={slide.id}
            type="button"
            aria-label={`Ir al slide ${index + 1}`}
            onClick={() => {
              if (index > activeIndex) {
                setDirection(1);
              } else if (index < activeIndex) {
                setDirection(-1);
              }
              setActiveIndex(index);
            }}
            className={`h-3 rounded-full transition-all ${
              activeIndex === index ? "w-8 bg-white" : "w-3 bg-white/45"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
