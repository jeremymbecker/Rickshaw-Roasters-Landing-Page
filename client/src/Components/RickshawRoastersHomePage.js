import React from 'react';
import './RickshawRoastersHomePage.css';
import { Link } from "react-router-dom";
import RickshawRoastersHeader from './RickshawRoastersHeader';
import RickshawRoastersFooter from './RickshawRoastersFooter';

class RickshawRoastersHomePage extends React.Component{
    render() {
        return(
            <div id="RickshawRoastersHomePage">
                <RickshawRoastersHeader />
                <main id="home-page">
                    <section id="shop-section">
                        <div id="shop-row">
                            <div id="green-beans-tile" className="tile">
                                <Link to="/collections/green-beans" className="shop-links">
                                    <img className="coffee-beans-image-sizing" src="https://www.kaffebox.no/wp-content/uploads/2022/10/green-coffee-roast.jpg" loading="lazy" alt="Green Coffee Beans"></img>
                                    <p id="green-coffee-beans-text">Green Coffee Beans</p>
                                </Link>
                            </div>
                            <div id="roasted-beans-tile" className="tile">
                                <Link to="/collections/roasted-beans" className="shop-links">
                                    <img className="coffee-beans-image-sizing" src="https://images.pexels.com/photos/4085294/pexels-photo-4085294.jpeg" loading="lazy" alt="Roasted Coffee Beans"></img>
                                    <p id="roasted-coffee-beans-text">Roasted Coffee Beans</p>
                                </Link>
                            </div>
                        </div>
                    </section>
                    <section id="our-story-section">
                        <div id="our-story-background">
                            <img id="our-story-background-image" src="https://nature-sante.fr/charte/1.jpg" loading="lazy" alt="Coffee Beans"></img>
                            <p id="our-story-text-1">ARTISAN ✘ ROASTED</p>
                            <p id="our-story-text-2">We pride ourselves in delivering the freshest and ecologically sourced coffee in the market.</p>
                            <Link to="/pages/our-story" id="our-story-button">OUR STORY</Link>
                        </div>
                    </section>
                    <section id="locations-section">
                        <p id="locations-heading">Locations</p>
                        <div id="locations-grid">
                            <div className="locations-tile">
                                <Link to="https://goo.gl/maps/ef3tXwQNQ9hGVfHT7" className="locations-links">
                                    <img src="https://jeremymbeckerbucket.s3.us-west-1.amazonaws.com/Locations/los-angeles-downtown-sunset-beautiful-skyline-palm-trees-foreground-94822572_380x380.jpg" loading="lazy" alt="Downtown Los Angeles"></img>
                                    <p className="locations-text">Los Angeles, CA</p>
                                </Link>
                            </div>
                            <div className="locations-tile">
                                <Link to="https://goo.gl/maps/PoQUNP3Ly2Zo37vd9" className="locations-links">
                                    <img src="https://jeremymbeckerbucket.s3.us-west-1.amazonaws.com/Locations/golden-gate-bridge-detailpage-hero_380x380.jpg" loading="lazy" alt="San Francisco Golden Gate Bridge"></img>
                                    <p className="locations-text">San Franciso, CA</p>
                                </Link>
                            </div>
                            <div className="locations-tile">
                                <Link to="https://goo.gl/maps/mAp2iDGTeRkQwHMD9" className="locations-links">
                                    <img src="https://jeremymbeckerbucket.s3.us-west-1.amazonaws.com/Locations/Untitled-400-x-300-px-500-x-400-px-11_380x380.jpg" loading="lazy" alt="Downtown Seattle"></img>
                                    <p className="locations-text">Seattle, WA</p>
                                </Link>
                            </div>                            
                            <div className="locations-tile">
                                <Link to="https://goo.gl/maps/8QQbRXWt7VofJPvX6" className="locations-links">
                                    <img src="https://jeremymbeckerbucket.s3.us-west-1.amazonaws.com/Locations/Phoenix-cityscape_de6e87fb6cf51aac24f471a488a0d1c5_380x380.jpg" loading="lazy" alt="Downtown Phoenix"></img>
                                    <p className="locations-text">Phoenix, AZ</p>
                                </Link>
                            </div>
                            <div className="locations-tile">
                                <Link to="https://goo.gl/maps/ibFTJ7WXiQjkjpFB9" className="locations-links">
                                    <img src="https://jeremymbeckerbucket.s3.us-west-1.amazonaws.com/Locations/View_of_Dallas_from_Reunion_Tower_August_2015_13_380x380.jpg" loading="lazy" alt="Downtown Dallas"></img>
                                    <p className="locations-text">Dallas, TX</p>
                                </Link>
                            </div>
                            <div className="locations-tile">
                                <Link to="https://goo.gl/maps/vbUcu2fU2oJj4t2t7" className="locations-links">
                                    <img src="https://jeremymbeckerbucket.s3.us-west-1.amazonaws.com/Locations/Las_Vegas_380x380.jpg" loading="lazy" alt="Downtown Las Vegas"></img>
                                    <p className="locations-text">Las Vegas, NV</p>
                                </Link>
                            </div>    
                        </div>
                    </section>
                </main>
                <RickshawRoastersFooter/>
            </div>
        );
    }
}

export default RickshawRoastersHomePage;