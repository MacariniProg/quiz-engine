import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/global.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Hero } from './pages/Hero';
import { Quiz } from './pages/Quiz';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Hero />,
  },
  {
    path: "/quiz",
    element: <Quiz />,
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
