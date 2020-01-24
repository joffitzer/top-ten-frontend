import React from 'react';
import Image from 'react-bootstrap/Image'


class ProfilePage extends React.Component {

    // state = {
    //     profile: null
    // }

    renderProfileInfo = (selectedProfile) => {
        return(
            <div>
                 <Image  src={selectedProfile.imageUrl} roundedCircle width="200" height="200"/>
                <h1>{selectedProfile.name}</h1>
                <h5>Username: {selectedProfile.username}</h5>
            </div>
        )
    }

    render() {

        // console.log('profile page props :', this.props)

        let profileId = this.props.match.params.id
        let selectedProfile = this.props.allProfiles.find(profile => profile.id === parseInt(profileId) )

        return(
            <div>
                {selectedProfile && this.renderProfileInfo(selectedProfile)}
            </div>
        )
    }
}

export default ProfilePage;