import React from 'react';
import { Cover, Front, Glass, Side } from './BoardCover.styled';
import { Frame } from './BoardFrame.styled';
import { useProjects } from '../../../providers';

export const BoardCover: React.FC = () => {
  const { boardOpen } = useProjects();

  return (
    <Cover $isOpen={boardOpen}>
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
