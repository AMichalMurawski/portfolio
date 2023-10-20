import React, { useEffect, useRef, useState } from 'react';
import { BgWrapper, BrickLine } from './BackgroundWall.styled';
import { Brick } from '../../ui';
import {
  WallDimension,
  brickRows,
  initialWallDimension,
} from './BackgroundWall.data';
import { useStyle } from '../../../providers';

export const BackgroundWall: React.FC = () => {
  const style = useStyle();
  const [wallDimension, setWallDimension] =
    useState<WallDimension>(initialWallDimension);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      setWallDimension({
        height: ref.current.clientHeight,
        width: ref.current.clientWidth,
      });
    }
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (ref.current) {
        setWallDimension({
          height: ref.current.clientHeight,
          width: ref.current.clientWidth,
        });
      }
      console.log('foo');
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  console.log(style);

  return (
    <BgWrapper ref={ref}>
      {ref.current &&
        brickRows(
          wallDimension.height,
          style.height.brick,
          style.gap.mortar,
          'row'
        ).map((brick, i) => (
          <BrickLine key={i}>
            {brickRows(
              wallDimension.width,
              style.width.brick,
              style.gap.mortar,
              'col'
            ).map((brick, i) => (
              <Brick key={i} />
            ))}
            {i % 2 === 0 ? <Brick /> : null}
          </BrickLine>
        ))}
    </BgWrapper>
  );
};
