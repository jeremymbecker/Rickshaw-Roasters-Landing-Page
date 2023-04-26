import React from 'react';
import './RoastedCoffeeMainPage.css';
import { Link } from "react-router-dom";
import RickshawRoastersHeader from '../RickshawRoastersHeader';
import RickshawRoastersFooter from '../RickshawRoastersFooter';

class RoastedCoffeeMainPage extends React.Component{
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

export default RoastedCoffeeMainPage;