import React from 'react';
import './RickshawRoastersHeader.css';
import { Link } from "react-router-dom";

class RickshawRoastersHeader extends React.Component{
    render(){
        return(
            <header id="header">
                <Link to="/" id="RickshawRoastersLogoHomeLink"><img id="RickshawRoastersHomeLogo" src="https://jeremymbeckerbucket.s3.us-west-1.amazonaws.com/Rickshaw_Roasters_Logo.png" loading="lazy" alt="Rickshaw Roasters Logo" title="Rickshaw Roasters"></img></Link>
                <nav id="nav-bar" className="header-content">
                    <ul className="nav-links">
                        <li><Link to="/collections/shop-beans" className="nav-link">Shop</Link></li>
                        <li><Link to="/pages/uncover" className="nav-link">Uncover</Link></li>
                        <li><Link to="/pages/locations" className="nav-link">Locations</Link></li>
                        <li><Link to="/pages/our-story" className="nav-link">Our Story</Link></li>
                        <li><Link to="/pages/partnership" className="nav-link">Partnership</Link></li>
                    </ul>
                </nav>
                <nav id="utility-bar" className="header-content">
                    <ul className="nav-utils">
                            <li><Link to="/account/login" className="nav-link" title="My Account"><i className="fa-solid fa-user"></i> Login</Link></li>
                            <li><button id="search-button" aria-haspopup="true" aria-label="Search"><i className="fa-solid fa-magnifying-glass"></i></button></li>
                            <li><Link to="/cart" className="nav-link"><i className="fa-solid fa-cart-shopping"></i></Link></li>
                    </ul>
                </nav>
            </header>
        );
    }
}

export default RickshawRoastersHeader;