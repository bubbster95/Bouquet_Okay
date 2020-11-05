import React from 'react'

import './flower_total.css'

class FlowerTotal extends React.Component {
    flowerTotal(flowers, quantity) {
        let sum = flowers.reduce((total, flower, index)=> {
            return(index === 0) ? total
            : parseInt(total) + parseInt(flower.value)
        }, parseInt(flowers[0].value))
        return <h2 id="price">{`$${sum*quantity}`}</h2>
    }

    render(){
        return (
            <div id='flower-total'>
            <h2 className='flower-total-title'>This Bouquet Comes To:</h2>
            {this.flowerTotal(this.props.flowers, this.props.quantity)}
            </div>
        )
    }
}

export default FlowerTotal;