import React from 'react';

class ProfileCard extends React.Component {
    render() {

        return(
            <div onClick={() => this.props.selectProfile(this.props.profile.id)}>
                ONE SINGLE Profile Card
                <h1>Name: {this.props.profile.name}</h1>
                <h1>Username: {this.props.profile.username}</h1>
            </div> 
        )
    }
}

export default ProfileCard;