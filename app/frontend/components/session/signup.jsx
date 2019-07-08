import React from 'react';
import { Link, NavLink } from 'react-router-dom';

class Signup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };

        this.handleSubmitDemo = this.handleSubmitDemo.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInput = this.handleInput.bind(this);
    }

    handleInput(type) {
        return (e) => {
            this.setState({ [type]: e.target.value })
        }
    }

    handleSubmitDemo(e) {
        e.preventDefault();

        // wait, i don't understand how this works. 
        this.props.login({email:'username', password:'password'});
        this.props.login(this.state);

    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.createNewUser(this.state);
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

    render () {
        return (
            <div className='modal'>
                <div className='modal-rotate-ad'>
                    Rotating Ad space
                </div>

                <div className='modal-login'>
                    <div className='modal-title'>
                        Sign up to browse products!
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
                        
                        <button className='modal-submit' onClick={this.handleSubmit}>Sign Up</button>
                        <button className='modal-submit' onClick={this.handleSubmitDemo}>Demo User</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default Signup;