import React from 'react' 

import './items.css'

class Items extends React.Component {
    render() {
        if (this.props.cart.length <= 0){
            return <div className='no-items'>There are no items in your cart.</div>
        } else {

        }
        return this.props.cart.map(item => {
            return (
                <div>
                    <div className='item-image' style={{backgroundImage: item.image, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center'}}></div>
                    <div className='item-price'>{item.price}</div>
                </div>
            )
        })
    }
}

export default Items