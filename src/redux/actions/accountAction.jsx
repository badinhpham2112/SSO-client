import axios from '../../customize/axios'
export const USER_LOGIN_REQUEST = "USER_LOGIN_REQUEST"
export const USER_LOGIN_SUCCESS = "USER_LOGIN_SUCCESS"
export const USER_LOGIN_FAILED = "USER_LOGIN_FAILED"

export const USER_LOGOUT_REQUEST = "USER_LOGOUT_REQUEST"
export const USER_LOGOUT_SUCCESS = "USER_LOGOUT_SUCCESS"
export const USER_LOGOUT_FAILED = "USER_LOGOUT_FAILED"


export const doLogin = (ssoToken) => {
    return async (dispatch, getState) => {
        dispatch({type: USER_LOGIN_REQUEST})
        axios.post(`${process.env.REACT_APP_BACKEND_SSO_VERIFY_TOKEN}`, 
        {ssoToken},
       //{withCredentials: true}
        ).then(res=> {
           if(res && +res.EC === 0){
            //success
            // navigate('/')
            dispatch({type: USER_LOGIN_SUCCESS, user: res.DT})
           
           }else{
            // setMessage(res.EM)
            dispatch({type: USER_LOGIN_FAILED, error: res.EM})

           }
        }).catch(err => {
            console.log('check error', err)
            dispatch({type: USER_LOGIN_FAILED, error: "something wrong..."})
        })

    }
    // logic here that can dispatch actions or read state
  }

export const doGetAccount = () => {
    return async (dispatch, getState) => {
        dispatch({type: USER_LOGIN_REQUEST})
        axios.get(`${process.env.REACT_APP_BACKEND_SSO_GET_ACCOUNT}`, 
       //{withCredentials: true}
        ).then(res=> {
           if(res && +res.EC === 0){
            //success
            // navigate('/')
            dispatch({type: USER_LOGIN_SUCCESS, user: res.DT})
            
           }else{
            // setMessage(res.EM)
            dispatch({type: USER_LOGIN_FAILED, error: res.EM})

           }
        }).catch(err => {
            console.log('check error', err)
            dispatch({type: USER_LOGIN_FAILED, error: "something wrong..."})
        })

    }
    // logic here that can dispatch actions or read state
  }

export const doLogout = () => {
    return async (dispatch, getState) => {
        dispatch({type: USER_LOGOUT_REQUEST})
        axios.post(`${process.env.REACT_APP_BACKEND_SSO_LOGOUT}`, 
      
       //{withCredentials: true}
        ).then(res=> {
           if(res && +res.EC === 0){
            //success
            // navigate('/')
            dispatch({type: USER_LOGOUT_SUCCESS})
            window.location.href = '/';
           
           }else{
            // setMessage(res.EM)
            dispatch({type: USER_LOGOUT_FAILED, error: res.EM})

           }
        }).catch(err => {
            console.log('check error', err)
            dispatch({type: USER_LOGOUT_FAILED, error: "something wrong..."})
        })

    }
    // logic here that can dispatch actions or read state
  }
