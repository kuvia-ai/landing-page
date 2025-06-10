import React, { useEffect, useRef, useContext } from 'react';
import { AppContext } from '../../context/AppContext';

interface SectionProps {
  id: string;
  children: React.ReactNode;
  intersectionThreshold?: number;
}

const Section: React.FC<SectionProps> = ({ id, children, intersectionThreshold }) => {
  const { setSection } = useContext(AppContext);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id;
          setSection(sectionId);
          // Update the URL hash without scrolling
          window.history.replaceState(
            null,
            '',
            `${!sectionId ? '/' : `#${sectionId}`}`
          );
        }
      },
      {
        threshold: intersectionThreshold, // Customize as needed
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
