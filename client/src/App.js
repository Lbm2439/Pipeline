import React from "react";
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'

import "./App.css";
import SignIn from "./pages/SignIn";
import Home from "./pages/Home";
import Header from "./components/Header/index";
import Footer from "./components/Footer";

class App extends Component {

  render(){
  return (
    <Router>
      <div>
        <Header />
      </div>
      <div>
        <Route path="/" component={SignIn} />
        <Route path="/home" component={Home} /> 
        </div>
        <div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
