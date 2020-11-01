import React from 'react';

import Pallet from '../../components/Pallet/pallet.component';
import Swatch from '../../elements/Swatch/swatch.element';
import FlowerChoices from '../../components/Flower_Choices/flower_choices.component'

import './design.css';

class Design extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            change: false,
            swatches: ['white', 'pink', 'red'],
            toggled: '',
            picked: []
        }

        
    }

    addFlowers(e) {
        console.log('flower',e.target.innerHTML)
        this.setState((state) =>{
            return {picked: [...state.picked, e.target.innerHTML]}
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

    changePallet(e) {
        this.setState({
            change: !this.state.change,
            toggled: e.target
        })
    }

    componentDidUpdate() {
        console.log('you have picked', this.state.picked)
    }
    render() {
        if (this.state.change) {
            return(
                <div className='content'>
                    <h1 className='pallet-title'>Pick Your Pallet</h1>
                    <Pallet id={0} swatch={this.state.swatches[0]} changePallet={this.changePallet.bind(this)}/>
                    <Pallet id={1} swatch={this.state.swatches[1]} changePallet={this.changePallet.bind(this)}/>
                    <Pallet id={2} swatch={this.state.swatches[2]} changePallet={this.changePallet.bind(this)}/>
                    <br></br>
                    <Swatch swatch={this.addSwatch.bind(this)}/>
                    <br></br>
                </div>
            )
        } else {
            return(
                <div className='content'>
                    <h1 className='pallet-title'>Pick Your Pallet</h1>
                    <Pallet id={0} swatch={this.state.swatches[0]} changePallet={this.changePallet.bind(this)}/>
                    <Pallet id={1} swatch={this.state.swatches[1]} changePallet={this.changePallet.bind(this)}/>
                    <Pallet id={2} swatch={this.state.swatches[2]} changePallet={this.changePallet.bind(this)}/>
                    <br></br>
                    <FlowerChoices colors={this.state.swatches} addFlower={this.addFlowers.bind(this)}/>
                </div>
            )
        }
    }
}

export default Design;