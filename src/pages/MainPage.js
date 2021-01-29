import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../components/Header';
import Menu from '../components/Menu';
import ShowQuestions from '../components/ShowQuestions';
import CreateQuestions from '../components/CreateQuestions';
import PropTypes from "prop-types";

export default class MainPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeWindow: 'show', // show, create
      questionsList: [],
    }
  }

  static propTypes = {
    exit: PropTypes.func,
  }

  changeActiveWindowShow = () => {
    this.setState({activeWindow: 'show'});
  }

  changeActiveWindowCreate = () => {
    this.setState({activeWindow: 'create'});
  }

  addQuestion = (question, answer) => {
    const riddleObj = {
      id: this.state.questionsList.length,
      question,
      answer,
      correctAnswer: false,
      index: this.state.questionsList.length,
    }
    this.setState({
      questionsList: this.state.questionsList.concat(riddleObj),
    })
  }

  changeCorrectAnswer = (id) => {
    const questionsList = this.state.questionsList.slice();
    questionsList.find(x => x.id === id).correctAnswer = true;
    this.setState({questionsList: questionsList})
  }

  render() {
    return(
        <div className='main-page'>
          <Menu
              changeActiveWindowCreate={this.changeActiveWindowCreate}
              changeActiveWindowShow={this.changeActiveWindowShow}
              activeWindow={this.state.activeWindow}
          />
          <div className="main-content">
            <Header exit ={this.props.exit} />
            {this.state.activeWindow === 'show' ?
                <ShowQuestions
                    questionsList={this.state.questionsList}
                    changeCorrectAnswer={this.changeCorrectAnswer}
                /> :
                <CreateQuestions
                    addQuestion={this.addQuestion}
                />
            }
          </div>
        </div>
    )
  }
}
