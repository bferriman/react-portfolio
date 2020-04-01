import React from "react";
import Header from "../../components/Header";
import AboutContent from "../../components/AboutContent";
import Footer from "../../components/Footer";

function Header() {

  return (
    <div className="container">
      <Header />
      <AboutContent />
      <Footer />
    </div>
  );
}

export default Header;