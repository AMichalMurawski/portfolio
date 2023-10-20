import React from 'react';
import { useMode } from '../providers/useContext';

export const ButtonMode: React.FC = () => {
  const { mode, toggleMode } = useMode();

  const changeMode = () => {
    console.log('change mode');
    toggleMode();
  };

  return (
    <button
      style={{
        position: 'absolute',
        right: '5px',
        bottom: '5px',
        margin: 0,
        padding: '2px',
        fontSize: '14px',
        zIndex: 900,
      }}
      onClick={changeMode}
    >
      {mode}
    </button>
  );
};
