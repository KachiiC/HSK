import React from 'react';
// CSS
import './App.css';
import 'antd/dist/antd.css';
import 'bootstrap/dist/css/bootstrap.min.css'
// Page
import PageData from 'Data/PageData'
// Components
import { BrowserRouter , Switch, Route } from "react-router-dom";
import Navbar from 'Components/SiteComponents/SiteNavbar/SiteNavbar';
import Footer from 'Components/SiteComponents/SiteFooter/SiteFooter';

const App = () => {

  const listOfPages = PageData.map((page) => {

    return (
      <Route path={`/${page.name}`}>
        {page.page}
      </Route>
    )
  })

  

  return (
    <BrowserRouter>
      <Navbar />
        <Switch>
          {listOfPages}
        </Switch>
      <Footer />
    </BrowserRouter>
  );

}

export default App;
