import { useRef, useEffect } from "react";

function ImageCarousel({ images }) {
  const carouselRef = useRef(null);
  const intervalRef = useRef(null);
  const resumeTimeoutRef = useRef(null);

  // duplicamos imágenes para loop infinito
  const loopImages = [...images, ...images];

  const startAutoScroll = () => {
    if (intervalRef.current) return;

    intervalRef.current = setInterval(() => {
      const el = carouselRef.current;
      if (!el) return;

      el.scrollBy({ left: 320, behavior: "smooth" });

      // si llegamos al final del primer bloque
      if (el.scrollLeft >= el.scrollWidth / 2) {
        setTimeout(() => {
          el.scrollTo({
            left: el.scrollLeft - el.scrollWidth / 2,
            behavior: "auto",
          });
        }, 400);
      }

    }, 3000);
  };

  const stopAutoScroll = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const resumeAutoScroll = () => {
    clearTimeout(resumeTimeoutRef.current);
    resumeTimeoutRef.current = setTimeout(() => {
      startAutoScroll();
    }, 4000);
  };

  useEffect(() => {
    startAutoScroll();

    const el = carouselRef.current;
    if (!el) return;

    const handleStart = () => stopAutoScroll();
    const handleEnd = () => resumeAutoScroll();

    el.addEventListener("mouseenter", handleStart);
    el.addEventListener("mouseleave", handleEnd);
    el.addEventListener("touchstart", handleStart);
    el.addEventListener("touchend", handleEnd);

    return () => {
      stopAutoScroll();
      clearTimeout(resumeTimeoutRef.current);

      el.removeEventListener("mouseenter", handleStart);
      el.removeEventListener("mouseleave", handleEnd);
      el.removeEventListener("touchstart", handleStart);
      el.removeEventListener("touchend", handleEnd);
    };
  }, []);

    return (
        <div
        ref={carouselRef}
        className="flex gap-6 overflow-x-auto pb-8 justify-start px-4 md:px-20 scroll-smooth snap-x snap-mandatory cursor-grab active:cursor-grabbing [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
        >
        {loopImages.map((imgName, index) => (
            <div
            key={index}
            className="min-w-[80vw] md:min-w-[400px] h-[250px] md:h-[300px] bg-white/5 border border-neonGreen/30 rounded-lg snap-center flex-shrink-0 relative overflow-hidden group"
            >
            <img
                src={`/images/carousel/${imgName}`}
                alt={`Versión anterior ${index + 1}`}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            </div>
        ))}
        </div>
    );
}

export default ImageCarousel;