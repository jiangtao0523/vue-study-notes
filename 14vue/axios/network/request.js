import axios from "axios";


export function request(config) {

  const instance = axios.create({
    baseURL: 'http://localhost:8080',
    timeout: 5000
  })

  // 请求拦截器 可以对请求中一些信息进行修改 比如给每次请求加上一个token
  instance.interceptors.request.use(config => {
    console.log(config)
    return config
  },err => {
    console.log(err)
  })

  // 响应拦截器
  instance.interceptors.response.use(res => {
    console.log(res)
    return res
  }, err => {
    console.log(err)
  })

  return instance(config)
}

/*export function request(config,success,failure) {
  const instance = axios.create({
    baseURL: 'http://localhost:8080',
    timeout: 5000
  })

  instance(config)
    .then(res => {
      success(res)
    })
    .catch(err => {
      failure(err)
    })
}*/
