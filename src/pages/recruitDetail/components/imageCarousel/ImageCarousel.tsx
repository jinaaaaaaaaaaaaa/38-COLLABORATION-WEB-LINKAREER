import { useRef, useState } from 'react';

import * as styles from './ImageCarousel.css';

interface ImageCarouselProps {
  images: { id: number; url: string; alt?: string }[];
}

const ImageCarousel = ({ images }: ImageCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const startXRef = useRef(0);
  const isDraggingRef = useRef(false);
  const slideWidth = 375;

  const handleDragStart = (clientX: number) => {
    isDraggingRef.current = true;
    startXRef.current = clientX;
  };

  const handleDragMove = (clientX: number) => {
    if (!isDraggingRef.current || !trackRef.current) return;
    const delta = clientX - startXRef.current;
    const baseOffset = -currentIndex * slideWidth;
    trackRef.current.style.transform = `translateX(${baseOffset + delta}px)`;
  };

  const handleDragEnd = (clientX: number) => {
    if (!isDraggingRef.current || !trackRef.current) return;
    isDraggingRef.current = false;

    const delta = clientX - startXRef.current;
    const threshold = slideWidth / 3;

    let nextIndex = currentIndex;
    if (delta < -threshold)
      nextIndex = Math.min(currentIndex + 1, images.length - 1);
    if (delta > threshold) nextIndex = Math.max(currentIndex - 1, 0);

    setCurrentIndex(nextIndex);
    trackRef.current.style.transition = 'transform 0.3s ease';
    trackRef.current.style.transform = `translateX(${-nextIndex * slideWidth}px)`;

    setTimeout(() => {
      if (trackRef.current) trackRef.current.style.transition = '';
    }, 300);
  };

  return (
    <div
      className={styles.container}
      onMouseDown={(e) => handleDragStart(e.clientX)}
      onMouseMove={(e) => handleDragMove(e.clientX)}
      onMouseUp={(e) => handleDragEnd(e.clientX)}
      onMouseLeave={(e) => handleDragEnd(e.clientX)}
      onTouchStart={(e) => handleDragStart(e.touches[0].clientX)}
      onTouchMove={(e) => handleDragMove(e.touches[0].clientX)}
      onTouchEnd={(e) => handleDragEnd(e.changedTouches[0].clientX)}
    >
      <div ref={trackRef} className={styles.track}>
        {images.map((image) => (
          <div key={image.id} className={styles.slide}>
            <img
              className={styles.image}
              src={image.url}
              alt={image.alt ?? '이미지'}
              draggable={false}
            />
          </div>
        ))}
      </div>
      <span className={styles.pageLabel}>
        {currentIndex + 1}/{images.length}
      </span>
    </div>
  );
};

export default ImageCarousel;
