import React from 'react';
import { useMode } from '../providers/useContext';

export const ButtonMode: React.FC = () => {
  const { mode, toggleMode } = useMode();

  return (
    <button
      style={{
        position: 'absolute',
        right: '5px',
        bottom: '5px',
        margin: 0,
        padding: '2px',
        fontSize: '14px',
      }}
      onClick={toggleMode}
    >
      {mode}
    </button>
  );
};
