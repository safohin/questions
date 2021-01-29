import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Auth from './pages/Auth';
import MainPage from './pages/MainPage';
import './style/index.scss';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      auth: false
    }
  }
  componentDidMount() {
    const obj = {
      login: 'admin',
      password: 'admin',
    }
    sessionStorage.setItem('user', JSON.stringify(obj));
  }

  exit = () => {
    sessionStorage.removeItem('user');
    this.setState({auth: false});
  }

  isAuthorization  = (login, password) => {
    const user = JSON.parse(sessionStorage.getItem('user'));

    if(user.login === login && user.password === password) {
      this.setState({auth : true})
    }
  }

  render() {
    return (
        <div className='App'>
          <Switch>
            <Route path='/' component={() => <Auth isAuthorization={this.isAuthorization} />} exact />
            <Route path="/public" render={() => this.state.auth ? (<MainPage exit={this.exit}/>) : (<Redirect to={{pathname: "/"}}/>)}/>
          </Switch>
        </div>
    );
  }


}
