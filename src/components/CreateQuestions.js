import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from "prop-types";

export default class CreateQuestions extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      questionValue: '',
      answerValue: '',
    }
  }


  static propTypes = {
    addQuestion: PropTypes.func,
  }

  addQuestion = () => {
    this.props.addQuestion(this.state.questionValue, this.state.answerValue);
    this.setState({
      questionValue: '',
      answerValue: '',
    })
  }

  changeQuestionValue = (event) => {
    this.setState({questionValue: event.target.value});
  }

  changeAnswerValue = (event) => {
    this.setState({answerValue: event.target.value});
  }

  render() {
    return(
        <div className='questions'>
          <input
              type="text"
              value={this.state.questionValue}
              onChange={this.changeQuestionValue}
              className='questions-input'
              placeholder='Введите свою загадку'
          />
          <input
              type="text"
              value={this.state.answerValue}
              onChange={this.changeAnswerValue}
              className='questions-input'
              placeholder='Введите ответ загадки'
          />
          <input
              type="button"
              className='questions-button'
              value='Отправить'
              onClick={this.addQuestion}
          />
        </div>
    )
  }
}
