import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Projects } from './pages/Projects';
import { ProjectDetails } from './pages/ProjectDetails';
import About from './pages/About';
import Academics from './pages/Academics';
import { TransitionLayout } from './components/TransitionLayout';
import './App.css';

function App() {
  return (
    <Router>
      <TransitionLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/project/:id" element={<ProjectDetails />} />
          <Route path="/about" element={<About />} />
          <Route path="/academics" element={<Academics />} />
        </Routes>
      </TransitionLayout>
    </Router>
  );
}

export default App;
