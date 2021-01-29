import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from "prop-types";

export default class QuestionBlock extends React.Component {
  constructor(props) {
    super(props);

    this.inputRef = React.createRef();
  }

  static propTypes = {
    question: PropTypes.object,
    changeCorrectAnswer: PropTypes.func,
  }

  checkAnswer = () => {
    const userAnswer = this.inputRef.current.value;
    const correctAnswer = this.props.question.answer;
    const input = this.inputRef.current;

    if(userAnswer === correctAnswer) {
      const id = this.props.question.id;
      this.props.changeCorrectAnswer(id);
      input.classList.add('corrected-answer');
      input.setAttribute('disabled', '')
    }

    if(!input.classList.contains('corrected-answer')) {
      input.classList.add('error-answer');
    }
  }

  render() {
    return(
        <div className='questions-block'>
          <div className="questions-block__header">
            <span className='questions-block__count'>Вопрос №{this.props.question.index + 1}</span>
            <span className='questions-block__author'>Автор: Сафохин Артём</span>
          </div>

          <span className='questions-block__text'>{this.props.question.question}</span>
          {this.props.question.correctAnswer === false ?
            <div className='questions-block__answer'>
              <input
                type="text"
                placeholder='Введите ответ'
                ref={this.inputRef}
                />
              <button
                onClick={this.checkAnswer}
                >Ответить</button>
            </div> :
              <span
                style={{
                  color: 'green',
                }}
              >{this.props.question.answer}</span>
          }

        </div>
    )
  }
}
