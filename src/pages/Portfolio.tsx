import React from 'react';
import {
  About,
  Contact,
  Header,
  Home,
  Projects,
  Skills,
} from '../components/sections';
import { FooConsole } from '../_tests_/FooConsole';
import { PageWindow } from './Portfolio.styled';
import { Background } from '../components/sections/Background/Background';
import { ButtonMode } from '../_tests_/ButtonMode';

const Portfolio: React.FC = () => {
  return (
    <PageWindow>
      {/* <Background /> */}
      <Header />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
      {/* tests components */}
      <FooConsole />
      <ButtonMode />
    </PageWindow>
  );
};

export default Portfolio;
