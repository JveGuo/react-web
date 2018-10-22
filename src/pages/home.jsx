import React from 'react'
import { connect } from 'react-redux'
import '../styles/home.less'

class Test extends React.Component {

  state = {
    info: {}
  }

  render () {
    return (
      <div className={'home-page'}>
        <div className={'home-top'}>
          <img src={'/static/images/home-bg.jpg'} alt="home-bg.jpg"/>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  const { info } = state.logInData;
  return {info};
};

export default connect(mapStateToProps, null)(Test);
