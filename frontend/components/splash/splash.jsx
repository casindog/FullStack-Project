import React from 'react';
import { Link, NavLink, Redirect } from 'react-router-dom';
import UserAuthContainer from './session/userAuthContainer';

class Splash extends React.Component {
    constructor(props) {
        super(props);
        this.toggle = true;
    }

    render () {
        return (
            <div className='homepage'>
                <div>
                    <UserAuthContainer /> 
                </div>
            </div>
        );
    };
};

export default Splash; 