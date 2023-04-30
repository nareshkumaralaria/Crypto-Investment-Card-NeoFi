import React from 'react';
import logo from '../assets/images/Neofi-logo.svg';
import '../assets/styles/Navbar.css';

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className="nav">
                <div className="logo">
                    <img src={logo} alt="" />
                    <p>NeoFi</p>
                </div>
                <div className="navlinks">
                    <ul>
                        <li><a href="#" className='selected'>Trade</a></li>
                        <li><a href="#">Earn</a></li>
                        <li><a href="#">Support</a></li>
                        <li><a href="#">About</a></li>
                    </ul>
                </div>
                <div className="cta-button">
                    <button>Connect Wallet</button>
                </div>
            </div>
        </div>
    )
}

export default Navbar