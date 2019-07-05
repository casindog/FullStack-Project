import React from 'react';
import { Link, NavLink, Redirect } from 'react-router-dom';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmitDemo = this.handleSubmitDemo.bind(this);
    }
    handleSubmitDemo(e) {
        e.preventDefault();
        this.props.login({email:'username', password:'password'});
    }

    render () {
        return (
        <div className='homepage'>
            Sign up to browse products!
                <NavLink to="/signup">Sign up with Email</NavLink>
                <NavLink to="/login">Login</NavLink>
                <form>
                    <Link onClick={this.handleSubmitDemo} to="/index">Demo user</Link>
                    {/* <button onClick={this.handleSubmitDemo}>Demo User</button> */}
                </form>
        </div>
        );
    };
};

export default Home; 