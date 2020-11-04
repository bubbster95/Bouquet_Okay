import React from 'react'

import { Link } from "react-router-dom";

import './congrats.css'

class Congrats extends React.Component {
    render() {
        return(
            <div className='congrats-container'>
                <button className='congrats-close' onClick={this.props.close}>X</button>
                <h1 className='congrats-title'>Your purchase was added!</h1>
                <button className='continue-shopping' onClick={this.props.close}>Continue Shopping</button>
                <Link to='/cart' style={{textDecoration: 'none'}}>
                    <button className='go-to-cart'
                    onClick={this.props.cartLink}>Go To Cart</button>    
                </Link>
            </div>
        )
    }
}

export default Congrats;