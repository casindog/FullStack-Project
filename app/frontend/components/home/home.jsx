import React from 'react';
import { NavLink } from 'react-router-dom';

class Home extends React.Component {
    render () {
        return (
        <div>
            <h1>Want</h1>
            <ul>
                <li><NavLink to="/login">Login</NavLink></li>
                <li><NavLink to="/signup">Signup</NavLink></li>
            </ul>
        </div>
        );
    };
};

export default Home; 