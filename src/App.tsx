import React, { Suspense } from 'react';

import { MainProvider } from './providers/MainProvider';
import Portfolio from './pages/Portfolio';

const App: React.FC = () => {
  return (
    <MainProvider>
      <Portfolio />
    </MainProvider>
  );
};

export default App;
