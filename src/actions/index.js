import { createTodo, fetchTodos } from '../services'

export const actionTypes = {
  getTodos: 'GET_TODOS',
  createTodoSuccess: 'CREATE_TODO_SUCCESS',
  createTodoFail: 'CREATE_TODO_FAIL'
}

export const getTodos = payload => ({
  type: actionTypes.getTodos,
  payload
})

export const createTodoSuccess = payload => ({
  type: actionTypes.createTodoSuccess,
  payload
})

export const createTodoFail = payload => ({
  type: actionTypes.createTodoFail,
  payload
})

// create TODO

export const createTodoThunk = formData => {
  return dispatch => {
    return createTodo(formData)
      .then(res => {
        dispatch(createTodoSuccess(res))
      })
      .catch(err => {
        dispatch(createTodoFail(err))
      })
  }
}

export const getTodoThunk = payload => {
  return dispatch => {
    fetchTodos()
      .then(res => {
        dispatch(getTodos(res.todos))
      })
      .catch(err => {
        dispatch({
          type: 'GET_TODOS_FAIL',
          payload: 'FALLO LA PETICIÓN'
        })
      })
  }
}
