import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider, createHashRouter } from 'react-router-dom'
import './index.css'
import { Home } from './pages/Home'
import { Projects } from './pages/Projects'
import { ProjectDetails } from './pages/ProjectDetails'
import About from './pages/About'
import Academics from './pages/Academics'
import App from './App.tsx'

const router = createHashRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "projects", element: <Projects /> },
      { path: "project/:id", element: <ProjectDetails /> },
      { path: "about", element: <About /> },
      { path: "academics", element: <Academics /> }
    ]
  }
], {
  // This will make the hash router use nicer URLs
  future: {
    v7_prependBasename: true
  }
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
