import React from "react";
import "./App.css";
import EntryList from "./Entry/EntryList";
import CollectionList from "./Collection/CollectionList";
import Navbar from "./Navbar/Navbar";
import { BrowserRouter as Router, Route } from "react-router-dom";


const App = () => {
  return (
    <div className="pure-g">
      <Router>
        <div className="pure-u-1-8"/>
        <div className="pure-u-3-4">
          <Navbar />
          <Route path="/" exact component={CollectionList} />
          <Route path="/collections/" component={CollectionList} />
          <Route path="/entries/" component={EntryList} />
        </div>
        <div className="pure-u-1-8"/>
      </Router>
    </div>

)};

export default App;
