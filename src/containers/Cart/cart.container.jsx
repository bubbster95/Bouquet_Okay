import React from 'react';

import Items from '../../components/Items/items.component'

import './cart.css'

class Cart extends React.Component {
    render() {
        return(
            <div className='content'>
                <Items cart={this.props.cart}/>
            </div>
        )
    }
}

export default Cart;