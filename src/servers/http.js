import Axios from 'axios'
import Message from '@/components/message/main'

const Http = {
  install (Vue) {
    Axios.defaults.timeout = 30000
    Axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
    // 请求拦截器
    Axios.interceptors.request.use(config => {
      return config
    }, err => Promise.reject(err))

    // 响应拦截器
    Axios.interceptors.response.use(result => {
      // if (result.data.statue === -1) { // 登录超时
      //   Message({
      //     type: 'err',
      //     message: '登录超时'
      //   })
      //   setTimeout(() => location.reload(), 1000)
      //   return
      // }
      return {
        body: result.data,
        status: {
          code: result.status,
          message: result.statusText
        },
        headers (name) {
          return result.request.getResponseHeader(name)
        }
      }
    }, err => {
      // if ([403, 401].indexOf(err.response.status) !== -1) {}

      Message({
        type: 'err',
        message: err.response.data.message
      })
      return Promise.reject(err)
    })
    Vue.prototype.$Http = Axios
  }
}

export default Http
