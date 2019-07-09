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
                <div>
                    Img + Username/Email
                </div>

                <div>
                    <button onClick={this.handleSubmit}>Sign Out</button>
                </div>
            </div>
        )
    }
}

export default Profile