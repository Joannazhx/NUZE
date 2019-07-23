import axios from 'axios'
import { LOGIN_SUCCESS } from "./constants";
import { LOGOUT } from "./constants";
import { ERROR_MSG } from "./constants";

function loginSuccess(data) {
    return {type:LOGIN_SUCCESS, payload:data}
}

function errorMsg(msg) {
    return {msg, type:ERROR_MSG}
}

export function userLogin(username, password, userGroup) {
    //TODO validation
    if(!username) {
        return dispatch=>dispatch(errorMsg('Username should not be empty'))
    }
    if(!password) {
        return dispatch=>dispatch(errorMsg('Password should not be empty'))
    }
    return dispatch=>{
        axios.post('http://13.238.201.29/comp9900/login', {username, password, userGroup})
            .then(res=>{
                if (res.status === 200 && res.data.code === 1) {
                    // success
                    // console.log('login')
                    console.log(res.data)
                    dispatch(loginSuccess(res.data))

                } else {
                    dispatch(errorMsg(res.data.error))
                }
            })
    }
}



export function getUserInfo(JWT) {
    //TODO get user info
    return dispatch=>{
        axios.post('http://13.238.201.29/comp9900/users', {}, {})
            .then(res=>{
                if (res.status === 200 && res.data.code === 1) {
                    // success
                    // console.log('login')
                    console.log(res.data)
                    dispatch(loginSuccess(res.data))

                } else {
                    dispatch(errorMsg(res.data.error))
                }
            })
    }
}