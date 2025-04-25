import Navigation from '../components/Navigation';

export const Home = () => {
  return (
    <div className="home-container">
      <Navigation />
      <div className="home-content">
        <h1>Zack Budai</h1>
        <p>Computer Scientist and Electrical Engineer</p>
      </div>
    </div>
  );
};