import React from 'react';

import  Flowers  from '../../elements/Flowers/flowers.object'

import './flower_choices.css'

class FlowerChoices extends React.Component {
    constructor(props) {
        super(props);

        this.plantFlowers = this.plantFlowers.bind(this)
    }

    handleHover(id) {
        let pTag = document.getElementById(id);
        pTag.style.display = 'block';
    }

    handleHoverOff(id) {
        let pTag = document.getElementById(id);
        pTag.style.display = 'none';
    }

    plantFlowers(swatch) {
        let flowersKeys = Object.keys(Flowers)
        return flowersKeys.map(key => {
            let filter = Flowers[key].colors.filter(color => { 
                return swatch.includes(color) ? true : false
            })
            return filter.map(color => {

                let index = Flowers[key].colors.indexOf(color);
                let url = Flowers[key].url[index];
                let hoverText = Flowers[key].meaning[index]
                return <div key={color+key}className='flower-box'>

                    <button
                    className='flower'
                    onClick={this.props.addFlower}
                    onMouseOver={() => this.handleHover(`${color}-${key}-text`)}
                    onMouseLeave={() => this.handleHoverOff(`${color}-${key}-text`)}
                    style={{backgroundImage: `url(${url})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'bottom'}}
                    key={color+key}
                    id={color + key}
                    value={Flowers[key].value}
                    ></button>

                    <h2 
                        id={`${color}-${key}-title`}
                        onClick={this.props.addFlower}
                        onMouseOver={() => this.handleHover(`${color}-${key}-text`)}
                        onMouseLeave={() => this.handleHoverOff(`${color}-${key}-text`)}
                        className='flower-name'
                    >{color +' '+ key}
                    </h2>

                    <p
                    id={`${color}-${key}-text`}
                    onClick={this.props.addFlower}
                    onMouseOver={() => this.handleHover(`${color}-${key}-text`)}
                    onMouseLeave={() => this.handleHoverOff(`${color}-${key}-text`)}
                    className='hover-text'>{hoverText}</p>
                    
                </div>
            })
        })
    }

    render() {
        return(
            <div className='flower-container'>
                <h1 id='flowers-title'>
                    Choose {this.props.quantity - this.props.picked} Flowers
                </h1>
                <div id='flower-choices'>
                    {this.plantFlowers(this.props.colors)}
                </div>
            </div>
        )
    }
}

export default FlowerChoices;