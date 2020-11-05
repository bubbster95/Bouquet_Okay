import React from 'react' 

import './items.css'

class Items extends React.Component {
    render() {
        if (this.props.cart.length <= 0){
            return <div className='no-items'>There are no items in your cart.</div>
        } else {

        }
        return this.props.cart.map((item, index) => {
            console.log('index', index)
            return (
                <div className='single-item'>
                    <div className='item-image' style={{backgroundImage: item.image, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center'}}></div>
                    <div className='item-specs'>
                        <button className='remove' value={index} onClick={this.props.remove}>X</button>
                        <h2 key={`custom-title${item.colors[0]}`}>Cutsom Bouquet</h2>
                        <div key={`custom-colors${item.colors[0]}`}className='item-colors'>
                            {item.colors.map(color => {
                                return <div
                                    className='item-color'
                                    key={color}
                                    style={{
                                        backgroundColor: color,
                                        borderColor: 'rgb(200, 225, 250)'}}>{color}</div>})}
                        </div>
                        <div className='item-price'>{item.price}</div>
                    </div>
                </div>
            )
        })
    }
}

export default Items