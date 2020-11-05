import React from 'react';

import Items from '../../components/Items/items.component'

import './cart.css'

class Cart extends React.Component {
    render() {
        return(
            <div className='content'>
                <h2 className='cart-title'>Items In Your Cart</h2>
                <div className='items-container'>
                    <Items remove={this.props.remove} colors={this.props.cart.colors} cart={this.props.cart}/>
                </div>
                <div className='total'>
                    <h2 className='total-title'>Total</h2>
                </div>
            </div>
        )
    }
}

export default Cart;