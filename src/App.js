import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import Root from "./Root.js";
import Home from "./components/Main/Home/Home.jsx";
import './App.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { index: true, element: <Navigate to={'/home'} replace/>},
      { path: '/home', element: <Home />},
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
