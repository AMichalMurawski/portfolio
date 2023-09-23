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

const Portfolio: React.FC = () => {
  return (
    <div>
      <FooConsole />
      <Header />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <FooTheme />
    </div>
  );
};

export default Portfolio;
