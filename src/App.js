import React from "react";
import "./App.css";
import Collections from "./Collections";

const App = () => {
  return (
  <div className="container">
    <nav className="navbar navbar-dark bg-primary">
      <a href="/" className="navbar-brand">Evoke React/Apollo Frontend</a>
    </nav>
    <div>
      <Collections />
    </div>
  </div>
)};

export default App;
