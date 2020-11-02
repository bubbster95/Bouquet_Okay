import React from 'react';

import Pallet from '../../components/Pallet/pallet.component';
import Swatch from '../../elements/Swatch/swatch.element';
import FlowerChoices from '../../components/Flower_Choices/flower_choices.component'
import Bouquet from '../../components/Bouquet/bouquet.component'
import Size from '../../elements/Size/size.element'
import './design.css';

class Design extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            change: false,
            swatches: ['white', 'pink', 'red'],
            toggled: '',
            picked: [],
            size: 'small',
            quantity: 3
        }

    }

    toggleSwatches(e) {
        this.setState({
            change: !this.state.change,
            toggled: e.target
        })
    }

    addSwatch(e) {
        this.setState((state) =>{
            state.swatches.splice(state.toggled.id, 1, e.target.id)
            return{
                swatches: this.state.swatches,
                change: !this.state.change
            }
        })
    }

    sizeClick(e) {
        let size = document.getElementById(this.state.size)
        size.style.backgroundColor = 'white';
        this.setState({ size: e.target.id, quantity: e.target.value})
    }

    addFlowers(e) {
        if (e.target.className === 'flower-name'){
            this.setState((state) =>{
                return {picked: [...state.picked, e.target.previousElementSibling]}
            })
        } else if (e.target.className === 'hover-text') {
            this.setState((state) =>{
                return {picked: [...state.picked, e.target.parentElement.firstChild]}
            })
        } else {
            this.setState((state) =>{
                return {picked: [...state.picked, e.target]}
            })
        }
    }

    componentDidUpdate() {
        console.log(this.state.picked)
        let size = document.getElementById(this.state.size)
        if (size) {
        size.style.backgroundColor = 'pink';
        }
    }

    render() {
        if (this.state.change) {
            return(
                <div className='content'>
                    <h1 className='pallet-title'>Pick Your Pallet</h1>
                    <Pallet id={0} swatch={this.state.swatches[0]} toggleSwatches={this.toggleSwatches.bind(this)} lable='Main'/>
                    <Pallet id={1} swatch={this.state.swatches[1]} toggleSwatches={this.toggleSwatches.bind(this)} lable='Second'/>
                    <Pallet id={2} swatch={this.state.swatches[2]} toggleSwatches={this.toggleSwatches.bind(this)} lable='Accent'/>
                    <br></br>
                    <Swatch swatch={this.addSwatch.bind(this)}/>
                    <br></br>
                    <Size click={this.sizeClick.bind(this)}/>
                    <br></br>
                </div>
            )
        } else if (this.state.picked.length >= this.state.quantity) {
            return(
                <div className='content'>
                    <h1 className='complete-title'>Happy With Your Bouquet?</h1>
                    <Bouquet flowers={this.state.picked} quantity={this.state.quantity}/>
                </div>
            )
        } else {
            return(
                <div className='content'>
                    <h1 className='pallet-title'>Pick Your Pallet</h1>
                    <Pallet id={0} swatch={this.state.swatches[0]} toggleSwatches={this.toggleSwatches.bind(this)} lable='Main'/>
                    <Pallet id={1} swatch={this.state.swatches[1]} toggleSwatches={this.toggleSwatches.bind(this)} lable='Second'/>
                    <Pallet id={2} swatch={this.state.swatches[2]} toggleSwatches={this.toggleSwatches.bind(this)} lable='Accent'/>
                    <br></br>
                    <Size click={this.sizeClick.bind(this)}/>
                    <br></br>
                    <FlowerChoices quantity={this.state.quantity} colors={this.state.swatches} addFlower={this.addFlowers.bind(this)}/>
                </div>
            )
        }
    }
}

export default Design;