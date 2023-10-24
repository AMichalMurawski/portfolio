import React from 'react';
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
import { FooConsole } from './_tests_/FooConsole';

const App: React.FC = () => {
  return (
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
      {/* tests components */}
      <FooConsole />
    </>
  );
};

export default App;
