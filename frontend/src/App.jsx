import logo from "./logo.svg";
import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home"; 
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={Home} />
      </Routes>
    </div>
  );
}

export default App;
