import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './home/Home'
import Dashboard from './ResumeBuild/ResumeBuild'

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/resume-build',
        element: <Dashboard/>
      }

    ]
  }
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={router}>
    <App />
  </RouterProvider>
  </StrictMode>,

)
