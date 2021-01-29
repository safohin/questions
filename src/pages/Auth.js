import React from 'react';
import ReactDOM from 'react-dom';
import {ReactComponent as Logo} from '../assets/logo.svg';
import {Link, Redirect, Route} from "react-router-dom";
import PropTypes from "prop-types";
import MainPage from "./MainPage";

export default class Auth extends React.Component {
  constructor(props) {
    super(props);

    this.loginRef = React.createRef();
    this.passwordRef = React.createRef();

    this.state = {
      redirectToReferrer: false,
    }
  }

  static propTypes = {
    isAuthorization: PropTypes.func,
  }


  auth = () => {
    const login = this.loginRef.current.value;
    const password = this.passwordRef.current.value;
    this.props.isAuthorization(login, password);
  }

  render() {

    if (this.state.redirectToReferrer) {
      return <Redirect to='/public' />;
    }

    return(
      <div className='auth'>
        <div className='auth-form'>
          <div className='auth-form__item auth-form__img'></div>

          <div className='auth-form__item auth-form__container'>
           <div className='auth-form__logo-container'>
             <Logo className='auth-form__logo' />
           </div>
            <div className='auth-form__title-container'>
              <span className='auth-form__subtitle'>Для входа в приложение введите свои данные</span>
            </div>
            <div className='auth-form__input-container'>
              <input
                  type='text'
                  className='auth-form___input'
                  ref={this.loginRef}
                  placeholder='Введите логин'
              />
              <input
                  type='text'
                  className='auth-form___input'
                  ref={this.passwordRef}
                  placeholder='Введите пароль'
              />
            </div>
            <div className='auth-form__button-container'>
              <Link
                  to='/public'
                  className='auth-form__button'
                  onClick={this.auth}
              >
                Авторизация
              </Link>
            </div>
          </div>

        </div>
      </div>
    )
  }
}
