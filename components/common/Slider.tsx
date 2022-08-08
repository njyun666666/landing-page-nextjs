import Flickity from 'flickity';
import React, { useEffect, useRef } from 'react';

const Slider = ({ children, options }: { children: React.ReactNode; options: Flickity.Options }) => {
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (divRef.current) {
      const flkty = new Flickity(divRef.current, options);
    }
  }, [children, options]);

  return (
    <div ref={divRef} className="nav-dark-button">
      {children}
    </div>
  );
};

export default Slider;
