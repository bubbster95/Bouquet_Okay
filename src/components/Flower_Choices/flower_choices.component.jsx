import React from 'react';

import  Flowers  from '../../elements/Flowers/flowers.object'

import './flower_choices.css'

class FlowerChoices extends React.Component {
    constructor(props) {
        super(props);
        this.plantFlowers = this.plantFlowers.bind(this)
    }
    pickFlower(color, key) {
        console.log('you added a ' + color + ' ' + key + ' to the Cart')
    }

    plantFlowers(swatch) {
        let flowersKeys = Object.keys(Flowers)
        console.log(flowersKeys)
        return flowersKeys.map(key => {
            let filter = Flowers[key].colors.filter(color => { 
                return swatch.includes(color) ? true : false
            })
            return filter.map(color => {
                return <button
                className='flower'
                onClick={this.props.addFlower}
                style={{backgroundColor: color}}
                key={color+key}
                id={color + key}
                >{color +' '+ key}
                </button>
            })
        })
    }

    render() {
        return(
            <div className='flower-container'>
            <h1 id='flowers-title'>Choose Your Flowers</h1>
            <div className='flower-choices'>
                {this.plantFlowers(this.props.colors)}
            </div>

            </div>
        )
    }
}

export default FlowerChoices;