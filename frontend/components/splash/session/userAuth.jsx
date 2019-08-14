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
            <div className='modal'>
                <div className='modal-rotate-ad'>
                    <div className='modal-prices'>
                        <div className='modal-rotate-info-strike'>$176</div>
                        <div className='modal-rotate-info'>$14</div>
                        <div className='modal-chevron'></div>
                    </div>
                    <img className='modal-rotate-img' src='https://contestimg.wish.com/api/webimage/58a69b26082573593316c166-large.jpg?cache_buster=a9f4cc067e7f45608a805ab881630886'/>
                </div>

                <div className='modal-login'>
                    <div className='modal-title'>
                        {msg}
                    </div>

                    <div className='modal-errors'>
                        {this.renderErrors()}
                    </div>

                    <form>
                        <div className='modal-form'> 
                            <div className='modal-input-wrapper'>
                                <label className='modal-label'>Email</label>
                                <input className='modal-inputs' type="text" value={this.state.email} onChange={this.handleInput('email')} />
                            </div>  

                            <div className='modal-input-wrapper'>
                                <label className='modal-label'>Password</label>
                                <input className='modal-inputs' type="password" value={this.state.password} onChange={this.handleInput('password')} />
                            </div>
                        </div>
                    </form>

                    <div className='modal-buttons'>
                        <button className='modal-submit' onClick={this.handleSubmit}>{msg}</button>
                        <button className='modal-submit' onClick={this.handleSubmitDemo}>Demo User</button>
                    </div>

                    <div className='modal-msg'>
                        <a href='#' onClick={this.swap}> {msg1}</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default UserAuth;