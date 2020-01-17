import React from 'react';
import Profile from './ProfileCard'

class Profiles extends React.Component {

    selectProfile = (id) => {
        this.props.history.push(`/profiles/${id}`)
    }

    render() {

        let profilesArray = this.props.allProfiles.map(profileObj => {
            return <Profile profile={profileObj} key={profileObj.id}/>
        })

        return(
            <div>ALLLLLL Profiles
                {profilesArray}
            </div>
        )
    }
}

export default Profiles;