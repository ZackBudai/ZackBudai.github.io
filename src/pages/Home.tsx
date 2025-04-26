import NavMenu from '../components/NavMenu';

export const Home = () => {
  return (
    <div className="home-container">
      <NavMenu />
      <div className="home-content">
        <h1>Zack Budai</h1>
        <p>Electrical Engineer and Computer Scientist</p>
      </div>
    </div>
  );
};