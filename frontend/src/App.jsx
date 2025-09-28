import logo from "./logo.svg";
import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import FiltreAvance from "./pages/FiltreAvance/FiltreAvance";
import ProduitPage from "./pages/Home/ProduitPage/ProduitPage";
import { useState } from "react";
import LoginPage from "./components/login/LoginPage";
import Publier from "./components/Publier/Publier";
import StoreProviderContext from "./context/StoreProviderContext";

function App() {
  const [loggin, setLoggin] = useState(false);
  return (
    <StoreProviderContext>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/filtreavance/:category" element={<FiltreAvance />} />
          <Route path="/filtreavance/search" element={<FiltreAvance />} />
          <Route path="/produitpage" element={<ProduitPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/publier" element={<Publier />} />
        </Routes>
      </div>
    </StoreProviderContext>
  );
}

export default App;
