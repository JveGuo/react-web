import React, { Component } from 'react';

// import { asyncLogData } from './redux/actions';
// import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { Layout } from 'antd';

import Routes from './routes/router';

import HeaderCon from './components/header/header';
const { Content } = Layout;

class App extends Component {

  // test = () => {
  //   const data = {
  //     name: 'wzyl',
  //     password: 123456
  //   }
  //   // console.log(this.props)
  //   const {asyncLogData} = this.props;
  //   asyncLogData(data);
  // }

  render() {
    const { info } = this.props;
    console.log(info);
    return (
      <div className="App">
        <Layout style={{display: 'flex',width: '100%', height: '100%'}}>
          <HeaderCon {...this.props}/>
          <Content style={{flex: '1 1 0'}}>
            <Routes info={info}/>
          </Content>
        </Layout>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { info } = state.logInData;
  return {info};
};

// const mapDispatchToProps = dispatch => ({
//   asyncLogData: bindActionCreators(asyncLogData, dispatch)
// });

export default connect(mapStateToProps, null)(App);
