import React, {useState} from 'react';
import './RickshawRoastersRegisterPage.css';
import { Link } from "react-router-dom";
import RickshawRoastersHeader from '../RickshawRoastersHeader';
import RickshawRoastersFooter from '../RickshawRoastersFooter';
import axios from 'axios';

class RickshawRoastersRegisterPage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            email: "",
            password: ""
        }
        this.setValues = this.setValues.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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

    async handleSubmit(e){
        e.preventDefault();
        try{
            const { data } = await axios.post("//localhost:4000/register", {
                email: this.state.email,
                password: this.state.password
             },
             { withCredentials: true }
            );
            if (data) {
                if (data.errors) {
                  const { email, password } = data.errors;
                  
                } else {
                  //useNavigate("/");
                }
              }
        }
        catch(err){
            console.log(err);
        }
    }

    render(){
        return(
            <div id="RickshawRoastersRegisterPage">
                <RickshawRoastersHeader/>
                <main id="register-page">
                    <div id="register-container">
                        <p id="register-heading">Create an Account</p>
                        <form id="register-form" onSubmit={this.handleSubmit}>
                            <label htmlFor="customer-email" className="register-text-email">Email</label>
                            <input id="customer-email" type="email" className="register-input" onChange={this.setValues}></input>
                            <br/>
                            <label htmlFor="customer-password" className="register-text-password">Password</label>
                            <input id="customer-password" type="password" className="register-input" onChange={this.setValues}></input>
                            <br/>
                            <input id="create-account-button" type="submit" value="Create Account" className="register-btns"></input>
                            <br/>
                            <p>Already have an account? <Link to="/account/login">Login</Link></p>
                        </form>
                    </div>
                </main>
                <RickshawRoastersFooter/>
            </div>
        );
    }
}

export default RickshawRoastersRegisterPage;