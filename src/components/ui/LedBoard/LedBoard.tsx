import React from 'react';
import {
  EmptyPoint,
  FlashPoint,
  HashLink,
  LedBoardFrame,
  LedConteiner,
  Letter,
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
    console.log(textArray);
    return textArray;
  };

  const rowsLetter = (letter: string) => {
    const rowsArray = letters[letter.toLowerCase()];
    return rowsArray;
  };

  return (
    <LedBoardFrame>
      <LedConteiner>
        {linkList.map((led, i) => (
          <>
            {i === 0 ? (
              <Letter key={i + 'star0'}>
                {rowsLetter('star').map((row: number[], i: number) => (
                  <Row key={i}>
                    {row.map((point, i) => {
                      if (point === 1) return <FlashPoint />;
                      return <EmptyPoint />;
                    })}
                  </Row>
                ))}
              </Letter>
            ) : null}
            <HashLink
              key={led.name}
              spy={true}
              offset={-120}
              hashSpy={true}
              to={led.path}
            >
              {ledText(led.name).map((letter: string, i: number) => (
                <Letter key={i}>
                  {rowsLetter(letter).map((row: number[], i: number) => (
                    <Row key={i}>
                      {row.map((point, i) => {
                        if (point === 1) return <FlashPoint />;
                        return <EmptyPoint />;
                      })}
                    </Row>
                  ))}
                </Letter>
              ))}
            </HashLink>
            <Letter key={i + 'star0'}>
              {rowsLetter('star').map((row: number[], i: number) => (
                <Row key={i}>
                  {row.map((point, i) => {
                    if (point === 1) return <FlashPoint />;
                    return <EmptyPoint />;
                  })}
                </Row>
              ))}
            </Letter>
          </>
        ))}
      </LedConteiner>
    </LedBoardFrame>
  );
};
