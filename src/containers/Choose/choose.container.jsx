import React from 'react';


import Arrange from '../../components/Arrange/arrange.component'

import './choose.css'

class Choose extends React.Component {
    render() {
        return(
            <div className='content'>
                <h1 className='choose-title'>Choose A Bouquet</h1>
                <Arrange addBouquet={this.props.addBouquet}/>
            </div>
        )
    }
}

export default Choose;