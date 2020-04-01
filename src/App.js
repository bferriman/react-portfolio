import React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path={["/", "/about"]} component={About} />
        <Route exact path="/portfolio" component={Portfolio} />
      </div>
    </Router>
  );
}

export default App;
