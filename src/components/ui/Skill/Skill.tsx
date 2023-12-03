import React from 'react';
import {
  Image2,
  ImageContener2,
  ImgName2,
  Nail,
  Pennant,
  PennantWrapper,
  Rope,
  SkillWrapper,
} from './Skill.styled';

interface SkillProps {
  caption: string;
  link: string;
}

export const Skill: React.FC<SkillProps> = ({ caption, link }) => {
  return (
    <SkillWrapper>
      <Nail />
      <PennantWrapper>
        <Rope />
        <Pennant>
          <ImageContener2>
            <Image2 src={link} alt={caption} />{' '}
          </ImageContener2>
          <ImgName2>{caption}</ImgName2>
        </Pennant>
      </PennantWrapper>
    </SkillWrapper>
  );
};
