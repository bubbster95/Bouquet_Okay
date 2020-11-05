import React from 'react';

import Total from '../../elements/Total/total.element'

import Items from '../../components/Items/items.component'

import './cart.css'

class Cart extends React.Component {
    render() {
        if (this.props.cart.length <= 0) {
            return(
                <div className='content'>
                    <h2 className='cart-title'>Items In Your Cart</h2>
                    <div className='items-container'>
                        <Items remove={this.props.remove} colors={this.props.cart.colors} cart={this.props.cart}/>
                    </div>
                </div>
            )
        }else {
        return(
            <div className='content'>
                <h2 className='cart-title'>Items In Your Cart</h2>
                <div className='items-container'>
                    <Items remove={this.props.remove} colors={this.props.cart.colors} cart={this.props.cart}/>
                </div>
                <Total cart={this.props.cart}/>
            </div>
        )
        }
    }
}

export default Cart;