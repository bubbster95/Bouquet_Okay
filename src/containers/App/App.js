import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Home from '../Home/home.container'
import Design from '../Design/design.container'
import Choose from '../Choose/choose.container'
import Header from '../../components/Header/header.component.jsx';
import Cart from '../../containers/Cart/cart.container'


import './App.css';

class App extends React.Component {

  render() {
    return (
      <div className='app'>
        <Router>
        <Header />
          <Switch>
            <Route path='/cart'>
                <Cart />
            </Route>
            <Route path='/design'>
                <Design />
            </Route>
            <Route path='/choose'>
                <Choose />
            </Route>
            <Route path='/'>
                <Home />
            </Route>
          </Switch>
        </Router>
      </div>
    )
  }
}

export default App;
