import axios from 'axios'
import { message } from 'antd'
import qs from 'qs'
// import router from '../router'
// import store from '../store/store'

axios.defaults.timeout = 10000 // 请求10秒超时
export const CancelToken = axios.CancelToken // 取消的令牌

// 请求拦截
axios
  .interceptors
  .request
  .use(config => {
    if (config.method === 'post') {
      config.data = qs.stringify(config.data) // qs格式化
    }
    if (config.method === 'delete') {
      config.data = config.params || {}
      config.params = ''
    }
    return config
  }, error => {
    return Promise.reject(error)
  })

// 响应拦截
axios
  .interceptors
  .response
  .use(response => {
    if (response.data.code === 4010 || response.data.code === 4012) {
      message.error(response.data.msg);
      // message({
      //   message: response.data.msg,
      //   type: 'error',
      //   duration: 1 * 500,
      //   onClose: () => {
      //     store
      //       .dispatch('logout')
      //       .then(() => {
      //         router.go(0)
      //       })
      //   }
      // })
    } else if (response.data.code === 4000 || response.data.code === 4011 || response.data.code === 4040) {
      message.error(response.data.msg);
      // message({
      //   message: response.data.msg,
      //   type: 'error',
      //   duration: 2 * 700
      // })
      return Promise.reject(response.data.msg)
    }
    return response.data
  }, error => {
    if (axios.isCancel(error)) {
      console.log('promise cancel:' + error.msg)
    } else {
      console.log('promise error:' + error)
      message.error(error.msg ? error.msg : '请求失败，服务器暂未响应！');
      // message({
      //   message: error.msg ? error.msg : '请求失败，服务器暂未响应！',
      //   type: 'error',
      //   duration: 3 * 1000
      // })
    }
    return Promise.reject(error)
  })

export default axios
