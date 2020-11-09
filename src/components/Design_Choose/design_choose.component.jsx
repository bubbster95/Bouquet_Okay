import React from 'react';
import { Link } from "react-router-dom";

import './design_choose.css'

class DesignChoose extends React.Component {

    render() {
        if (this.props.design) {
            return (
                <div className='design-choose' id='design'>
                    <Link
                    to='/design'
                    style={{ textDecoration: 'none' }}>
                        <img
                            className='design-image'
                            src='/assets/buildBouquet.jpg'
                            alt='A beautiful bouquet design'
                        ></img>
                        <button id='design-button'>
                            Design a Bouquet
                        </button>
                    </Link>
                </div>
            )
        }
        else {
            return(
                <div className='design-choose' id='choose'>
                    <Link
                        to='/choose'
                        style={{ textDecoration: 'none' }}>
                        <img 
                            className='design-image'
                            src='/assets/Bouquets/pinkBouquet.jpg'
                            alt='A beautiful bouquet design'
                        ></img>
                        <button id='choose-button'>
                            Choose a Bouquet
                        </button>
                    </Link>
                </div>
            )
        }
    }
}

export default DesignChoose;