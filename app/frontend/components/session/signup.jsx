import React from 'react';

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

    render () {
        return (
            <div>
                Sign Up
                <form>
                    <input type="text" value={this.state.email} onChange={this.handleInput('email')} />
                    <input type="password" value={this.state.password} onChange={this.handleInput('password')} />
                    <button onClick={this.handleSubmit}>Sign Up</button>
                </form>
            </div>
        )
    }
}

export default Signup;