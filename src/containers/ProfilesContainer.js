import React from 'react';
import ProfileCard from '../components/ProfileCard'
import { Route } from 'react-router-dom'

class ProfilesContainer extends React.Component {

    selectProfile = (id) => {
        return this.props.history.push(`/profiles/${id}`)
    }

    render() {

        let profilesArray = this.props.allProfiles.map(profileObj => {
            return <ProfileCard profile={profileObj} selectProfile={this.selectProfile} key={profileObj.id}/>
        })

        return(
            <div>
                <Route exact path='/profiles' render={() => profilesArray} />
            </div>
        )
    }
}

// (routerProps) => <ProfilePage {...routerProps} profiles={this.props.allProfiles} />

export default ProfilesContainer;

//this was below the other exact path but doesn't see mlike we need it 
/* <Route path="/profiles/:id" render={profilesArray} /> */
