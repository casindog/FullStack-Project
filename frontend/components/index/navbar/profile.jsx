import React from 'react';

class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleSubmit(e) {
        e.preventDefault();
        this.props.logout();
        this.props.closeModal();
    }

    render () {
        return (
            <div>
                <div className='profile-first'>
                    <img className='profile-face' src="https://contestimg.wish.com/api/image/fetch?profile_image_name=NTYwNWMxYmEyMWE4NjMxNzk0ZTk1NDUy_1398450030237.jpg&w=50&h=50" alt=""/>
                    <div className='profile-email'>{this.props.email}</div>

                </div>

                <div className='profile-logout' onClick={this.handleSubmit}>
                    Sign Out
                </div>
            </div>
        )
    }
}

export default Profile