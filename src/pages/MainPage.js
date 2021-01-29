import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from "prop-types";

import Header from '../components/Header';
import Menu from '../components/Menu';
import Profile from '../components/Profile';
import ShowQuestions from '../components/ShowQuestions';
import CreateQuestions from '../components/CreateQuestions';

export default class MainPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeWindow: 'show', // show, create, profile
    }
  }

  static propTypes = {
    exit: PropTypes.func,
    addQuestion: PropTypes.func,
    changeCorrectAnswer: PropTypes.func,
    user: PropTypes.object,
  }

  changeActiveWindowShow = () => {
    this.setState({activeWindow: 'show'});
  }

  changeActiveWindowCreate = () => {
    this.setState({activeWindow: 'create'});
  }

  changeActiveWindowProfile = () => {
    this.setState({activeWindow: 'profile'});
  }

  render() {
    return(
        <div className='main-page'>
          <Menu
              changeActiveWindowCreate={this.changeActiveWindowCreate}
              changeActiveWindowShow={this.changeActiveWindowShow}
              changeActiveWindowProfile={this.changeActiveWindowProfile}
              activeWindow={this.state.activeWindow}
          />
          <div className="main-content">
            <Header
                exit={this.props.exit}
                user={this.props.user}
                changeActiveWindowProfile={this.changeActiveWindowProfile}
            />
            {this.state.activeWindow === 'show' ?
                <ShowQuestions
                    changeCorrectAnswer={this.props.changeCorrectAnswer}
                /> : this.state.activeWindow === 'create' ?
                <CreateQuestions
                    addQuestion={this.props.addQuestion}
                    user={this.props.user}
                /> :
                <Profile
                    exit={this.props.exit}
                    user={this.props.user}
                />
            }
          </div>
        </div>
    )
  }
}
