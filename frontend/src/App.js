import React from 'react';
// CSS
import './App.css';
import 'antd/dist/antd.css';
import 'bootstrap/dist/css/bootstrap.min.css'
// Page
import PageData from 'Data/PageData'
import Home from 'Pages/Home'
// Components
import { BrowserRouter , Switch, Route } from "react-router-dom";
import Navbar from 'Components/SiteComponents/SiteNavbar';
import Footer from 'Components/SiteComponents/SiteFooter/SiteFooter';

const App = () => {

  const listOfPages = PageData.map((page) => (
      <Route path={`/${page.title}`}>
        {page.page}
      </Route>
    )
  )

  const homeLink = (
    <Route path="" >
      {Home}
    </Route>

  )

  return (
    <BrowserRouter>
      <Navbar data={PageData}/>
        <Switch>
          {listOfPages}
          {homeLink}
        </Switch>
      <Footer />
    </BrowserRouter>
  );

}

export default App;
