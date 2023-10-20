import { useEffect, useState } from "react";
import TodoProvider from "./contexts/ContextPro";
import TodoForm from "./contexts/TodoForm";
import TodoItem from "./contexts/TodoItem";

function App() {
  let [todos, setTodos] = useState([])

  const addTodo = (todo) => {
    if (todo) {
      setTodos([...todos, { id: new Date(), ...todo }])
    }
  }

  const updateTodo = (id, todo) => {
    if (!todo) {
      setTodos([...todos, todos.map((item) => item.id === id ? { ...item, todo: todo } : todos)])
    }
  }

  const deleteTodo = (id) => {
    const newTodos = todos.filter((item) => item.id !== id)
    setTodos(newTodos)
  }

  const toogleComplete = (id) => {
    setTodos([...todos.map((item) => item.id === id ? { ...item, isCompleted: !item.isCompleted } : todos)])
  }
  // LocalStorage code
  useEffect(() => {
    const todos = JSON.parse( localStorage.getItem("todos") ) 
    if (todos && todos.length > 0) {
      setTodos(todos)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("todos",JSON.stringify(todos) )
  }, [todos])

  return (
    <TodoProvider value={{ todos, addTodo, updateTodo, deleteTodo, toogleComplete }}>
      <main className="w-full h-screen flex flex-col items-center gap-8 ">

        {/* form  */}
        <TodoForm />

        {/* Item */}
        {
          todos.map((item, index) => (
            <TodoItem todoValue={item} key={index} />
          ))
        }
      </main>
    </TodoProvider>
  )
}

export default App
