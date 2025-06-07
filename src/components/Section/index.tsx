import React, { useEffect, useRef } from 'react';

interface SectionProps {
  id: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ id, children }) => {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id;
          window.history.replaceState(
            null,
            '',
            `${!sectionId ? '/' : `#${sectionId}`}`
          );
        }
      },
      {
        threshold: 0.2, // Customize as needed
      }
    );

    const current = ref.current;
    if (current) observer.observe(current);

    return () => {
      if (current) observer.unobserve(current);
    };
  }, [id]);

  return (
    <div ref={ref} id={id}>
      {children}
    </div>
  );
};

export default Section;
