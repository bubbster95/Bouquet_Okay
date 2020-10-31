import React from 'react';

import  Flowers  from '../../elements/Flowers/flowers.object'

import './flower_choices.css'

class FlowerChoices extends React.Component {
    pickFlower(color, key) {
        console.log('you added a ' + color + ' ' + key + ' to the Cart')
    }

    plantFlowers() {
        let flowersKeys = Object.keys(Flowers)
        console.log(flowersKeys)
        return flowersKeys.map(key => {
            return Flowers[key].colors.map(color => {
                return<button
                onClick={() => this.pickFlower(color, key)}
                key={color+key}
                id={color + key}
                >{color +' '+ key}
                </button>
            })
        })
    }

    render() {
        return(this.plantFlowers())
    }
}

export default FlowerChoices;