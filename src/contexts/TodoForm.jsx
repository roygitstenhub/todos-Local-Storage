import React, { useState,useContext } from 'react';
import { todoContext } from './ContextPro';

const TodoForm = () => {
    let  [todo, setTodo] = useState();
    let {addTodo} = useContext(todoContext);

    const handleChange = (e) =>{
       setTodo(e.target.value)
    }
    
    const handleSubmit =(e)=>{
        e.preventDefault()
        if(todo)
        {
          addTodo({ todo , isCompleted:false })    
        }
        setTodo("")
    }

    return (
        <form action="" onSubmit={handleSubmit} className="w-3/5 mt-8 ">
            <div className=" flex w-full border-2 border-black rounded-r-md rounded-l-md ">
                <input type="text" placeholder="Add Task..." className=" p-3 w-full rounded-l-md outline-none "
                onChange={handleChange} value={todo} />
                <button className=" px-6 py-3 bg-black text-white font-bold ">Add</button>
            </div>
        </form>
    )
}

export default TodoForm