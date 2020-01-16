import React from 'react';
import NavBar from './components/NavBar'
import SplashPage from './components/SplashPage'
import Login from './components/Login'
import SignUp from './components/SignUp'
import Home from './components/Home'
import Profiles from './components/Profiles'
import Profile from './components/Profile'
import List from './components/List'
import NewList from './components/NewList'
import EditList from './components/EditList'

import { Route } from 'react-router-dom'


class App extends React.Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Route exact path="/" component={SplashPage} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/home" render={(routerProps) => <Home {...routerProps} />} />
        <Route exact path="/profiles" render={(routerProps) => <Profiles {...routerProps} />} />
        <Route exact path="/profiles/1" render={(routerProps) => <Profile {...routerProps} />} /> {/*need to put :id in here! */}
        <Route exact path="/profiles/1/list/1" render={(routerProps) => <List {...routerProps} />} /> {/*need to put two :ids in here! profile id and list id */}
        <Route exact path="/profiles/1/list/new" render={(routerProps) => <NewList {...routerProps} />} /> {/*need to put :id in here!  */}
        <Route exact path="/profiles/1/list/1/edit" render={(routerProps) => <EditList {...routerProps} />} /> {/*need to put two :ids in here! profile id and list id */}
      </div>
    );
  }
}

export default App;
