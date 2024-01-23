import React, { useEffect, useState } from 'react';
import {
  About,
  Background,
  Contact,
  Header,
  Home,
  Projects,
  Skills,
} from './components/sections';
import { PageWindow } from './App.styled';
import { relative } from 'path';

const App: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  const pageLoad = e => {
    setIsLoaded(true);
  };

  useEffect(() => {
    window.addEventListener('load', pageLoad);
    return () => {
      window.removeEventListener('load', pageLoad);
    };
  });

  return (
    <>
      {isLoaded ? (
        <>
          <Header />
          <div style={{ position: 'relative' }}>
            <PageWindow>
              <Home />
              <About />
              <Skills />
              <Projects />
              <Contact />
            </PageWindow>
            <Background />
          </div>
        </>
      ) : (
        <div
          style={{
            position: 'relative',
            width: '100vw',
            height: '100vh',
          }}
        >
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
            }}
          >
            <p>Page loading</p>
          </div>
        </div>
      )}
    </>
  );
};

export default App;
