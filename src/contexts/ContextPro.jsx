import React, { useContext } from 'react';
import { createContext } from "react";

 export const todoContext = createContext({
    todos:[{
        id: 1,
        todo:" desc ",
        isCompleted: false,
    }],
    addTodo : (todo)=>{},
    updateTodo : (id,todo)=>{},
    deleteTodo : (id)=>{},
    toogleComplete :(id)=>{},
})
 const todoProvider = todoContext.Provider ;

export default todoProvider;
