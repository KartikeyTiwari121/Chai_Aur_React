import { useState } from 'react'
import './App.css'
import AddTodo from './components/AddTodo'
import Todo from './components/Todo'
import { Provider } from 'react-redux'
import { store } from './App/store'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Provider store={store}>
     <h1 className=' bg-red-400'>Redux Learning</h1>
     <AddTodo />
     <Todo />
    </Provider>
  )
}

export default App
