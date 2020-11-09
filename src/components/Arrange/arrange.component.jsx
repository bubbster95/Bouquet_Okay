import React from 'react';

import  Bouquets from '../../elements/Bouquets/bouquets.object'
import Confirm from '../../elements/Confirm/confirm.element'

import './arrange.css'


class Arrange extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            confirm: false,
            currentClick: ''
        }

        this.arrangeBouquets = this.arrangeBouquets.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }

    handleHover(id) {
        let pTag = document.getElementById(id);
        pTag.style.display = 'block';
    }

    handleHoverOff(id) {
        let pTag = document.getElementById(id);
        pTag.style.display = 'none';
    }

    arrangeBouquets() {
        let BouquetKeys = Object.keys(Bouquets)
        return BouquetKeys.map(key => {
                let url = Bouquets[key].url;
                let hoverText = Bouquets[key].meaning;
                let value= Bouquets[key].value;
                return <div key={key} className='arrange-box'>

                    <button
                    className='arrange'
                    onClick={this.handleClick}
                    onMouseOver={() => this.handleHover(`${key}-text`)}
                    onMouseLeave={() => this.handleHoverOff(`${key}-text`)}
                    style={{backgroundImage: `url(${url})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'bottom'}}
                    key={key}
                    id={key}
                    value={key.value}
                    ></button>
                    <div value={value} className='arrange-price'>${value}</div>
                    <h2 
                        id={`${key}-title`}
                        onClick={this.handleClick}
                        onMouseOver={() => this.handleHover(`${key}-text`)}
                        onMouseLeave={() => this.handleHoverOff(`${key}-text`)}
                        className='arrange-name'
                    >{key}
                    </h2>

                    <p
                    id={`${key}-text`}
                    onClick={this.handleClick}
                    onMouseOver={() => this.handleHover(`${key}-text`)}
                    onMouseLeave={() => this.handleHoverOff(`${key}-text`)}
                    className='arrange-text'
                    >{hoverText}</p>
                    
                </div>
        })
    }

    toggleConfirm() {
        this.setState((state)=>{ 
            return {confirm: !state.confirm}
        })
    }

    handleClick(e) {
        console.log()
        this.setState({ currentClick: e })
        this.props.addBouquet(e)
        this.toggleConfirm()
    }

    render() {
        if (this.state.confirm === false) {
            return(
                <div id='arrange-choices'>
                    <div className="arrange-choices">
                        {this.arrangeBouquets()}
                    </div>
                </div>
            )
        } else {
            return(
                <div id='arrange-choices'>
                    <div className="arrange-choices">
                        {this.arrangeBouquets()}
                    </div>
                    <Confirm close={this.toggleConfirm.bind(this)} thisItem={this.state.currentClick} /> 
                </div>
            )
        }
    }
}

export default Arrange;