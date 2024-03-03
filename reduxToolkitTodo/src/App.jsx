import { useState } from 'react'
import './App.css'
import AddTodo from './components/AddTodo'
import TodoItem from './components/TodoItem'
import { Provider } from 'react-redux'
import { store } from './App/store'

function App() {
  // here is video link from where i take help to create update functionality "https://youtu.be/tDir9VFoqD4?si=NFsmaLi_aV4IxTdq"
  
  //we made these states in app.jsx so that both components can access them and made changes accordingly.
  const [editFormVisibility, setedItFormVisibility] = useState(false)

  const [editTodo, setEditTodo] = useState('')

  const handleEditClick = (todo)=>{
    setedItFormVisibility(true);
    setEditTodo(todo)
  }

  const CancelEdit = ()=>{
    setedItFormVisibility(false);
  }

  return (
    <Provider store={store}>
     <h1 className=' bg-red-400'>Redux Learning</h1>
     <AddTodo editFormVisibility={editFormVisibility} editTodo={editTodo} CancelEdit={CancelEdit} />
     <TodoItem handleEditClick={handleEditClick} editFormVisibility={editFormVisibility} />
    </Provider>
  )
}

export default App
