import axios from 'axios'

let store
export const injectStore = _store => {
  store = _store
}

const instance = axios.create({
    // baseURL: 'https://some-domain.com/api/',
    // timeout: 1000,
    // headers: {'X-Custom-Header': 'foobar'}
    withCredentials: true
  });

  instance.interceptors.request.use(function (config) {
    // const reduxState = store.getState();
    console.log('check :', store.getState()?.account?.userInfo?.access_token)
    let headerToken = store.getState()?.account?.userInfo?.access_token ?? "";
    if(headerToken){
      config.headers.Authorization = `Bearer ${headerToken}`;
    }
   
    // Do something before request is sent
    return config;
  }, function (error) {
    // Do something with request error
    
    return Promise.reject(error);
  });

// Add a response interceptor
instance.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response && response.data ? response.data : response;
  }, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    setTimeout(() => {
          if(error.response.status === 400){
            let headerToken = store.getState()?.account?.userInfo?.access_token ?? "";
            if(headerToken){
              error.config.headers.Authorization = `Bearer ${headerToken}`;
            }
            return axios.request(error.config);
          }
             
    }, 5000)
    
    if(error && error.response && error.response.data)
      return error.response.data
    return Promise.reject(error);
  });

 

  export default instance;