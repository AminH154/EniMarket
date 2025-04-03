import logo from "./logo.svg";
import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import FiltreAvance from "./pages/FiltreAvance/FiltreAvance";
import ProduitPage from "./pages/ProduitPage/ProduitPage";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/filtreavance/:category" element={<FiltreAvance />} />
        <Route path="/produitpage" element={<ProduitPage />} />
      </Routes>
    </div>
  );
}

export default App;
