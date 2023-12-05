import React, { useState } from 'react';
import {
  Nail,
  Pennant,
  PennantMove,
  PennantWrapper,
  Rope,
  SVGContener,
  SVGPosition,
  SkillName,
  SkillWrapper,
} from './Skill.styled';
import { IconSvg } from '../../elements';

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
        <SVGContener>
          <SVGPosition>
            <IconSvg link={link} dimension="100%" />
          </SVGPosition>
        </SVGContener>
        <SkillName>{caption}</SkillName>
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
