import logo from "./logo.svg";
import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import FiltreAvance from "./pages/FiltreAvance/FiltreAvance";
import ProduitPage from "./pages/ProduitPage/ProduitPage";
import LoginPage from "./components/Login/LoginPage"
import { useState } from "react";
function App() {
    const [loggin, setLoggin] = useState(false);
    return (
    
    <div className="App">
      {loggin && <LoginPage />}
      <Navbar  loggin={loggin} setLoggin={setLoggin}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/filtreavance/:category" element={<FiltreAvance />} />
        <Route path="/produitpage" element={<ProduitPage />} />
      </Routes>
    </div>
  );
}

export default App;
