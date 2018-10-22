import React from 'react';
import img from '../../assets/img/404.png';

import './notFound404.less';

class NotFound extends React.Component {
  render () {
    return (
      <div className="center">
        <img src={img} alt="404"/>
      </div>
    )
  }
}

export default NotFound;