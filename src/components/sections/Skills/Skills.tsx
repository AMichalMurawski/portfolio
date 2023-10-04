import React from 'react';
import { ListElement, ListWrapper, SkillsWrapper } from './Skills.styled';
import { Subtitle } from '../../elements/texts';
import { skills } from '../../../context/skills';
import { Skill } from '../../elements/ui';

export const Skills: React.FC = () => {
  return (
    <SkillsWrapper id="skills">
      <Subtitle>My skills</Subtitle>
      <ListWrapper>
        {skills.map(skill => {
          console.log();
          return (
            <ListElement key={skill.name}>
              <Skill caption={skill.caption} link={skill.link} />
            </ListElement>
          );
        })}
      </ListWrapper>
    </SkillsWrapper>
  );
};
