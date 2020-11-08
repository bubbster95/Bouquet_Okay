import React from 'react';

import DesignChoose from '../../components/Design_Choose/design_choose.component';

import './home.css'

class Home extends React.Component {
    render() {
        return (
            <div className='content'>
                <h1 className='home-title'>Bouq-A-Okay</h1>
                <DesignChoose design={true}/>
                <DesignChoose />
            </div>
        )
    }
}

export default Home;