import userTypes from 'constants/user.constants.js'
import userService from 'services/user.service.js'

const getAllUsers = () => {
  return (dispatch) => {
    dispatch({ type: userTypes.GET_ALL_USER_REQUEST })
    return userService
      .getAll()
      .then(response => {
        dispatch({
          type: userTypes.GET_ALL_USER_SUCCESS,
          payload: response.data
        })
        return response
      })
      .catch(error => {
        dispatch({ type: userTypes.GET_ALL_USER_FAILURE })
        throw error
      })
  }
}

const createUser = (data) => {
  return (dispatch) => {
    dispatch({ type: userTypes.ADD_USER_REQUEST })
    return userService
      .create(data)
      .then(response => {
        dispatch({
          type: userTypes.ADD_USER_SUCCESS,
          payload: response.data
        })
        return response
      })
      .catch(error => {
        dispatch({ type: userTypes.ADD_USER_FAILURE })
        throw error
      })
  }
}

const updateUser = (userId, data) => {
  return (dispatch) => {
    dispatch({ type: userTypes.UPDATE_USER_REQUEST })
    return userService
      .update(userId, data)
      .then(response => {
        dispatch({
          type: userTypes.UPDATE_USER_SUCCESS,
          payload: response.data
        })
        return response
      })
      .catch(error => {
        dispatch({ type: userTypes.UPDATE_USER_FAILURE })
        throw error
      })
  }
}

const removeUser = (userId) => {
  return (dispatch) => {
    dispatch({ type: userTypes.REMOVE_USER_REQUEST })
    return userService
      .remove(userId)
      .then(response => {
        dispatch({
          type: userTypes.REMOVE_USER_SUCCESS,
          payload: { userId }
        })
        return response
      })
      .catch(error => {
        dispatch({ type: userTypes.REMOVE_USER_FAILURE })
        throw error
      })
  }
}

const usersActions = {
  getAllUsers,
  createUser,
  updateUser,
  removeUser
}

export default usersActions
