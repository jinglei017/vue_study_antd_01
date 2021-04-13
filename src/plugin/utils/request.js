import axios from "axios"
import NProgress from "nprogress"
import 'nprogress/nprogress.css'

// 创建实例时设置配置的默认值
var instance = axios.create({
    baseURL: 'http://localhost:8080',
    timeout: 3000
})

// 添加请求拦截器
instance.interceptors.request.use(function(config) {
    // 在发送请求之前做些什么
    NProgress.start()
    return config;
}, function(error) {
    // 对请求错误做些什么
    return Promise.reject(error);
})

// 添加响应拦截器
instance.interceptors.response.use(function(response) {
    // 对响应数据做点什么
    NProgress.done()
    return response;
}, function(error) {
    // 对响应错误做点什么
    return Promise.reject(error);
})
export default instance

export let get = async(url, params) => {
    console.log("get请求了")
    let data = await instance.get(url, { params })
    return data
}
export let post = async(url, params) => {
    console.log("post请求了")
    let data = await instance.post(url, params)
    return data
}