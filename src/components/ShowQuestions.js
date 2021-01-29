import React from 'react';
import ReactDOM from 'react-dom';
import QuestionBlock from './QuestionBlock';
import PropTypes from "prop-types";

export default class ShowQuestions extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      typeMenu: 'first',
      filterList: [],
    }
  }

  static propTypes = {
    questionsList: PropTypes.array,
    changeCorrectAnswer: PropTypes.func,
  }

  componentDidMount() {
    this.sortedArray();
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevState.typeMenu !== this.state.typeMenu) {
      this.sortedArray();
    }

    if(this.props.questionsList !== prevProps.questionsList && this.state.typeMenu === 'third') {
      this.sortedArray();
    }
  }

  changeTypeMenu = (action) => {
    this.setState({
      typeMenu: action,
    })
  }

  sortedArray = () => {
    let questionsList = this.props.questionsList.slice();
    const typeMenu = this.state.typeMenu;

    if(typeMenu === 'second') {
      questionsList = questionsList.filter(x => x.correctAnswer === true);
    } else if (typeMenu === 'third') {
      questionsList = questionsList.filter(x => x.correctAnswer === false);
    }

    this.setState({
      filterList: questionsList
    })
  }

  render() {
    return(
        <div className='questions'>
          <div className='questions-menu'>
            <button
                className={`questions-menu__item ${this.state.typeMenu === 'first' ? 'questions-menu__item--active' : ''}`}
                onClick={() => this.changeTypeMenu('first')}
            >Все вопросы</button>
            <button
                className={`questions-menu__item ${this.state.typeMenu === 'second' ? 'questions-menu__item--active' : ''}`}
                onClick={() => this.changeTypeMenu('second')}
            >Есть ответ</button>
            <button
                className={`questions-menu__item ${this.state.typeMenu === 'third' ? 'questions-menu__item--active' : ''}`}
                onClick={() => this.changeTypeMenu('third')}
            >Ответить</button>
          </div>
          <div className="questions__show-block">
            <div className="questions__menu">
              <span>Сортировка вопросов:</span>
              <select name="" id="">
                <option value="">По умолчанию</option>
                <option value="">Отвеченные вопросы</option>
                <option value="">Неотвеченные вопросы</option>
              </select>
            </div>
            <div className="questions__container">

              {this.state.filterList.map((question, index) =>
                  <QuestionBlock
                      key={index}
                      question={question}
                      changeCorrectAnswer={this.props.changeCorrectAnswer}
                  />
              )}
            </div>
          </div>
        </div>
    )
  }
}
