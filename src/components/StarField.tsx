'use client';

import { useEffect, useRef } from 'react';

export const StarField = () => {
  const starfieldRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const starfield = starfieldRef.current;
    if (!starfield) return;

    starfield.innerHTML = '';

    const numberOfStars = 100;
    for (let i = 0; i < numberOfStars; i++) {
      const star = document.createElement('div');
      star.className = 'star';
      star.style.left = `${Math.random() * 100}%`;
      star.style.top = `${Math.random() * 100}%`;
      star.style.animationDelay = `${Math.random() * 3}s`;
      star.style.animationDuration = `${2 + Math.random() * 4}s`;
      starfield.appendChild(star);
    }
  }, []);

  return <div ref={starfieldRef} className="starfield" />;
};