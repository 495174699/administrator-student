/**
 * 基于axios封装的请求模块
 */
import axios from 'axios'

const request = axios.create({
    baseURL: 'http://localhost:8080/'
})

// 导出请求方法
export default request