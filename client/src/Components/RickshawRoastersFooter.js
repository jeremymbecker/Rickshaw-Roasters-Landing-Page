import React from 'react';
import './RickshawRoastersFooter.css';
import { Link } from "react-router-dom";

class RickshawRoastersFooter extends React.Component{
    render(){
        return(
            <footer id="footer">
                <div id="footer-grid">
                    <div id="footer-logo-and-social-media" className="footer-listings">
                        <img id="RickshawRoastersFooterLogo" src="https://jeremymbeckerbucket.s3.us-west-1.amazonaws.com/Rickshaw_Roasters_Logo.png" loading="lazy" alt="Rickshaw Roasters Logo" title="Rickshaw Roasters"></img>
                        <p>Follow us at:</p>
                        <Link to="https://www.instagram.com/rickshaw.roasters/" className="footer-links"><i className="fa-brands fa-instagram"></i> Instagram</Link>
                    </div>
                    <div id="footer-locations" className="footer-listings">
                        <p>Locations</p>
                        <ul>
                            <li><Link to="/pages/locations" className="footer-links">Coffee Bar Locations</Link></li>
                        </ul>
                    </div>
                    <div id="footer-about" className="footer-listings">
                        <p>About</p>
                        <ul>
                            <li><Link to="/pages/our-story" className="footer-links">Our Story</Link></li>
                            <li><Link to="/pages/contact-us" className="footer-links">Contact</Link></li>
                            <li><Link to="/pages/faq" className="footer-links">FAQ</Link></li>
                            <li><Link to="/pages/rickshaw-roasters-return-policy" className="footer-links">Return Policy</Link></li>
                            <li><Link to="/" className="footer-links">Privacy Policy</Link></li>
                            <li><Link to="/" className="footer-links">Terms of Service</Link></li>
                            <li><Link to="/pages/us-shipping-rates" className="footer-links">US Shipping Rates</Link></li>
                        </ul>
                    </div>
                    <div id="footer-shop" className="footer-listings"> 
                        <p>Shop</p>
                        <ul>
                            <li><Link to="/collections/roasted-beans" className="footer-links">Roasted Coffee</Link></li>
                            <li><Link to="/collections/green-beans" className="footer-links">Green Coffee</Link></li>
                        </ul>
                    </div>
                    <div id="footer-partnership" className="footer-listings"> 
                        <p>Partnership</p>
                        <ul>
                            <li><Link to="/pages/partnership" className="footer-links">Become an Affiliate</Link></li>
                        </ul>
                    </div>
                </div>
                <div id="rickshaw-roasters-copyright">
                        <p>© 2023 <Link to="/" className="footer-links">Rickshaw Roasters</Link>.</p>
                </div>
            </footer>
        );
    }
}

export default RickshawRoastersFooter;