import React from 'react';

import Logo from '../../elements/Logo/logo.element'
import CartIcon from '../../elements/Cart_Icon/cart_icon.element'

import './header.css'

class Header extends React.Component {
    render() {
        return(
            <div className='header'>
                <Logo />
                <CartIcon />
            </div>
        )
    }
}

export default Header;