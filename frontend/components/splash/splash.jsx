import React from 'react';
import UserAuthContainer from './userAuth/userAuthContainer';

class Splash extends React.Component {
    constructor(props) {
        super(props);
    }

    render () {
        return (
            <div className='splash'>
                <UserAuthContainer /> 
            </div>
        );
    };
};

export default Splash; 