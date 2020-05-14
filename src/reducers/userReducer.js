import userTypes from 'constants/user.constants'

const initialState = {
  data: [],
  isLoading: false,
  hasError: false,
  querySearch: null
}

export default function (state = initialState, action) {
  switch (action.type) {
    case userTypes.GET_ALL_USER_REQUEST:
      return {
        ...state,
        isLoading: true
      }
    case userTypes.GET_ALL_USER_SUCCESS:
      return {
        ...state,
        data: action.payload,
        isLoading: false
      }
    case userTypes.GET_ALL_USER_FAILURE:
      return {
        ...state,
        isLoading: false
      }

    case userTypes.ADD_USER_REQUEST:
      return {
        ...state,
        isLoading: true
      }
    case userTypes.ADD_USER_SUCCESS:
      return {
        ...state,
        data: [...state.data, action.payload],
        isLoading: false
      }
    case userTypes.ADD_USER_FAILURE:
      return {
        ...state,
        isLoading: false
      }

    case userTypes.UPDATE_USER_REQUEST:
      return {
        ...state,
        isLoading: true
      }
    case userTypes.UPDATE_USER_SUCCESS:
      return {
        ...state,
        data: state.data.map(user => user.id === action.payload.id ? action.payload : user),
        isLoading: false
      }
    case userTypes.UPDATE_USER_FAILURE:
      return {
        ...state,
        isLoading: false
      }

    case userTypes.REMOVE_USER_REQUEST:
      return {
        ...state,
        isLoading: true
      }
    case userTypes.REMOVE_USER_SUCCESS:
      return {
        ...state,
        data: state.data.filter(user => user.id !== action.payload.userId),
        isLoading: false
      }
    case userTypes.REMOVE_USER_FAILURE:
      return {
        ...state,
        isLoading: false
      }

    default:
      return state
  }
}
