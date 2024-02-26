import { useState, useEffect } from 'react'
import './App.css'
import { TodoProvider } from './contexts'
import TodoForm from './components/TodoForm';
import TodoItem from './components/TodoItem';

function App() {
  const [todos, setTodos] = useState([]);

  // below these are methods of context to apply on todos, method name should match from value of TodoProvider varna vo functionality nhi jayegi context me!
  const addTodo = (todo)=>{
    setTodos((prevTodoList)=> [ {id: Date.now(), ...todo}, ...prevTodoList] )
  }

  const updateTodo = (id, todo) => {
    setTodos((prevTodoList)=> prevTodoList.map((currentTodoFromList)=> (currentTodoFromList.id === id ? todo: currentTodoFromList)));
    // here *currentTodoFromList.id is Id from individual todo from list of todos of iteration whereas only Id is id of selected todo to update.
  } 

  //in below filter() is good to use use instead of map(), filter will say give all value except selected id
  const deleteTodo = (id) => {
    setTodos((prevTodoList)=> prevTodoList.filter((currentTodoFromList)=> currentTodoFromList.id !== id))
  }

  const toggleComplete = (id) => {
    setTodos((prevTodoList)=> prevTodoList.map((currentTodoFromList)=> currentTodoFromList.id === id ? {...currentTodoFromList, completed: !currentTodoFromList.completed}: currentTodoFromList))
  }

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"));

    if(todos && todos.length > 0){
      setTodos(todos)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])


  return (
    <TodoProvider value={{todos, addTodo, updateTodo, deleteTodo, toggleComplete}}>
    <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                        <TodoForm />
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                        {todos.map((todo)=> (
                         
                          <div key={todo.id} className=' w-full'>
                            {/* key is used to make each item unique */}
                            <TodoItem todo={todo}/>
                          </div>
                        ))}
                    </div>
                </div>
            </div>
    </TodoProvider>
  )
}

export default App
