import React from 'react';

import Pallet from '../../components/Pallet/pallet.component';
import Swatch from '../../elements/Swatch/swatch.element';
import FlowerChoices from '../../components/Flower_Choices/flower_choices.component'
import Bouquet from '../../components/Bouquet/bouquet.component'
import Size from '../../elements/Size/size.element'
import FlowerTotal from '../../elements/Total/flower_total.element'

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
            toggled: e.target,
            picked: []
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

    removeFlower(e) {
        let remove = this.state.picked.findIndex((button)=> {
            return (button.id === e.target.nextSibling.id)
        })
        let newPicked = this.state.picked
        newPicked.splice(remove, 1)
        this.setState({
            picked: newPicked
        })
    }

    addToCart() {
        console.log(`Added to cart`)
    }

    componentDidUpdate() {
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
                    <Bouquet
                    remove={this.removeFlower.bind(this)}
                    flowers={this.state.picked}
                    quantity={this.state.quantity}/>
                    <FlowerTotal
                    flowers={this.state.picked}
                    quantity={this.state.quantity}/> 
                    <button onClick={this.addToCart.bind(this)}>Yes, Add to cart</button>
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
                    <FlowerChoices
                    picked={this.state.picked.length}
                    quantity={this.state.quantity}
                    colors={this.state.swatches}
                    addFlower={this.addFlowers.bind(this)}/>
                </div>
            )
        }
    }
}

export default Design;