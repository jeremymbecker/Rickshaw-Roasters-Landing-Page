import React from 'react';
import './RickshawRoastersResetPasswordPage.css';
import { Link } from "react-router-dom";
import RickshawRoastersHeader from '../RickshawRoastersHeader';
import RickshawRoastersFooter from '../RickshawRoastersFooter';

class RickshawRoastersResetPasswordPage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            email: ""
        }
        this.setValues = this.setValues.bind(this);
    }
    
    componentDidMount() {
        window.scrollTo(0, 0);
    }

    setValues(e){
        this.state.email = e.target.value;
    }

    render(){
        return(
            <div id="RickshawRoastersResetPasswordPage">
                <RickshawRoastersHeader/>
                <main id="reset-password-page">
                    <div id="reset-password-container">
                        <p id="reset-password-heading">Reset Password</p>
                        <form id="reset-password-form">
                            <label for="customer-email" className="reset-password-text-email">Email</label>
                            <input id="customer-email" type="email" className="reset-password-input" onChange={this.setValues}></input>
                            <br/>
                            <input id="reset-password-button" type="submit" value="Submit" className="reset-password-btns"></input>
                            <br/>
                            <Link to="/account/login">Cancel</Link>
                        </form>
                    </div>
                </main>
                <RickshawRoastersFooter/>
            </div>
        );
    }
}

export default RickshawRoastersResetPasswordPage;