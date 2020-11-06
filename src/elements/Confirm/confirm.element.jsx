import React from 'react'

import { Link } from 'react-router-dom'

import './confirm.css'

class Confirm extends React.Component {
    render() {
    let name = this.props.thisItem.target.parentElement.children[2].innerHTML;
        return(
            <div className='confirmation-container'>
                <button className='confirm-close' onClick={this.props.close}>X</button>
                <h1 className='confirm-title'>Added To Your Cart</h1>
                <br></br>
                <h2 className='bouquet-name' style={{color: 'white'}}>{name}</h2>
                <button className='continue-shopping' onClick={this.props.close}>Continue Shopping</button>
                <Link to='/cart' style={{textDecoration: 'none'}}>
                    <button className='go-to-cart'
                    onClick={this.props.cartLink}>Go To Cart</button>    
                </Link>
            </div>
        )
    }
}

export default Confirm;