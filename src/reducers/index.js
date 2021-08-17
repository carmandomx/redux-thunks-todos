import { actionTypes } from '../actions'

const INITIAL_STATE = {
  data: [],
  isLoading: false
}

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.getTodos:
      return {
        ...state,
        data: [...action.payload]
      }

    default:
      return state
  }
}

export default reducer
