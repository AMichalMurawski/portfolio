import React from 'react';
import { Subtitle } from '../../elements/texts';
import { AboutWrapper } from './About.styled';
import { Paragraph } from '../../elements/texts/Paragraph/Paragraph';

export const About: React.FC = () => {
  return (
    <AboutWrapper>
      <Subtitle>About Me</Subtitle>
      <Paragraph>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem quo
        omnis neque minus quam sit maxime optio tenetur porro saepe modi nobis
        impedit vero dicta autem accusamus veniam, officia molestiae quae
        accusantium. Eaque repudiandae amet accusamus eius excepturi consequatur
        tempora nam iure, iste quibusdam nulla vitae vero quidem blanditiis
        eveniet aperiam at eos dolor! Ipsam praesentium aut modi non et tempora
        at fugit debitis hic suscipit, aspernatur quod nesciunt exercitationem
        cum natus libero sed quae itaque, expedita numquam tenetur minus.
      </Paragraph>
    </AboutWrapper>
  );
};
