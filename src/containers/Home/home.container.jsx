import React from 'react';

import DesignChoose from '../../components/Design_Choose/design_choose.component';

import './home.css'

class Home extends React.Component {
    render() {
        return (
            <div className='content'>
                <DesignChoose design={true}/>
                <DesignChoose />
            </div>
        )
    }
}

export default Home;