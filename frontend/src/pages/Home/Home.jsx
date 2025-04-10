import React, { useState } from "react";
import "./Home.css";
import Header from "../../components/Header/Header";
import ExploreCategory from "../../components/ExploreCategory/ExploreCategory";
import Info from "../../components/Info/Info";
import AppDownload from "../../components/appDownload/AppDownload";
import ExploreItem from "../../components/ExploreItem/ExploreItem"; // Adjust the path if necessary
import Footer from "../../components/footer/Footer";
import { Link } from "react-router-dom";

const Home = () => {
  

  return (
    <div className="home">
      <Header />
      <ExploreCategory />
      <Info />
      <ExploreItem />
      <AppDownload />
      <Footer />
    </div>
  );
};

export default Home;