'use client';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

type RevealProps = {
  children: React.ReactNode;
  className?: string;
};

export function Reveal({
  children,
  className = '',
}: RevealProps) {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!root.current) {
        return;
      }

      gsap.fromTo(
        root.current,
        {
          y: 45,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: root.current,
            start: 'top 85%',
            once: true,
          },
        },
      );
    },
    {
      scope: root,
    },
  );

  return (
    <div ref={root} className={className}>
      {children}
    </div>
  );
}