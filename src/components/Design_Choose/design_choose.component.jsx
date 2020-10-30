import React from 'react';
import { Link } from "react-router-dom";

import './design_choose.css'

class DesignChoose extends React.Component {

    render() {
        if (this.props.design) {
            return (
                <div className='design-choose' id='design'>
                    <img 
                        className='design-image'
                        src='/assets/images/reactLogo.png'
                        alt='A beautiful bouquet design'
                    ></img>
                    <Link
                    to='/design'
                    style={{ textDecoration: 'none' }}>
                        <button id='design-button'>
                            Design a bouquet
                        </button>
                    </Link>
                </div>
            )
        }
        else {
            return(
                <div className='design-choose' id='choose'>
                    <img 
                        className='design-image'
                        src='/assets/images/reactLogo.png'
                        alt='A beautiful bouquet design'
                    ></img>
                    <Link
                        to='/choose'
                        style={{ textDecoration: 'none' }}>
                        <button id='choose-button'>
                            Choose a bouquet
                        </button>
                    </Link>
                </div>
            )
        }
    }
}

export default DesignChoose;