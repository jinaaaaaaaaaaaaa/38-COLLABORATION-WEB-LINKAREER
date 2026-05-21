import { useEffect } from 'react';
import { useLocation } from 'react-router';

export const useScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const root = document.getElementById('root');
    root?.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);
};
