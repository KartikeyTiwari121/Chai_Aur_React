import React, { useState, useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { addTodo, updateTodo } from '../features/todo/todoSlice'

export default function AddTodo({editFormVisibility, editTodo, CancelEdit}) {

  const dispatch = useDispatch()
  const todoItems = useSelector(state => state.todos)

  const [input, setInput] = useState('')
  const [editInput, setEditInput] = useState('')

  useEffect(() => {
    setEditInput(editTodo.text)
  }, [editTodo])


    const addTodoHandler = (e) => {
        //dispatch reducers ka use karte huye store me changes karta hai
        e.preventDefault()
        if(input){
          dispatch(addTodo(input))
        setInput('')
        }
    }

    const editSubmit = (e)=>{
      const selectedId = editTodo.id
      e.preventDefault()
        if(editInput){
          dispatch(updateTodo({selectedId, editInput}))
        setEditInput('')
        }
    }
    
    return (
      // we are using conditional redering based on editFormVisibility

      <>
      {editFormVisibility===false ? (
        <form onSubmit={addTodoHandler} className="space-x-3 mt-12">
        <input
          type="text"
          className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          placeholder="Enter a Todo..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          type="submit"
          className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
        >
          Add Todo
        </button>
      </form>
      ):(
        // from here is update form
        <form  className="space-x-3 mt-12" onSubmit={editSubmit}>
        <input
          type="text"
          className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          placeholder="Update a Todo..."
         value={editInput || ''} onChange={(e)=> setEditInput(e.target.value)}
        />
        <button
          type="submit"
          className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
        >
          Update Todo
        </button>
        <button type="button" className='text-white bg-orange-300 border-0 py-1 px-3 m-1 focus:outline-none hover:bg-indigo-600 rounded text-lg' onClick={CancelEdit}>Back</button>
      </form>
      )}
      </>   
    )
}
