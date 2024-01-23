import React from 'react';
import {
  HashLink,
  LedBoardFrame,
  LedConteiner,
  Letter,
  LightPoint,
  Phrase,
  Point,
  Row,
} from './LedBoard.styled';
import { Link } from '../../../context';
import letters from './letters';

interface LedBoardProps {
  linkList: Link[];
}

export const LedBoard: React.FC<LedBoardProps> = ({ linkList }) => {
  const ledText = (text: string) => {
    const textArray = text.split('');
    return textArray;
  };

  return (
    <LedBoardFrame>
      <LedConteiner>
        {linkList.map((led, i) => (
          <Phrase key={'phrase' + i}>
            <LedLetter letter={'star'} />
            <HashLink
              key={led.name}
              spy={true}
              offset={-120}
              hashSpy={true}
              to={led.path}
              smooth={true}
            >
              {ledText(led.name).map((letter: string, i: number) => (
                <LedLetter key={'ledletter' + i} letter={letter} />
              ))}
            </HashLink>
            <LedLetter letter={'star'} />
          </Phrase>
        ))}
      </LedConteiner>
    </LedBoardFrame>
  );
};

const LedLetter: React.FC<{ letter: string }> = ({ letter }) => {
  const ledLetter = letters[letter.toLowerCase()];

  return (
    <Letter>
      {ledLetter.map((row: number[], i: number) => (
        <LedRow key={'ledrow' + i} row={row} />
      ))}
    </Letter>
  );
};

const LedRow: React.FC<{ row: number[] }> = ({ row }) => {
  return (
    <Row>
      {row.map((point, i) => {
        const isLight = point === 1 ? true : false;
        return <LedPoint key={'ledpoint' + i} isLight={isLight} />;
      })}
    </Row>
  );
};

const LedPoint: React.FC<{ isLight: boolean }> = ({ isLight }) => {
  return <Point>{isLight ? <LightPoint /> : null}</Point>;
};
