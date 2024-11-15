import {USER_LOGIN_SUCCESS, USER_LOGIN_FAILED, USER_LOGIN_REQUEST,
    USER_LOGOUT_REQUEST, USER_LOGOUT_SUCCESS, USER_LOGOUT_FAILED } from '../actions/accountAction';


const INITIAL_STATE = {

    userInfo: {
        access_token: '',
        email: '',
        groupWithRoles: '',
        refreshToken: '',
        username: ''
    },
    isLoading: false,
    errMesage: ''
};

const accountReducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {

        case USER_LOGIN_REQUEST:

           return {

             ...state,
             isLoading: true,
             errMesage: ''


           };

        case USER_LOGIN_SUCCESS:
           return {
              ...state, 
              userInfo: action.user,
              isLoading: false,
              errMesage: ''

           };

        case USER_LOGIN_FAILED:
            return{
                ...state, 
                errMesage: action.error,
                isLoading: false

            }


        case USER_LOGOUT_REQUEST:
          
            return {
 
              ...state,
              isLoading: true,
             
 
 
            };
 
        case USER_LOGOUT_SUCCESS:
            return {
               ...state, 
               userInfo: {
                access_token: '',
                email: '',
                groupWithRoles: '',
                refreshToken: '',
                username: ''


               },
               isLoading: false,
         
 
            };
 
        case USER_LOGOUT_FAILED:
             return{
                 ...state, 
                 errMesage: action.error,
                 isLoading: false
 
             }

         default: return state;

    }

};

export default accountReducer;