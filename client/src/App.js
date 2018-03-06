import React, { Component } from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import GetPage from './Components/GetPage';
import HomePage from './Pages/HomePage';
import AdminView from './Pages/AdminView';
import Auth from './Modules/Auth';
import HttpsRedirect from 'react-https-redirect';
injectTapEventPlugin();

class App extends Component {
  state = {
    isAuthenticated: false,
  }
  componentDidMount() {
    this.userAuthChanged();
  }

  userAuthChanged = () => {
    this.setState({ isAuthenticated: Auth.isUserAuthenticated() })
  }

  render() {
    return (
      <HttpsRedirect>
        <Router>
          <Switch>
            <Base 
              isAuthenticated={ this.state.isAuthenticated }
              userAuthChanged={this.userAuthChanged } >
              <Route exact path='/' component={ HomePage } />
              <Route exact path='/login' render={ ()=> <AdminView isAuthenticated={this.state.isAuthenticated } 
                                                                  userAuthChanged={this.userAuthChanged }/>} />
            </Base>
          </Switch>
        </Router>
      </HttpsRedirect>
    );
  }
}

export default App;
