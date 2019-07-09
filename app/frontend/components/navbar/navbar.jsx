import React from 'react';
import ProfileContainer from './profile';

class NavBar extends React.Component {
    constructor (props) {
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleSubmit(e) {
        e.preventDefault();
        this.props.logout()
    }

    render () {
        // debugger
        return(
            <div >
                <ul className="Navbar">
                    <div className='Nav-Left'>
                        <div className='Nav-Left-items'>
                            <a href="#">Want</a>
                        </div>
                    </div>

                    <div className='Nav-Right'>
                        <div className='Nav-Right-items'>
                            <a href="#">Search</a>
                        </div>

                        {this.props.session_id === null ? (
                            <div>
                            </div>
                        ) : (
                            <div className='Nav-Right'>
                                <div className='Nav-Right-items'>
                                    <a href="#" onClick={() => this.props.openModal('profile')}>{this.props.email}</a>
                                </div>

                                <div className='Nav-Right-items'>
                                    <a href="#">Notification</a>
                                </div>

                                <div className='Nav-Right-items'>
                                    <a href="#">Cart</a>
                                </div>

                                <div className='Nav-Right-items'>
                                    <a href="#">WishList</a>
                                </div>
                            </div>
                        )}

                        {this.props.session_id === null ? (
                            <div className='Nav-Right'>
                                <div className='Nav-Right-items'>
                                    <button onClick={() => this.props.openModal('signup')}>Sign up with Email</button>
                                </div>

                                <div className='Nav-Right-items'>
                                    <button onClick={() => this.props.openModal('login')}>Login</button>
                                </div>
                            </div>
                        ) : (
                            <div className='Nav-Right-items'>
                                {/* <button onClick={this.handleSubmit}>Sign Out</button> */}
                            </div>
                        )}

                    </div>
                </ul>
            </div>
        )
    }
}

export default NavBar;