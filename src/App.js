// import logo from './logo.svg';
// import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import HomeRouter from "./components/HomeRouter";

// import Nav from './components/Nav'

const App = () => {
  return (
    <div className="min-h-screen flex-col">
      <nav className="bg-blue-500 text-white p-4">
        <div className="container mx-auto flex justify-between">
          <Link to="/" className="font-bold">
            My School
          </Link>
          <div>
            <Link to="/" className="mx-2">
              Home
            </Link>
            <Link to="/About" className="mx-2">
              About
            </Link>
            <Link to="/Contact" className="mx-2">
              Contact Me
            </Link>
          </div>
        </div>
      </nav>

      <main className="flex-grow container mx-auto p-4">
        <HomeRouter />
      </main>
      <footer className="bg-blue-500 text-white text-center p-4"></footer>
    </div>
  );
};

export default App;
