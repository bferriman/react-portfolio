import React from "react";
import NavToggler from "../NavToggler";
import NavAboutLink from "../NavAboutLink";
import NavPortfolioLink from "../NavPortfolioLink";
import NavDropdown from "../NavDropdown";

function Navbar() {

  return (
    <nav className="navbar fixed-top navbar-expand-sm navbar-dark bg-dark">
      <div className="container-lg">
        <a className="navbar-brand" href="/">Ben Ferriman</a>
        <NavToggler />
        <div className="collapse navbar-collapse" id="navbarLinks">
          <ul className="navbar-nav ml-auto">
            <NavAboutLink />
            <NavPortfolioLink />
            <NavDropdown />
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;