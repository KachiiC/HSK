import React from 'react';
// CSS
import './App.css';
import 'antd/dist/antd.css';
import 'bootstrap/dist/css/bootstrap.min.css'
// Page
import PageData from './Data/PageData'
// Components
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from './Components/Navbar/SiteNavbar';
import Footer from './Components/Footer/SiteFooter';

const App = () => {

  const listOfPages = PageData.map((page) => {

    return (
      <Route path={`/${page.name}`}>
        {page.page}
      </Route>
    )
  })

  

  return (
    <Router>
      <Navbar />
        <Switch>
          {listOfPages}
        </Switch>
      <Footer />
    </Router>
  );

}

export default App;
