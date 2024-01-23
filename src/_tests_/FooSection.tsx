import React from 'react';
import { Filter1, Filter2, Filter3, Section } from './FooSection.styled';

export const FooSection: React.FC = () => {
  return (
    <Section>
      <Filter1 />
      <Filter2 />
      <Filter3 />
      <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200">
        <filter id="n" x="0" y="0">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.30"
            stitchTiles="stitch"
          />
        </filter>
        <filter id="m" x="0" y="0">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.20"
            stitchTiles="stitch"
          />
        </filter>
        <filter id="o" x="0" y="0">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.25"
            stitchTiles="stitch"
          />
        </filter>
      </svg>
    </Section>
  );
};
