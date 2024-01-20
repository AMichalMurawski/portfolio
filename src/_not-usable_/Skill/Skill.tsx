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
import { IconSvg } from '../../components/elements';

interface SkillProps {
  caption: string;
  name: string;
}

interface PennantProps extends SkillProps {
  handleMouseMove: () => void;
}

const PennantComponent: React.FC<PennantProps> = ({
  caption,
  name,
  handleMouseMove,
}) => {
  return (
    <>
      <Rope />
      <Pennant onMouseMove={handleMouseMove}>
        <SVGContener>
          <SVGPosition>
            <IconSvg type="iconskill" name={name} dimension="100%" />
          </SVGPosition>
        </SVGContener>
        <SkillName>{caption}</SkillName>
      </Pennant>
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
        <PennantMove>
          <PennantComponent
            key={caption}
            caption={caption}
            name={name}
            handleMouseMove={() => {}}
          />
        </PennantMove>
      ) : (
        <PennantWrapper>
          <PennantComponent
            key={caption}
            caption={caption}
            name={name}
            handleMouseMove={handleMouseMove}
          />
        </PennantWrapper>
      )}
    </SkillWrapper>
  );
};
