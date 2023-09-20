import React from "react";
import {
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";

const Root = () => {
  return (
    <Routes>
      <Route index element={<div>Portfolio</div>} />
      <Route path={"cv"} element={<div>Curriculum Vitae</div>} />
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
