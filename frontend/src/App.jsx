import { useState } from 'react';
import { Routes, Route, BrowserRouter as Router, createBrowserRouter } from 'react-router-dom'; // Use BrowserRouter
import './App.css';
import RootLayout from './pages/RootLayout';
import Home from './pages/Home';
import ResumeUpload from './components/ResumeUpload';
import AIResults from './components/AIResults';
import Profile from './components/Profile';

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/resume-upload",
        element: <ResumeUpload />,
        children: [
          {
            path: "*/:id",
            element: <AIResults />
          },
        ]
      },
      {
        path: "/profile",
        element: <Profile />,
      },
    ]
  }
])

export default router;