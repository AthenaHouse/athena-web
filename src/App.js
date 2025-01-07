import { lazy, Suspense } from "react";
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import Root from "./Root.js";
import Home from "./components/Main/Home/Home.jsx";
import './App.css';

const Academy = lazy(() => import('./components/Main/Academy/Academy.jsx'));
const Contact = lazy(() => import('./components/Main/Contact/Contact.jsx'));
const Software = lazy(() => import('./components/Main/Software/Software.jsx'));
const Project = lazy(() => import('./components/Main/Project/Project.jsx'));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { index: true, element: <Navigate to={'/home'} replace/>},
      { path: '/home', element: <Home />},
      { path: '/academy', element: <Suspense><Academy /></Suspense> },
      { path: '/software', element: <Suspense><Software /></Suspense>},
      { path: '/projects', element: <Suspense><Project /></Suspense>},
      { path: '/contact', element: <Suspense><Contact /></Suspense>},
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
