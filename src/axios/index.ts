import axios from 'axios'
import * as qs from 'qs'
import {localStorage} from '@/utils/storage';
import {Toast} from 'antd-mobile'
import {baseUrl} from '@/urls'

const header_params = window.location.search.substring(1).split('&')
header_params.map((item: string) => {
  let itemArr = item.split('=')
  localStorage[itemArr[0]] = itemArr[1]
})

axios.defaults.baseURL = baseUrl
axios.defaults.withCredentials = true
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
axios.defaults.headers.put['Content-Type'] = 'application/x-www-form-urlencoded'
axios.defaults.headers.token = localStorage.token ?? ''

// qs 序列化 防止XSRF攻击 可以对深层次的json array进行序列化
axios.interceptors.request.use(
  config => {
    config.transformRequest = [
      data => {
        return qs.stringify(data, {
          allowDots: true,
        })
      },
    ]
    // `paramsSerializer` 是一个负责 `params` 序列化的函数
    config.paramsSerializer = params => {
      return qs.stringify(params, {
        arrayFormat: 'repeat',
      })
    }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

axios.interceptors.response.use(
  response => {
    const {data, data: {msg}} = response
    if (!data.success) return Toast.fail(msg)
    return data
  },
  error => {
    Promise.reject(error)
  }
)

export default axios
