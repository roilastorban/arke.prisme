"use client";

import { useEffect, useState } from "react";

export function MagneticCursor() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const cursor = document.getElementById('cursor');
    
    const moveCursor = (e: MouseEvent) => {
      if (cursor) {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
      }
    };

    document.addEventListener('mousemove', moveCursor);
    return () => document.removeEventListener('mousemove', moveCursor);
  }, []);

  if (!mounted) return null;

  return (
    <div 
      className="magnetic-cursor hidden md:block" 
      id="cursor" 
    />
  );
}
