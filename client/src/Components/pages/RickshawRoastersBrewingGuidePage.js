import React from 'react';
import './RickshawRoastersBrewingGuidePage.css';
import { Link } from "react-router-dom";
import RickshawRoastersHeader from '../RickshawRoastersHeader';
import RickshawRoastersFooter from '../RickshawRoastersFooter';

class RickshawRoastersBrewingGuidePage extends React.Component{
    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render(){
        return(
            <div id="RoastedCoffeeMainPage">
                <RickshawRoastersHeader/>
                <div>

                </div>
                <RickshawRoastersFooter/>
            </div>
        );
    }
}

export default RickshawRoastersBrewingGuidePage;