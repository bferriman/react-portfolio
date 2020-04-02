import React from "react";

function NavDropdown() {

  return (
    <li className="nav-item dropdown">
      <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Connect
      </a>
      <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
        <a className="dropdown-item" href="{{ghProfileURL}}" target="_blank"><i className="fab fa-github"></i> GitHub</a>
        <a className="dropdown-item" href="{{linkedInURL}}" target="_blank"><i className="fab fa-linkedin-in"></i> LinkedIn</a>
        <a className="dropdown-item" href="mailto:{{email}}"><i className="fas fa-envelope"></i> {{email}}</a>
        <a className="dropdown-item" href="tel:+1{{phone}}"><i className="fas fa-phone"></i> {{phoneDisplay}}</a>
      </div>
    </li>

  );
}

export default NavDropdown;