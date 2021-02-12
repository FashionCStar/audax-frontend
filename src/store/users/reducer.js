import * as types from './types'

const initialState = {
  user: null,
  signinError: '',
  token: null,
}

const user = (state = initialState, action) => {
  switch (action.type) {
    //REGISTER
    case types.REGISTER_SUCCESS:
      return {...state, user: action.data.user, token: action.data.token}

    //SIGNIN
    case types.SIGNIN_SUCCESS:
      return { ...state, user: action.data.user, token: action.data.token }

    case types.SIGNIN_ERROR:
      return { ...state, signinError: action.error }

    case types.CLEAR_SIGNIN_ERROR:
      return { ...state, signinError: '' }

    //SIGNOUT
    case types.SIGNOUT_SUCCESS:
      return initialState

    default:
      return state
  }
}

export default user
