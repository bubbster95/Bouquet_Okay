import React from 'react';
import { Link } from "react-router-dom";

import './logo.css';

function Logo(link) {
    return (
            <Link to='/'>
                <img
                    className='logo'
                    src='/assets/images/reactLogo.png'
                    width='30px'
                    alt='site logo'>
                </img>
            </Link>
    );
}


export default Logo;