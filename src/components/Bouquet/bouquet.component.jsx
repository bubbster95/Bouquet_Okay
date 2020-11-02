import React from 'react'

import './bouquet.css'

class Bouquet extends React.Component {
    constructor(props) {
        super(props);

        this.addFlowers = this.addFlowers.bind(this)
    }



    addFlowers(flowers, quantity, remove) {
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
                <p className='bouquet-text'>{`$${flower.value * quantity}`}</p>
            </div>
        })
    }

    render() {
        return(
            <div className='bouquet-container'>
                {this.addFlowers(this.props.flowers, this.props.quantity, this.props.remove)}
            </div>
        )
    }
}

export default Bouquet;