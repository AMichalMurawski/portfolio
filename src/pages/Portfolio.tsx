import React from 'react';
import {
  About,
  BackgroundWall,
  Contact,
  Header,
  Home,
  Projects,
  Skills,
} from '../components/sections';
import { FooConsole } from '../_tests_/FooConsole';
import { PageWindow } from './Portfolio.styled';
import { ButtonMode } from '../_tests_/ButtonMode';

const Portfolio: React.FC = () => {
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
          {/* tests components */}
          <FooConsole />
          <ButtonMode />
        </PageWindow>
        {/* <Background /> */}
        <BackgroundWall />
      </div>
    </>
  );
};

export default Portfolio;
