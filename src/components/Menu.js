import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import {ReactComponent as MenuIcon} from '../assets/menu.svg';
import {ReactComponent as QuestionIcon} from '../assets/icon-cognitive.svg';
import {ReactComponent as ServiceIcon} from '../assets/icon-service-4.svg';

export default class Menu extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeMenu: false
    }
  }

  static propTypes = {
    changeActiveWindowShow: PropTypes.func,
    changeActiveWindowCreate: PropTypes.func,
    activeWindow: PropTypes.string,
  }

  onChangeMenu = () => {
    this.setState({activeMenu: !this.state.activeMenu})
  }

  render() {
    return(
        <header className={`menu ${this.state.activeMenu ? 'menu__active' : ''}`}>
          <div className='menu-site-bar'
            onClick={this.onChangeMenu}
          >
            <MenuIcon className='menu-icon' />
          </div>
          <div className='menu-icons__container'>
            <div
                onClick={this.props.changeActiveWindowShow}
                className={`menu-icon__block ${this.props.activeWindow === 'show' ? 'menu-icon__block--active' : ''}`}
            >
              {this.state.activeMenu === true &&
              <span className='menu-icon__info'>Посмотреть вопросы</span>
              }
              <QuestionIcon className='menu-icon'/>
            </div>
            <div
                onClick={this.props.changeActiveWindowCreate}
                className={`menu-icon__block ${this.props.activeWindow === 'create' ? 'menu-icon__block--active' : ''}`}
            >
              {this.state.activeMenu === true &&
                <span className='menu-icon__info'>Задать вопрос</span>
              }
              <ServiceIcon className='menu-icon' />
            </div>
          </div>
        </header>
    )
  }
}
