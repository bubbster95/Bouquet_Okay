import React from 'react'

import './flower_total.css'

class Total extends React.Component {
    flowerTotal(items) {
        let sum = items.reduce((total, items, index)=> {
            return(index === 0) ? total
            : parseInt(total) + parseInt(items.price)
        }, parseInt(items[0].price))
        return <h3 value={sum} id="full-price">{`$${sum}`}</h3>
    }

    render(){
        return (
            <div className='total'>
                    <h2 className='total-title'>Total</h2>
                    {this.flowerTotal(this.props.cart)}
            </div>
        )
    }
}

export default Total;