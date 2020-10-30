import React from 'react';
import { Link } from "react-router-dom";

import './cart_icon.css'

class CartIcon extends React.Component {

    render() {
        return(
            <Link to='/cart'>
                <button className='cart-icon-button'>
                    <img 
                        className='cart-icon'
                        src='/assets/images/cartIcon.png'
                        alt='Cart icon'
                    ></img>
                </button>
            </Link>
        )
    }  
}

export default CartIcon;