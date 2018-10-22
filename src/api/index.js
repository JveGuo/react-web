import axios from '../utils/axios'

const path = '/admin'

// 登录
export const Login = (params) => axios.post(path + '/login', params)
