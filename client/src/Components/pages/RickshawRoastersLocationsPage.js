import React from 'react';
import './RickshawRoastersLocationsPage.css';
import { Link } from "react-router-dom";
import RickshawRoastersHeader from '../RickshawRoastersHeader';
import RickshawRoastersFooter from '../RickshawRoastersFooter';

class RickshawRoastersLocationsPage extends React.Component{
    componentDidMount() {
        window.scrollTo(0, 0);
    }
    
    render(){
        return(
            <div id="RickshawRoastersLocationsPage">
                <RickshawRoastersHeader />
                <main id="locations-page">
                    <div id="locations-page-grid">
                        <div className="locations-page-block">
                            <div className="locations-page-tile">
                                <a href="https://goo.gl/maps/ef3tXwQNQ9hGVfHT7" className="locations-page-links">
                                    <img src="https://jeremymbeckerbucket.s3.us-west-1.amazonaws.com/Locations/los-angeles-downtown-sunset-beautiful-skyline-palm-trees-foreground-94822572_1_500x500.jpg" loading="lazy" alt="Downtown Los Angeles"></img>
                                    <p className="locations-city-text">Los Angeles, CA</p>
                                </a>
                            </div>
                            <div className="locations-page-addresses">
                                <div className="locations-page-address">
                                    <a href="https://goo.gl/maps/ef3tXwQNQ9hGVfHT7" className="locations-page-address-links">350 S. Grand Ave, Los Angeles, CA 90071</a>
                                </div>
                                <div className="locations-page-hours">
                                    <br />
                                    <p>Hours</p>
                                    <p>Monday - Saturday: 6:00am - 10:00pm</p>
                                    <p>Sunday 8:00am - 8:00pm</p>
                                    <br/>
                                </div>
                                <div className="locations-page-phone-number">
                                    <a href="tel:213XXXXXXX" className="locations-page-phone-number-links">Call (213) XXX-XXXX</a>
                                </div>
                            </div>
                        </div>
                        <div className="locations-page-block">
                            <div className="locations-page-tile">
                                <Link to="https://goo.gl/maps/PoQUNP3Ly2Zo37vd9" className="locations-page-links">
                                    <img src="https://jeremymbeckerbucket.s3.us-west-1.amazonaws.com/Locations/golden-gate-bridge-detailpage-hero_500x500.jpg" loading="lazy" alt="San Francisco Golden Gate Bridge"></img>
                                    <p className="locations-city-text">San Franciso, CA</p>
                                </Link>
                            </div>
                            <div className="locations-page-addresses">
                                <div className="locations-page-address">
                                    <a href="https://goo.gl/maps/PoQUNP3Ly2Zo37vd9" className="locations-page-address-links">3595 California St, San Francisco, CA 94118</a>
                                </div>
                                <div className="locations-page-hours">
                                    <br />
                                    <p>Hours</p>
                                    <p>Monday - Saturday: 6:00am - 10:00pm</p>
                                    <p>Sunday 8:00am - 8:00pm</p>
                                    <br/>
                                </div>
                                <div className="locations-page-phone-number">
                                    <a href="tel:415XXXXXXX" className="locations-page-phone-number-links">Call (415) XXX-XXXX</a>
                                </div>
                            </div>
                        </div>
                        <div className="locations-page-block">
                            <div className="locations-page-tile">
                                <Link to="https://goo.gl/maps/mAp2iDGTeRkQwHMD9" className="locations-page-links">
                                    <img src="https://jeremymbeckerbucket.s3.us-west-1.amazonaws.com/Locations/Untitled-400-x-300-px-500-x-400-px-11_500x500.jpg" loading="lazy" alt="Downtown Seattle"></img>
                                    <p className="locations-city-text">Seattle, WA</p>
                                </Link>
                            </div>         
                            <div className="locations-page-addresses"> 
                                <div className="locations-page-address">
                                    <a href="https://goo.gl/maps/mAp2iDGTeRkQwHMD9" className="locations-page-address-links">305 Harrison St Suite 220, Seattle, WA 98109</a>
                                </div>
                                <div className="locations-page-hours">
                                    <br />
                                    <p>Hours</p>
                                    <p>Monday - Saturday: 6:00am - 10:00pm</p>
                                    <p>Sunday 8:00am - 8:00pm</p>
                                    <br/>
                                </div>
                                <div className="locations-page-phone-number">
                                    <a href="tel:206XXXXXXX" className="locations-page-phone-number-links">Call (206) XXX-XXXX</a>
                                </div>
                            </div>
                        </div>
                        <div className="locations-page-block">
                            <div className="locations-page-tile">
                                <Link to="https://goo.gl/maps/8QQbRXWt7VofJPvX6" className="locations-page-links">
                                    <img src="https://jeremymbeckerbucket.s3.us-west-1.amazonaws.com/Locations/Phoenix-cityscape_de6e87fb6cf51aac24f471a488a0d1c5_500x500.jpg" loading="lazy" alt="Downtown Phoenix"></img>
                                    <p className="locations-city-text">Phoenix, AZ</p>
                                </Link>
                            </div>      
                            <div className="locations-page-addresses">
                                <div className="locations-page-address">
                                    <a href="https://goo.gl/maps/8QQbRXWt7VofJPvX6" className="locations-page-address-links">111 3rd St., Phoenix, AZ 85004</a>
                                </div>
                                <div className="locations-page-hours">
                                    <br />
                                    <p>Hours</p>
                                    <p>Monday - Saturday: 6:00am - 10:00pm</p>
                                    <p>Sunday 8:00am - 8:00pm</p>
                                    <br/>
                                </div>
                                <div className="locations-page-phone-number">
                                    <a href="tel:602XXXXXXX" className="locations-page-phone-number-links">Call (602) XXX-XXXX</a>
                                </div>
                            </div>
                        </div>              
                        <div className="locations-page-block">
                            <div className="locations-page-tile">
                                <Link to="https://goo.gl/maps/ibFTJ7WXiQjkjpFB9" className="locations-page-links">
                                    <img src="https://jeremymbeckerbucket.s3.us-west-1.amazonaws.com/Locations/View_of_Dallas_from_Reunion_Tower_August_2015_13_500x500.jpg" loading="lazy" alt="Downtown Dallas"></img>
                                    <p className="locations-city-text">Dallas, TX</p>
                                </Link>
                            </div>    
                            <div className="locations-page-addresses">
                                <div className="locations-page-address">
                                    <a href="https://goo.gl/maps/ibFTJ7WXiQjkjpFB9" className="locations-page-address-links">208 S Akard St, Dallas, TX 75202</a>
                                </div>
                                <div className="locations-page-hours">
                                    <br />
                                    <p>Hours</p>
                                    <p>Monday - Saturday: 6:00am - 10:00pm</p>
                                    <p>Sunday 8:00am - 8:00pm</p>
                                    <br/>
                                </div>
                                <div className="locations-page-phone-number">
                                    <a href="tel:214XXXXXXX" className="locations-page-phone-number-links">Call (214) XXX-XXXX</a>
                                </div>
                            </div>
                        </div>        
                        <div className="locations-page-block">
                            <div className="locations-page-tile">
                                <Link to="https://goo.gl/maps/vbUcu2fU2oJj4t2t7" className="locations-page-links">
                                    <img src="https://jeremymbeckerbucket.s3.us-west-1.amazonaws.com/Locations/Las_Vegas_500x500.jpg" loading="lazy" alt="Downtown Las Vegas"></img>
                                    <p className="locations-city-text">Las Vegas, NV</p>
                                </Link>
                            </div>    
                            <div className="locations-page-addresses">
                                <div className="locations-page-address">
                                    <a href="https://goo.gl/maps/vbUcu2fU2oJj4t2t7" className="locations-page-address-links">3770 S Las Vegas Blvd, Las Vegas, NV 89109</a>
                                </div>
                                <div className="locations-page-hours">
                                    <br />
                                    <p>Hours</p>
                                    <p>Monday - Saturday: 6:00am - 10:00pm</p>
                                    <p>Sunday 8:00am - 8:00pm</p>
                                    <br/>
                                </div>
                                <div className="locations-page-phone-number">
                                    <a href="tel:702XXXXXXX" className="locations-page-phone-number-links">Call (702) XXX-XXXX</a>
                                </div>
                            </div>
                        </div>       
                    </div>
                </main>
                <RickshawRoastersFooter />
            </div>
        );
    }
}

export default RickshawRoastersLocationsPage;