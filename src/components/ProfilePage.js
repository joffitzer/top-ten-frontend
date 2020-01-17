import React from 'react';

class ProfilePage extends React.Component {

    // state = {
    //     profile: null
    // }

    renderProfileInfo = (selectedProfile) => {
        return(
            <div>
                ONE SINGLE Profile Show Page
                <h1>This is the profile page for: {selectedProfile.name}</h1>
                <h1>Username: {selectedProfile.username}</h1>
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