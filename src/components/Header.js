import React from 'react';
import ReactDOM from 'react-dom';
import {ReactComponent as UserIcon} from '../assets/icon-user.svg';
import {Link} from "react-router-dom";
import PropTypes from "prop-types";

export default class Header extends React.Component {

  static propTypes = {
    exit: PropTypes.func,
  }

  render() {
    return(
        <header className='header'>
          <span className='header-title'>Вопросы</span>
          <div className='header-user'>
            <div className='header-info'>
              <span>Пользователь</span>
              <Link to='/'>
                <span className='exit' onClick={this.props.exit}>Выйти</span>
              </Link>
            </div>
            <div className="header-icon__container">
              <UserIcon className='header-icon' />
            </div>
          </div>
        </header>
    )
  }
}
