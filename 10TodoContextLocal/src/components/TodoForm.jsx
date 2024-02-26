import React, { useState } from 'react'
import { useTodo } from '../contexts';

function TodoForm() {
    const [todo, setTodo] = useState("")

    //below this line *useTodo is used to get context of Todos
    const {addTodo} = useTodo()

    const add = (e) => {
        e.preventDefault()
        if(!todo) return
        
        //no need to write id: Date.now() as it's present App.jsx methods
        addTodo({id: Date.now(), todo: todo, completed: false});

        //below this line is used to make field empty from where text is coming
        setTodo("")
    }

    return (
        <form onSubmit={add} className="flex">
            <input
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                value={todo} //this value={todo} is making wiring B/W input and state
                onChange={(e) => setTodo(e.target.value)}
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    );
}

export default TodoForm;

