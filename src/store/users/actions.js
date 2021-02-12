import * as types from './types'
import { apiUrl } from '../../config'

export const register = ({name, email, password}) => {
  return (dispatch) => {
    fetch(apiUrl.REGISTER, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        email,
        password,
        name
      })
    })
      .then(response => response.json())
      .then(json => {
        if (!json.error) {
          dispatch(registerSuccess(json));
        } else {
          dispatch(signinError(json.errorMessage));
        }
      })
      .catch(error => {
        dispatch(signinError(error.errorMessage))
      })
  }
}

export const signin = ({email, password}) => {
  return (dispatch) => {

    fetch(apiUrl.SIGNIN, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        "email": email,
        "password": password,
      })
    })
      .then(response => response.json())
      .then(json => {
        if (!json.error) {
          dispatch(signinSuccess(json))
        } else {
          dispatch(signinError(json.errorMessage));
        }
      })
      .catch((error) => {
        dispatch(signinError(error.errorMessage));
      });
  }
}

export const clearSigninError = () => {
  return {
    type: types.CLEAR_SIGNIN_ERROR
  }
}

export const signout = (token) => {
  return (dispatch) => {
    fetch(apiUrl.SIGNOUT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': "Bearer " + token,
      },
    })
      .then(response => response.json())
      .then(json => {
        if (!json.error) {
          dispatch(singoutSuccess())
        } else {
          console.log(json.error)
        }
      })
      .catch((error) => {
        console.log(error)
      });
  }
}


const signinSuccess = data => ({
  type: types.SIGNIN_SUCCESS,
  data
})

const signinError = error => ({
  type: types.SIGNIN_ERROR,
  error
})

const registerSuccess = data => ({
  type: types.REGISTER_SUCCESS,
  data
})

const singoutSuccess = () => ({
  type: types.SIGNOUT_SUCCESS,
})