import React from 'react';
import './GreenCoffeeMainPage.css';
import { Link } from "react-router-dom";
import RickshawRoastersHeader from '../RickshawRoastersHeader';
import RickshawRoastersFooter from '../RickshawRoastersFooter';

class GreenCoffeeMainPage extends React.Component{
    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render(){
        return(
            <div id="GreenCoffeeMainPage">
                <RickshawRoastersHeader/>
                <div>

                </div>
                <RickshawRoastersFooter/>
            </div>
        );
    }
}

export default GreenCoffeeMainPage;