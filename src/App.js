import logo from './logo.svg'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { createTodoThunk, getTodoThunk } from './actions'

function App () {
  const state = useSelector(state => state)
  const dispatch = useDispatch()

  const todo = {
    task: 'Hola',
    student: 'Adios'
  }

  useEffect(() => {
    setTimeout(() => {
      console.log(typeof getTodoThunk)
      dispatch(createTodoThunk(todo))
    }, 1000 * 2)
  }, [dispatch])

  console.log(state)

  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
      </header>
    </div>
  )
}

export default App
