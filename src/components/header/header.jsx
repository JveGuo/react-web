import React from 'react';
import './header.less';
import { Layout, Row, Col } from 'antd';
import { NavLink } from 'react-router-dom'

const { Header } = Layout;

const NavList = [
  {
    key: 10000,
    path: '/app/home',
    title: '首页'
  },
  {
    key: 10001,
    path: '/app/order',
    title: '在线下单'
  },
  {
    key: 10003,
    path: '/app/service',
    title: '客服'
  }
]

export default class HeaderCon extends React.Component{
  constructor (props) {
    super (props)
    this.state = {
      show: 'none'
    }
  }

  componentWillMount() {
    const { info } = this.props;
    const { name } = info;
    const show = name ? 'none' : 'block';
    this.setState({
      show
    })
  }

  render() {
    return (
      <Header>
        <Row className={'container'}>
          <Col className={"header-logo"} md={{span: 4, offset: 0}}>
            <h1 style={{color: '#fff'}}>LOGO</h1>
          </Col>
          <Col className={'header-nav'} md={{span: 16, offset: 2}}>
            {
              NavList.map(item => {
                return <NavLink to={item.path} key={item.path}>{item.title}</NavLink>
              })
            }
          </Col>
          <Col md={{span: 2}} style={{display: this.state.show}}>
            <NavLink to={'/login'}>登录</NavLink>
          </Col>
        </Row>
      </Header>
    )
  }
}