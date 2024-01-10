import React from 'react';
import { ListElement, ListWrapper, SkillsWrapper } from './Skills.styled';
import { Subtitle } from '../../elements';
import { skills } from '../../../context';
import { Skill } from '../../ui';

export const Skills: React.FC = () => {
  return (
    <SkillsWrapper id="skills">
      <Subtitle>My skills</Subtitle>
      <ListWrapper>
        {skills.map(skill => {
          const translateX = Math.round(Math.random() * 20) - 10;
          const translateY = Math.round(Math.random() * 20) - 10;
          return (
            <ListElement
              key={skill.id}
              style={{ translate: `${translateX}px ${translateY}px` }}
            >
              <Skill caption={skill.caption} name={skill.name} />
            </ListElement>
          );
        })}
      </ListWrapper>
    </SkillsWrapper>
  );
};
