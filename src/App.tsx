import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Projects } from './pages/Projects';
import { ProjectDetails } from './pages/ProjectDetails';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Projects />} />
        <Route path="/project/:id" element={<ProjectDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
