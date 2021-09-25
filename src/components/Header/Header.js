import React from 'react';
import './header.css'
import banner from '../../images/car-banner.png'

const Header = () => {
    return (
        <div className="header-container">
            <img src={banner} alt="" />
        </div>
    );
};

export default Header;