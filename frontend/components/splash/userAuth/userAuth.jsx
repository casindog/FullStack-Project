import React from 'react';
import { Link, NavLink } from 'react-router-dom';

class UserAuth extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
        this.toggle = true;

        this.handleSubmitDemo = this.handleSubmitDemo.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInput = this.handleInput.bind(this);
        this.swap = this.swap.bind(this)
    }

    handleInput(type) {
        return (e) => {
            this.setState({ [type]: e.target.value })
        }
    }

    handleSubmitDemo(e) {
        e.preventDefault();
        this.props.login({email: 'DEMO', password: 'password'})
    }

    handleSubmit(e) {
        e.preventDefault();
        if (this.toggle) {
            this.props.login(this.state);
        } else {
            this.props.createNewUser(this.state);
        }

    }

    renderErrors() {
        return(
            <ul>
                {this.props.errors.map((error,idx) => (
                    <li key={`error-${idx}`}>
                        {error}
                    </li>
                ))}
            </ul>
        )
    }
    
    swap() {
        this.setState({ errors: [] });

        if (this.toggle) {
            this.toggle = false;
        } else {
            this.toggle = true;
        }
    }

    render() {
        let msg;
        let msg1;
        if (this.toggle) {
            msg = "Login";
            msg1 = "New to Wish? Sign up"
        } else {
            msg = "Sign up";
            msg1 = "Have an account? Log in" 
        }

        return (
            <div className='splash-box'>
                <div className='splash-rotate-ad'>
                    <div className='splash-prices'>
                        <div className='splash-rotate-info-strike'>$176</div>
                        <div className='splash-rotate-info'>$14</div>
                        <div className='splash-chevron'></div>
                    </div>
                    <img src='https://contestimg.wish.com/api/webimage/58a69b26082573593316c166-large.jpg?cache_buster=a9f4cc067e7f45608a805ab881630886'/>
                </div>

                <div className='splash-login'>
                    <div className='splash-title'>
                        {msg}
                    </div>

                    <div className='splash-errors'>
                        {this.renderErrors()}
                    </div>

                    <div className='splash-input-wrapper'>
                        <input placeholder="Email Address" type="text" value={this.state.email} onChange={this.handleInput('email')} />
                        <input placeholder="Password" type="password" value={this.state.password} onChange={this.handleInput('password')} />
                        <button onClick={this.handleSubmit}>{msg}</button>
                        <button onClick={this.handleSubmitDemo}>Demo User</button>
                        <button id="splash-swap" onClick={this.swap}> {msg1}</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default UserAuth;