import axios from 'axios'

export const fetchTodos = async () => {
  const req = axios({
    baseURL: 'https://todos-go.herokuapp.com/api/todos',
    url: '/',
    method: 'GET'
  })

  return (await req).data
}

export const createTodo = async data => {
  const req = axios({
    baseURL: 'https://todos-go.herokuapp.com/api/',
    url: 'todos',
    method: 'POST',
    data
  })

  return (await req).data
}
