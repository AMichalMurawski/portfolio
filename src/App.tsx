import React, { lazy } from "react";
import {
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";

const PortfolioPage = lazy(() => import('./pages/Portfolio'))
const CVPage = lazy(() => import('./pages/CurriculumVitae'))

const Root = () => {
  return (
    <Routes>
      <Route index element={<PortfolioPage />} />
      <Route path={"curriculum-vitae"} element={<CVPage />} />
    </Routes>
  );
};

const router = createBrowserRouter([
  {
    path: "/*",
    element: <Root />,
    errorElement: <div>Error Page</div>,
  },
]);

const App: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default App;
