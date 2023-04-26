import React from 'react';
import './RickshawRoastersLoginPage.css';
import { Link } from "react-router-dom";
import RickshawRoastersHeader from '../RickshawRoastersHeader';
import RickshawRoastersFooter from '../RickshawRoastersFooter';

class RickshawRoastersLoginPage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            email: "",
            password: ""
        }
        this.setValues = this.setValues.bind(this);
    }
    
    componentDidMount() {
        window.scrollTo(0, 0);
    }

    setValues(e){
        if(e.target.type === "email"){
            this.state.email = e.target.value;
        }
        else if(e.target.type === "password"){
            this.state.password = e.target.value;
        }
    }
    
    render(){
        return(
            <div id="RickshawRoastersLoginPage">
                <RickshawRoastersHeader/>
                <main id="login-page">
                    <div id="login-container">
                        <p id="login-heading">Login to your Account</p>
                        <form id="login-form">
                            <label for="customer-email" className="login-text-email">Email</label>
                            <input id="customer-email" type="email" className="login-input" onChange={this.setValues}></input>
                            <br/>
                            <label for="customer-password" className="login-text-password">Password</label>
                            <input id="customer-password" type="password" className="login-input" onChange={this.setValues}></input>
                            <br/>
                            <input id="sign-in-button" type="submit" value="Sign In" className="login-btns"></input>
                            <br/>
                            <Link to="/account/register" id="register-button" type="submit" className="login-btns">Create Account</Link>
                            <br/>
                            <Link to="/account/reset-password">Forgot Password?</Link>
                        </form>
                    </div>
                </main>
                <RickshawRoastersFooter/>
            </div>
        );
    }
}

export default RickshawRoastersLoginPage;