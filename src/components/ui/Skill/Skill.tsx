import React, { useState } from 'react';
import {
  Image2,
  ImageContener2,
  ImgName2,
  Nail,
  Pennant,
  PennantMove,
  PennantWrapper,
  Rope,
  SkillWrapper,
} from './Skill.styled';

interface SkillProps {
  caption: string;
  link: string;
}

interface PennantProps extends SkillProps {
  handleMouseMove: () => void;
}

const PennantComponent: React.FC<PennantProps> = ({
  caption,
  link,
  handleMouseMove,
}) => {
  return (
    <>
      <Rope />
      <Pennant onMouseMove={handleMouseMove}>
        <ImageContener2>
          <Image2 src={link} alt={caption} />{' '}
        </ImageContener2>
        <ImgName2>{caption}</ImgName2>
      </Pennant>
    </>
  );
};

export const Skill: React.FC<SkillProps> = ({ caption, link }) => {
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
        <PennantMove>
          <PennantComponent
            key={caption}
            caption={caption}
            link={link}
            handleMouseMove={() => {}}
          />
        </PennantMove>
      ) : (
        <PennantWrapper>
          <PennantComponent
            key={caption}
            caption={caption}
            link={link}
            handleMouseMove={handleMouseMove}
          />
        </PennantWrapper>
      )}
    </SkillWrapper>
  );
};
