'use client';

import { useEffect, useRef } from 'react';

const Progress = () => {
  const ref = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const scrollHeight = document.documentElement.scrollHeight;
    const clientHeight = document.documentElement.clientHeight;

    const progress = (scrollTop / (scrollHeight - clientHeight)) * 100;

    if (ref.current) ref.current.style.width = `${progress}%`;
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return <div ref={ref} className="fixed left-0 top-0 z-10 h-1 bg" />;
};

export default Progress;
