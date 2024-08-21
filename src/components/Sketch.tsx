import React, { useEffect, useRef } from 'react';
import p5 from 'p5';

const Sketch: React.FC = () => {
  const sketchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sketch = new p5((p: p5) => {
      p.setup = () => {
        p.createCanvas(400, 400).parent(sketchRef.current!);
      };

      p.draw = () => {
        p.background(200);
        p.ellipse(p.width / 2, p.height / 2, 50, 50);
      };
    });

    return () => {
      sketch.remove();
    };
  }, []);

  return <div ref={sketchRef}></div>;
};

export default Sketch;
