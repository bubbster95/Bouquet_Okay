import React from 'react';

import './swatch.css';

const colors = ['white', 'pink', 'red', 'yellow', 'orange', 'lavender'];

class Swatch extends React.Component {
    render() {
        return(
            colors.map(color => 
                {return <button
                onClick={this.props.swatch}
                className='swatch'
                id={color}
                key={color}
                style={{backgroundColor: color}}>
                </button>})
        )
    }
}

export default Swatch;