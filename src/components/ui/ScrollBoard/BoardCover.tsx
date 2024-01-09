import React, { useState } from 'react';
import { Cover, Front, Glass, Side } from './BoardCover.styled';
import { Frame } from './BoardFrame.styled';

export const BoardCover: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(true);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Cover onClick={handleOpen} $isOpen={isOpen}>
      <Front>
        <Glass />
        <Frame $adjacent="vertical" $side="left" />
        <Frame $adjacent="vertical" $side="right" />
        <Frame $adjacent="horizontal" $side="top" />
        <Frame $adjacent="horizontal" $side="bottom" />
        <Side $adjacent="vertical" $side="left" />
        <Side $adjacent="vertical" $side="right" />
        <Side $adjacent="horizontal" $side="top" />
        <Side $adjacent="horizontal" $side="bottom" />
      </Front>
    </Cover>
  );
};
