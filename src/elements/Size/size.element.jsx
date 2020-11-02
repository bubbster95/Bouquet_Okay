import React from 'react';

import './size.css'

class Size extends React.Component {
    render() {
        return(
            <div id='size-conatiner'>
                <h1 id='size-title'>Choose Bouquet Size</h1>
                <button onClick={this.props.click} className='size' id='small' value={3}>Small</button>
                <button onClick={this.props.click} className='size' id='medium' value={4}>Medium</button>
                <button onClick={this.props.click} className='size' id='large' value={5}>Large</button>
            </div>
        )
    }
}
export default Size;