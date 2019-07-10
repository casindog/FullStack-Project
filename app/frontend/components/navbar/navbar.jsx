import React from 'react';
import ProfileModal from '../modal/profile_modal';
import ProfileNavBarContainer from './profile_container';



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
                            <input className='Nav-Search-Input'>

                            </input>

                            <div>
                                <a className='Nav-Search' href="#">Search</a>
                            </div>
                        </div>

                        {this.props.session_id === null ? (
                            <div>
                            </div>
                        ) : (
                            <div className='Nav-Right'>
             
                                <div className='Nav-portrait' onClick={() => this.props.openModal('profile')}>
                                    <ProfileModal/>
                                    <img className='Nav-portrait-img' src="https://contestimg.wish.com/api/image/fetch?profile_image_name=NTYwNWMxYmEyMWE4NjMxNzk0ZTk1NDUy_1398450030237.jpg&w=50&h=50" alt=""/>
                                    <div>    
                                        {this.props.email}
                                    </div>
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

                            </div>
                        )}

                    </div>
                </ul>
            </div>
        )
    }
}

export default NavBar;