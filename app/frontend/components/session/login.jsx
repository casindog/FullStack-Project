import React from 'react';
import { NavLink } from 'react-router-dom';

class Login extends React.Component {
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
        this.props.login(this.state);
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

    render() {
        return (
            <div className='homepage'>
                Login

                {this.renderErrors()}
                
                <form>
                    <label>Email 
                        <input type="text" value={this.state.email} onChange={this.handleInput('email')} />
                    </label>
                    <label>Password
                        <input type="password" value={this.state.password} onChange={this.handleInput('password')} />
                    </label>
                    <button onClick={this.handleSubmit}>Login</button>
                </form>
                <NavLink to='/'>Back</NavLink>
            </div>
        )
    }
}

export default Login;