import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./styles/mainLayout.css";

const MainLayout = ({ children }) => {
  return (
    <div className="main-layout">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;
