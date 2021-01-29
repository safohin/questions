import React from 'react';
import PropTypes from "prop-types";

export default class Profile extends React.Component {
  constructor(props) {
    super(props);

  }

  static propTypes = {
    user: PropTypes.object,
  }


  render() {
    return(
        <div className='profile'>
          <div className='profile__container'>
            <span className='profile__user-name'><b>Ваш ник: </b>{this.props.user.userName}</span>
          </div>
        </div>
    )
  }
}
