import React from 'react';

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

                        <div className='Nav-Right-items'>
                            <a href="#">Profile</a>
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

                        {/* add a ternary to show sign out when logged in */}
                        {/* can't read session. because there is no state */}

                        {this.props.session_id === null ? (
                            // that's a bit annoying. i have to use one div, so now everything is nested inside another div
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
                                <button onClick={this.handleSubmit}>Sign Out</button>
                            </div>
                        )}

                    </div>
                </ul>
            </div>
        )
    }
}

export default NavBar;