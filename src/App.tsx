import { Outlet } from 'react-router-dom';
import { TransitionLayout } from './components/TransitionLayout';
import './App.css';

function App() {
  return (
    <TransitionLayout>
      <Outlet />
    </TransitionLayout>
  );
}

export default App;
