import React from 'react';
import NavBar from './components/NavBar'
import SplashPage from './components/SplashPage'
import Login from './components/Login'
import SignUp from './components/SignUp'
import Home from './components/Home'
import ProfilesContainer from './containers/ProfilesContainer'
import ListShow from './components/ListShow'
import NewList from './components/NewList'
import EditList from './components/EditList'
import ProfilePage from './components/ProfilePage'

import { Route } from 'react-router-dom'


class App extends React.Component {

  state = {
    allProfiles: [],
    selectedProfile: ''
  }

  componentDidMount() {
    fetch ('http://localhost:3000/api/v1/profiles')
      .then(res => res.json())
      .then(profiles => {
        this.setState({
          allProfiles: profiles
        })
      })
  }
  
  render() {
    return (
      <div className="App">
        <NavBar />
        <Route exact path="/" component={SplashPage} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/home" render={(routerProps) => <Home {...routerProps} />} />
        <Route exact path="/profiles" render={(routerProps) => <ProfilesContainer {...routerProps} allProfiles={this.state.allProfiles} />} />
        <Route exact path="/profiles/:id" render={(routerProps) => <ProfilePage {...routerProps} allProfiles={this.state.allProfiles} />} />
        <Route exact path="/profiles/1/list/1" render={(routerProps) => <ListShow {...routerProps} />} /> {/*need to put two :ids in here! profile id and list id */}
        <Route exact path="/profiles/1/list/new" render={(routerProps) => <NewList {...routerProps} />} /> {/*need to put :id in here!  */}
        <Route exact path="/profiles/1/list/1/edit" render={(routerProps) => <EditList {...routerProps} />} /> {/*need to put two :ids in here! profile id and list id */}
      </div>
    );
  }
}

export default App;
