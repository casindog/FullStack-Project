import React from 'react';
import { Link, NavLink } from 'react-router-dom';

class SplashBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };

        this.toggle = true;
        this.swap = this.swap.bind(this);

        this.handleInputEmail = this.handleInputEmail.bind(this);
        this.handleInputPassword = this.handleInputPassword.bind(this);
        this.handleSubmitDemo = this.handleSubmitDemo.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        // if possible, i'd like to remove the 1st div container, then 
        // call the css animation @keyframes slideshow
    }

    handleInputEmail(e) {
        e.preventDefault();
        this.setState({ email: e.target.value })
    }
    handleInputPassword(e) {
        e.preventDefault();
        this.setState({ password: e.target.value })
    }

    handleSubmitDemo(e) {
        e.preventDefault();
        this.props.login({email: 'DEMO', password: 'password'});
    }

    handleSubmit(e) {
        e.preventDefault();
        if (this.toggle) {
            this.props.login(this.state);
        } else {
            this.props.createNewUser(this.state);
        };
    };

    renderErrors() {
        return(
            <ul>
                {this.props.errors.map((error,idx) => (
                    <li key={`error-${idx}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    };
    
    swap() {
        this.setState({ errors: [] });

        if (this.toggle) {
            this.toggle = false;
        } else {
            this.toggle = true;
        };
    };

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

        let productsCarousel = Object.values(this.props.products);
        
        productsCarousel = productsCarousel.map((product, idx) => {
            return (
                <div key={idx}>
                    <div className='splash-prices'>
                        <div className='splash-rotate-info-strike'>{product.original_price}</div>
                        {/* will have to dd discount price afterawrd */}
                        <div className='splash-rotate-info'>{product.original_price}</div>
                        <div className='splash-chevron'></div>
                    </div>
                    <img idx={idx} src={product.photoUrls} />
                </div>

            );
        });

        return (
            <div id="splash-box2">
                <div id='splash-rotate-ad'>
                    <div id="splash-wrapper-carousel">
                        {productsCarousel}
                    </div>
                </div>

                <div className='splash-login'>
                    <div className='splash-title'>
                        {msg}
                    </div>

                    <div className='splash-errors'>
                        {this.renderErrors()}
                    </div>

                    <div className='splash-input-wrapper'>
                        <input placeholder="Email Address" type="text" value={this.state.email} onChange={this.handleInputEmail} />
                        <input placeholder="Password" type="password" value={this.state.password} onChange={this.handleInputPassword} />
                        <button onClick={this.handleSubmit}>{msg}</button>
                        <button onClick={this.handleSubmitDemo}>Demo User</button>
                        <button id="splash-swap" onClick={this.swap}> {msg1}</button>
                    </div>
                </div>
            </div>
        )
    };
}

export default SplashBox;