import React from 'react';
import { Image, ImageContener, ImgName, SkillWrapper } from './Skill.styled';

interface SkillProps {
  caption: string;
  link: string;
}

export const Skill: React.FC<SkillProps> = ({ caption, link }) => {
  return (
    <SkillWrapper>
      <ImageContener>
        <Image src={link} alt={caption} />
      </ImageContener>
      <ImgName>{caption}</ImgName>
    </SkillWrapper>
  );
};
