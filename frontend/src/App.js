import React from 'react';
// CSS
import './App.css';
import 'antd/dist/antd.css';
import 'bootstrap/dist/css/bootstrap.min.css'
// Page
import Home from './Pages/Home/home'
import About from './Pages/About/about'
import HSK1 from './Pages/Levels/HSK1/'
// Components
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from './Components/Navbar/SiteNavbar';
import Footer from './Components/Footer/SiteFooter';

function App() {

  return (
    <Router>
      <Navbar />
        <Switch>
            <Route path="/hsk1">
              <HSK1 />
            </Route>  
            <Route path="/about">
              <About />
            </Route>        
            <Route path="/">
              <Home />
            </Route>
        </Switch>
      <Footer />
    </Router>
  );

}

export default App;
