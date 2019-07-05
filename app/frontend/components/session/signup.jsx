import React from 'react';
import { NavLink } from 'react-router-dom';

class Signup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInput = this.handleInput.bind(this);
    }

    handleInput(type) {
        return (e) => {
            this.setState({ [type]: e.target.value })
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.createNewUser(this.state)
            // .then( () => this.props.history.push('/chirps'))
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
            <div className='homepage'>
                Sign Up

                {this.renderErrors()}
                
                <form>
                    <label>Email
                        <input type="text" value={this.state.email} onChange={this.handleInput('email')} />
                    </label>
                    <label>Password
                        <input type="password" value={this.state.password} onChange={this.handleInput('password')} />
                    </label>
                    <button onClick={this.handleSubmit}>Sign Up</button>
                </form>
                <NavLink to='/'>Back</NavLink>
            </div>
        )
    }
}

export default Signup;