import React from 'react';
import { Button, Form, Input, Icon } from 'antd';

import { asyncLogData, testLog } from '../../redux/actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import './login.less';

const FormItem = Form.Item;

class Login extends React.Component{

  state= {
    loading: false
  }

  componentDidUpdate() {
    const { info, history } = this.props;
    if (info.name) {
      history.push('/');
    }
  }

  handleSubmit = () => {
    let logData = this.props.form.getFieldsValue();
    const {testLog} = this.props;
    testLog(logData);
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className='login-page'>
        <div className='form-con'>
          <div className='bus'>
              <Form className='form-inp'>
                <FormItem className='inp-item'>
                  {
                    getFieldDecorator('name', {
                      initialValue: '13812345678',
                      rules: [
                        // {
                        //   pattern: /^1\d{10}$/,
                        //   message: '请输入正确手机号'
                        // },
                        { required: true, message: '请输入用户名!' }
                      ]
                    })(
                      <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="请输入手机号" autoComplete='off' />
                    )
                  }
                </FormItem>
                <FormItem className='inp-item'>
                  {
                    getFieldDecorator('password', {
                      initialValue: 123123,
                      rules: [
                        { required: true, message: '请输入验证码!' }
                      ]
                    })(
                      <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="请输入验证码" autoComplete='off'/>
                    )
                  }
                </FormItem>
                <FormItem>
                  <Button className='submit-btn' type="primary" loading={this.state.loading} block onClick={this.handleSubmit}>登 录</Button>
                </FormItem>
              </Form>
          </div>
        </div>
      </div>
    )
  }
}


const mapStateToProps = state => {
  const { info } = state.logInData;
  return {info};
};

const mapDispatchToProps = dispatch => ({
  asyncLogData: bindActionCreators(asyncLogData, dispatch),
  testLog: bindActionCreators(testLog, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Form.create()(Login));
