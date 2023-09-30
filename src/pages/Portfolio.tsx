import React from 'react';
import {
  About,
  Background,
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
      <PageWindow>
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
      <Background />
    </>
  );
};

export default Portfolio;
