import logo from "./logo.svg";
import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home"; 
import FiltreAvance from "./pages/FiltreAvance/FiltreAvance";
function App() {
  
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='filreavance' element={<FiltreAvance/>}/>
      </Routes>
    </div>
  );
}

export default App;
