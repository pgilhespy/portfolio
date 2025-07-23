import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const MAX_OFFSET = 12;
const MAX_ROTATION = 3; // in degrees

export default function ImageFollow({ image, containerRef, boundsRef, size }) {
  const imgRef = useRef(null);

  useEffect(() => {
    const container = containerRef?.current;
    const bounds = boundsRef?.current;
    const imageEl = imgRef.current;

    if (!container || !bounds || !imageEl) return;

    const handleMouseMove = (e) => {
      const boundsRect = bounds.getBoundingClientRect();
      const containerRect = container.getBoundingClientRect();

      const centerX = containerRect.left + containerRect.width / 2;
      const centerY = containerRect.top + containerRect.height / 2;

      const dx = e.clientX - centerX;
      const dy = e.clientY - centerY;

      const normX = dx / (containerRect.width / 2);
      const normY = dy / (containerRect.height / 2);

      const maxX = Math.min(MAX_OFFSET, boundsRect.width / 2);
      const maxY = Math.min(MAX_OFFSET, boundsRect.height / 2);

      const offsetX = -normX * maxX;
      const offsetY = -normY * maxY;

      // Use horizontal movement to determine rotationZ
      const rotationZ = normX * MAX_ROTATION;

      gsap.to(imageEl, {
        x: -offsetX,
        y: -offsetY,
        rotateZ: rotationZ,
        duration: 0.3,
        ease: 'power3.out',
      });
    };

    const reset = () => {
      gsap.to(imageEl, {
        x: 0,
        y: 0,
        rotateZ: 0,
        duration: 0.4,
        ease: 'power3.out',
      });
    };

    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseleave', reset);

    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseleave', reset);
    };
  }, [containerRef, boundsRef]);

  return (
    <img
      ref={imgRef}
      src={image}
      alt="cursor visual"
      style={{
        width: `${size}%`,
        height: 'auto',
        pointerEvents: 'none',
        willChange: 'transform',
      }}
    />
  );
}
