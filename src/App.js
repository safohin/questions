import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Auth from './pages/Auth';
import MainPage from './pages/MainPage';
import './style/index.scss';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      auth: false,
      questionsList: [],
      user: {},
    }
  }
  componentDidMount() {
    let obj = {
      login: 'admin',
      password: 'admin',
      userName: 'Safohin',
      questionsList: [],
    }

    const oldUser = JSON.parse(localStorage.getItem('user'));
    if(!oldUser) {
      localStorage.setItem('user', JSON.stringify(obj));
    } else {
      obj = oldUser;
    }

    this.setState({user: obj})
  }

  exit = () => {
    this.setState({auth: false});
  }

  get user() {
    const user = JSON.parse(localStorage.getItem('user'));
    return user;
  }

  isAuthorization  = (login, password) => {
    const user = this.user;

    if(user.login === login && user.password === password) {
      this.setState({auth : true})
    }
  }

  addQuestion = (item) => {
    console.log(item)
    const user = JSON.parse(localStorage.getItem('user'));
    const questionsList = user.questionsList;
    item.id = questionsList.length;
    item.index = questionsList.length;
    questionsList.push(item)
    localStorage.setItem('user', JSON.stringify(user));
  }

  changeCorrectAnswer = (id) => {
    const user = JSON.parse(localStorage.getItem('user'));
    const questionsList = user.questionsList;

    questionsList.find(x => x.id === id).correctAnswer = true;
    localStorage.setItem('user', JSON.stringify(user));
  }

  render() {
    return (
        <div className='App'>
          <Switch>
            <Route path='/' component={() => <Auth isAuthorization={this.isAuthorization} />} exact />
            <Route path="/public" render={() => this.state.auth ? (
                <MainPage
                    exit={this.exit}
                    addQuestion={this.addQuestion}
                    changeCorrectAnswer={this.changeCorrectAnswer}
                    user={this.state.user}
                />
                ) : (<Redirect to={{pathname: "/"}}/>)}/>
          </Switch>
        </div>
    );
  }


}
