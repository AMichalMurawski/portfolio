import React, { useState } from 'react';
import {
  ImageFrame,
  Nail,
  Painting,
  PaintingMove,
  PaintingWrapper,
  Rope,
  SVGContener,
  SVGPosition,
  SkillName,
  SkillWrapper,
} from './Skill.styled';
import { IconSvg } from '../../elements';
import { imageFrame } from '../../../images';

interface SkillProps {
  caption: string;
  name: string;
}

interface PaintingProps extends SkillProps {
  handleMouseMove: () => void;
}

const PaintingComponent: React.FC<PaintingProps> = ({
  caption,
  name,
  handleMouseMove,
}) => {
  return (
    <>
      <Rope />
      <Painting onMouseMove={handleMouseMove}>
        <ImageFrame src={imageFrame} />
        <SVGContener>
          <SVGPosition>
            <IconSvg type="iconskill" name={name} dimension="100%" />
          </SVGPosition>
        </SVGContener>
        <SkillName>{caption}</SkillName>
      </Painting>
    </>
  );
};

export const Skill: React.FC<SkillProps> = ({ caption, name }) => {
  const [isMove, setIsMove] = useState<boolean>(false);

  const handleMouseMove = () => {
    setIsMove(true);
    setTimeout(() => {
      setIsMove(false);
    }, 4000);
  };

  return (
    <SkillWrapper>
      <Nail />
      {isMove ? (
        <PaintingMove>
          <PaintingComponent
            key={caption}
            caption={caption}
            name={name}
            handleMouseMove={() => {}}
          />
        </PaintingMove>
      ) : (
        <PaintingWrapper>
          <PaintingComponent
            key={caption}
            caption={caption}
            name={name}
            handleMouseMove={handleMouseMove}
          />
        </PaintingWrapper>
      )}
    </SkillWrapper>
  );
};
