import React from 'react';
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

export default class Profile extends React.Component {
  constructor(props) {
    super(props);

  }

  static propTypes = {
    user: PropTypes.object,
    exit: PropTypes.func,
  }


  render() {
    return(
        <div className='profile'>
          <div className='profile__container'>
            <span className='profile__user-name'><b>Ваш ник: </b>{this.props.user.userName}</span>
            <Link to='/' className='exit__container'>
              <span className='exit' onClick={this.props.exit}>Выйти</span>
            </Link>
          </div>
        </div>
    )
  }
}
