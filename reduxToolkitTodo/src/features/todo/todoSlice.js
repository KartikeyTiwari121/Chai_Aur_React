import { createSlice, nanoid } from "@reduxjs/toolkit";
import useEffect from 'react';

// 2nd step is to make reducers also caleed slices. reducers are just functionality
const initialState = {
    todos: [{id: 1, text: "Hello world", completed: false,  isTodoEditable: false}]
}

// Load todos from localStorage
const loadTodosFromLocalStorage = () => {
    try {
      const storedTodos = localStorage.getItem("todos");
      if (storedTodos) {
         //parse is needed as we need object type form to perform operation not string
        return JSON.parse(storedTodos);
      }
    } catch (error) {
      console.error("Error loading todos from localStorage:", error);
    }
    return [];
  };
  
  const saveTodosToLocalStorage = (todos) => {
    try {
        //stringify is needed as lclStorage only stores in string form
      localStorage.setItem("todos", JSON.stringify(todos));
    } catch (error) {
      console.error("Error saving todos to localStorage:", error);
    }
  };
  
  // Load initial todos from localStorage
  initialState.todos = loadTodosFromLocalStorage();
  

// we use createSlices to make reducers. name property is given by createSlice defaultly in which we can assign a string. Every Slice must has initialState, after that we defines reducers which can contain properties & functions.
export const todoSlice = createSlice({
    name: 'todo',
    initialState,

    //in reducers we have bit changes than context api, in Context we only declare functions but in reducers we also write definitions on functions
    reducers: {
        
        //in functions of reducers we have 2 things, state & action. state gives current Value of initialState. action takes values from selected item etc.

        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload,
                completed: false,
                isTodoEditable: false
                // payload is object in which there can be many prperties such as id, text, completed etc.
            }
            state.todos.push(todo);
            saveTodosToLocalStorage(state.todos);
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((Todo) => {
                return Todo.id !== action.payload
                //no need to write .id, it'll automatically compare
            })
            saveTodosToLocalStorage(state.todos);
        },
        updateTodo: (state, action) => {
            const {selectedId, editInput} = action.payload;
            const index = state.todos.findIndex((todo) => todo.id === selectedId);
            state.todos[index].text = editInput;
            saveTodosToLocalStorage(state.todos);
          }, 
        toggleComplete: (state, action) => {
            state.todos = state.todos.map((currentTodoFromList)=> currentTodoFromList.id === action.payload ? {...currentTodoFromList, completed: !currentTodoFromList.completed}: currentTodoFromList);
            saveTodosToLocalStorage(state.todos);
      }

    //   ,
    //   isTodoEditableChanging: (state, action) =>{
    //         const index = state.todos.findIndex((todo) => todo.id === action.payload);
    //         state.todos[index].isTodoEditable = !state.todos[index].isTodoEditable
    //         console.log(state.todos[index].isTodoEditable);
    //   }
    }
})

//have to export all methods individually to use in components.
export const {addTodo, removeTodo, toggleComplete, updateTodo, isTodoEditableChanging} = todoSlice.actions
//we have to give info about recducers to store as store is restricted as it not work with all reducers it only works with reducers which is registered with it. 
export default todoSlice.reducer

//exported individual reducers to use in components. and exported as bunch to link with store 