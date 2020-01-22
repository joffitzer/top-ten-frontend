import React from 'react';
import Image from 'react-bootstrap/Image'

class ProfileCard extends React.Component {
    render() {

        return(
            <div onClick={() => this.props.selectProfile(this.props.profile.id)}>
                <Image  src={this.props.profile.imageUrl} roundedCircle width="200" height="200"/>
                <h3>Username: {this.props.profile.username}</h3>
                <h5>Name: {this.props.profile.name}</h5>
            </div> 
        )
    }
}

export default ProfileCard;