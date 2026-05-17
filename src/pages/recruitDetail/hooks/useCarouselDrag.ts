import { useRef, useState } from 'react';

const SNAP_THRESHOLD_RATIO = 1 / 3;

interface UseCarouselDragOptions {
  isLoop?: boolean;
}

const getSlideWidth = (trackRef: React.RefObject<HTMLDivElement>) => {
  if (!trackRef.current) return 375;
  const firstChild = trackRef.current.children[0] as HTMLElement;
  if (!firstChild) return 375;
  const gap = parseFloat(getComputedStyle(trackRef.current).gap) || 0;
  return firstChild.offsetWidth + gap;
};

const useCarouselDrag = (
  totalCount: number,
  { isLoop = false }: UseCarouselDragOptions = {},
) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const startXRef = useRef(0);
  const isDraggingRef = useRef(false);

  const handleDragStart = (e: React.PointerEvent) => {
    e.currentTarget.setPointerCapture(e.pointerId);
    isDraggingRef.current = true;
    startXRef.current = e.clientX;
  };

  const handleDragMove = (clientX: number) => {
    if (!isDraggingRef.current || !trackRef.current) return;
    const slideWidth = getSlideWidth(trackRef);
    const delta = clientX - startXRef.current;

    if (!isLoop) {
      if (currentIndex === 0 && delta > 0) return;
      if (currentIndex === totalCount - 1 && delta < 0) return;
    }

    const baseOffset = -currentIndex * slideWidth;
    trackRef.current.style.transform = `translateX(${baseOffset + delta}px)`;
  };

  const handleDragEnd = (clientX: number) => {
    if (!isDraggingRef.current || !trackRef.current) return;
    isDraggingRef.current = false;
    const slideWidth = getSlideWidth(trackRef);

    const delta = clientX - startXRef.current;
    const threshold = slideWidth * SNAP_THRESHOLD_RATIO;

    let nextIndex = currentIndex;
    if (delta < -threshold) {
      nextIndex = isLoop
        ? (currentIndex + 1) % totalCount
        : Math.min(currentIndex + 1, totalCount - 1);
    }
    if (delta > threshold) {
      nextIndex = isLoop
        ? (currentIndex - 1 + totalCount) % totalCount
        : Math.max(currentIndex - 1, 0);
    }

    setCurrentIndex(nextIndex);
    trackRef.current.style.transition = 'transform 0.3s ease';
    trackRef.current.style.transform = `translateX(${-nextIndex * slideWidth}px)`;

    setTimeout(() => {
      if (trackRef.current) trackRef.current.style.transition = '';
    }, 300);
  };

  const dragHandlers = {
    onPointerDown: (e: React.PointerEvent) => handleDragStart(e),
    onPointerMove: (e: React.PointerEvent) => handleDragMove(e.clientX),
    onPointerUp: (e: React.PointerEvent) => handleDragEnd(e.clientX),
  };

  return {
    currentIndex,
    trackRef,
    dragHandlers,
  };
};

export default useCarouselDrag;
