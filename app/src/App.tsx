import { Routes, Route, Link } from 'react-router-dom';
const Home = () => {
  return <div>Home</div>;
};
const About = () => {
  return <div>About</div>;
};

const App = () => {
  return (
    <div>
      <header>
        <Link to="/">To Home</Link>
        <Link to="/about">To About</Link>
      </header>
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
