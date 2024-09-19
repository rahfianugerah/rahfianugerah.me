'use client'
import React, { useState, useEffect } from 'react';

const ScrollProgressAside = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  const handleScroll = () => {
    const scrollTop = window.pageYOffset;
    const winHeight = window.innerHeight;
    const docHeight = document.documentElement.scrollHeight - winHeight;
    const scrolled = (scrollTop / docHeight) * 100;
    setScrollProgress(scrolled);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <aside style={{ position: 'fixed', top: 0, right: 0, width: '4px', height: '100vh', backgroundColor: '#eee', zIndex: 999 }}>
      <div style={{ width: '100%', height: `${scrollProgress}%`, backgroundColor: '#3498db' }}></div>
    </aside>
  );
};

export default ScrollProgressAside;
