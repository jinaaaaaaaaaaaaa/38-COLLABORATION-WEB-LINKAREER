import { useEffect, useRef, useState } from 'react';

interface UseTabScrollSyncProps {
  offset?: number;
  onTabChange: (value: string) => void;
}

export const useTabScrollSync = ({
  offset = 88,
  onTabChange,
}: UseTabScrollSyncProps) => {
  const onTabChangeRef = useRef(onTabChange);
  const [passDataEl, setPassDataEl] = useState<HTMLDivElement | null>(null);

  useEffect(() => {
    onTabChangeRef.current = onTabChange;
  }, [onTabChange]);

  useEffect(() => {
    if (!passDataEl) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        onTabChangeRef.current(entry.isIntersecting ? 'pass-data' : 'detail');
      },
      {
        rootMargin: `-${offset}px 0px 0px 0px`,
        threshold: 0,
      },
    );

    observer.observe(passDataEl);

    return () => observer.disconnect();
  }, [offset, passDataEl]);

  return setPassDataEl;
};
