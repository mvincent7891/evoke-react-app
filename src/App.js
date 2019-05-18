import React from "react";
import "./App.css";
import Collections from "./Collections";

const App = () => {
  return (
  <div className="container">
    <nav className="navbar navbar-dark bg-primary">
      <div className="navbar-brand">Evoke React/Apollo Frontend</div>
    </nav>
    <div>
      <Collections />
    </div>
  </div>
)};

export default App;
