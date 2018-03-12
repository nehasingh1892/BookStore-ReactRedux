import React, { Component } from 'react';
import '../css/login.css';
import avatar_image from '../img/login_img.jpeg';
import Book from './Book';

class Login extends Component {
    constructor(props) {
        super(props);


        this.state = {
            user_name: '',
            user_pwd: '',
        };

        this.LoginTodashboard = this.LoginTodashboard.bind(this);
    }



    LoginTodashboard(){
        let user_obj = {
            username:this.state.user_name,
            userpwd: this.state.user_pwd,
        }

        if (user_obj.username == "" || user_obj.userpwd == "") {
            alert("Please enter all the fields");
        }
        else {

            window.location.assign("#/Book");

        }

    }

    render(){
        return (
            <div className="profile profile--open">
                <button className="profile__avatar" id="toggleProfile">
                    <img src={avatar_image} alt="Avatar"/>
                </button>
                <div className="profile__form">
                    <div className="profile__fields">
                        <div className="field">
                            <label for="fieldUser" className="label">Username</label>
                            <input type="text" id="fieldUser" className="input" value={this.state.user_name}
                                   onChange={event => this.setState({user_name: event.target.value})}/>

                        </div>
                        <div className="field">
                            <label for="fieldPassword" className="label">Password</label>
                            <input type="password" id="fieldPassword" required className="input" value={this.state.user_pwd}
                                   onChange={event => this.setState({user_pwd: event.target.pwd})}/>

                        </div>
                        <div className="profile__footer">
                            <button type="button"
                                    onClick={() => (this.LoginTodashboard()) }
                                    className="btn btn-info t">
                                LOGIN
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;


