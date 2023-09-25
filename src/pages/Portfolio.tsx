import React from 'react';
import {
  About,
  Contact,
  Header,
  Home,
  Projects,
  Skills,
} from '../components/sections';
import { FooTheme } from '../_tests_/FooTheme';
import { FooConsole } from '../_tests_/FooConsole';
import { PageWrapper } from './Portfolio.styled';
import { Background } from '../components/sections/Background/Background';
import { ButtonMode } from '../_tests_/ButtonMode';

const Portfolio: React.FC = () => {
  return (
    <PageWrapper>
      <Background />
      <FooConsole />
      <Header />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <ButtonMode />
    </PageWrapper>
  );
};

export default Portfolio;
