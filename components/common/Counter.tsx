import counterUp from 'counterup2';
import { useEffect, useRef } from 'react';

const Counter = ({ children }: React.PropsWithChildren) => {
  const elRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (elRef.current) {
      new Waypoint({
        element: elRef.current,
        handler: function handler() {
          counterUp(elRef.current, {
            duration: 2000,
            delay: 20,
          });
          this.destroy();
        },
        offset: 'bottom-in-view',
      });
    }
  }, []);

  return (
    <div ref={elRef} className="counter">
      {children}
    </div>
  );
};

export default Counter;
