import { useRef, useState } from 'react';

const SLIDE_WIDTH = 375;
const SNAP_THRESHOLD_RATIO = 1 / 3;

const useCarouselDrag = (totalCount: number) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const startXRef = useRef(0);
  const isDraggingRef = useRef(false);

  const handleDragStart = (clientX: number) => {
    isDraggingRef.current = true;
    startXRef.current = clientX;
  };

  const handleDragMove = (clientX: number) => {
    if (!isDraggingRef.current || !trackRef.current) return;
    const delta = clientX - startXRef.current;
    const baseOffset = -currentIndex * SLIDE_WIDTH;
    trackRef.current.style.transform = `translateX(${baseOffset + delta}px)`;
  };

  const handleDragEnd = (clientX: number) => {
    if (!isDraggingRef.current || !trackRef.current) return;
    isDraggingRef.current = false;

    const delta = clientX - startXRef.current;
    const threshold = SLIDE_WIDTH * SNAP_THRESHOLD_RATIO;

    let nextIndex = currentIndex;
    if (delta < -threshold)
      nextIndex = Math.min(currentIndex + 1, totalCount - 1);
    if (delta > threshold) nextIndex = Math.max(currentIndex - 1, 0);

    setCurrentIndex(nextIndex);
    trackRef.current.style.transition = 'transform 0.3s ease';
    trackRef.current.style.transform = `translateX(${-nextIndex * SLIDE_WIDTH}px)`;

    setTimeout(() => {
      if (trackRef.current) trackRef.current.style.transition = '';
    }, 300);
  };

  return {
    currentIndex,
    trackRef,
    handleDragStart,
    handleDragMove,
    handleDragEnd,
  };
};

export default useCarouselDrag;
