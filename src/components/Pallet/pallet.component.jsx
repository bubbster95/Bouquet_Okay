import React from 'react';

import './pallet.css'


class Pallet extends React.Component {   
    render(){
        return (
            <button
                className='pallet'
                id={this.props.id}
                style={{backgroundColor: this.props.swatch}}
                onClick={this.props.changePallet}
            >{this.props.swatch}</button>
        ) 
    }
}

export default Pallet;