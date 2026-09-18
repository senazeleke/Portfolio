import { useEffect, useState } from 'react';

const useScrollProgress = () => {
  const [progress, setProgress] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const next = max > 0 ? Math.min(1, window.scrollY / max) : 0;
      setProgress(next);
      setScrolled(window.scrollY > 32);
      document.documentElement.style.setProperty('--scroll-p', String(next));
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return { progress, scrolled };
};

export default useScrollProgress;
