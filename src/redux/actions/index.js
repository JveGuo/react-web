import * as type from './types'

import { Login } from '../../api';
import storgeTool from '../../utils/storage';

// 登录
export const setUserInfo = (data) => ({
  type: type.LOG_IN,
  data
});

// 测试登录
export const testLog = (params) => dispatch => {
  storgeTool.setStore('info', params);
  return dispatch(setUserInfo(params));
}

// 异步的action
export const asyncLogData = (params) => dispatch => {
  return Login(params).then(res => {
    storgeTool.setStore('info', res.data);
    return dispatch(setUserInfo(res.data));
  });
}

