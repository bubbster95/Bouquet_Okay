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
  constructor(props) {
    super(props);

    this.state = {
      cart: [],
      cartCount: 0
    }
  }
  addToCart(e) {
    console.log('add to cart', e.target.parentElement.children[0])
    if (e.target.parentElement.children[0].className === 'complete-title'){
      let image = e.target.parentElement.children[3].children[0].getElementsByTagName('DIV')[0].style.backgroundImage
      // let divs = image.getElementsByTagName('DIV')
      console.log('image',image )
      let price = e.target.parentElement.children[4].children[1].innerHTML
      this.setState({
        cart: [...this.state.cart, {image: image, price: price}],
        cartCount: this.state.cartCount + 1
      })
    }
  }

  componentDidUpdate() {
    console.log(this.state.cart)
  }

  render() {
    return (
      <div className='app'>
        <Router>
        <Header cartCount={this.state.cartCount}/>
          <Switch>
            <Route path='/cart'>
                <Cart cart={this.state.cart}/>
            </Route>
            <Route path='/design'>
                <Design cart={this.addToCart.bind(this)}/>
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
