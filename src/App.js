import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";

import "font-awesome/css/font-awesome.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Card from "./components/Card";
import About from "./components/About";
import Contact from "./components/Contact";
import Product from "./components/Product";
import Footer from "./components/Footer";
import NotFound from "./components/NotFound";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <div id="main">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/card" component={Card} />
              <Route path="/about" component={About} />
              <Route path="/contact" component={Contact} />
              <Route path="/product/:id" component={Product} />
              <Route component={NotFound} />
            </Switch>
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
