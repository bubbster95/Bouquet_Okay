import React from 'react'

import './bouquet.css'

class Bouquet extends React.Component {
    constructor(props) {
        super(props);

        this.addFlowers = this.addFlowers.bind(this)
    }



    addFlowers(flowers, quantity, remove, swatches) {
        return flowers.map(flower => {
            return <div key={`selected-${flower.id}`} className='bouquet-box'>
                <button className='remove-flower' onClick={remove}>X</button>
                <div
                    id={flower.id}
                    className='bouquet-flower'
                    style={{backgroundImage: `${flower.style.backgroundImage}`,
                    backgroundSize: 'contain',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center'}}
                    alt={flower.nextSibling.innerText}>
                </div>
                <h2 className='bouquet-name'>{flower.nextSibling.innerText}</h2>
                <p value={flower.value * quantity} className='bouquet-text'>{`$${flower.value * quantity}`}</p>
                <div className='bouquet-colors'>
                    {swatches.map((color, index) => {
                        return <div style={{display: 'none'}} key={`bouquet-${color}-${index}`}>{color}</div>
                    })}
                </div>
            </div>
        })
    }

    render() {
        return(
            <div className='bouquet-container'>
                {this.addFlowers(this.props.flowers, this.props.quantity, this.props.remove, this.props.swatches)}
            </div>
        )
    }
}

export default Bouquet;