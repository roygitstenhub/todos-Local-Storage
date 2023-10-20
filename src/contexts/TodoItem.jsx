import React, { useState } from 'react';
import { BiEdit } from "react-icons/bi";
import { TiDelete } from "react-icons/ti";
import { CiSaveUp2 } from "react-icons/ci"
import { useContext } from 'react';
import { todoContext } from './ContextPro';

const TodoItem = ({ todoValue }) => {
  let [flag, setFlag] = useState(false)
  let [isIconUpdated, setisIconUpdated] = useState(false)
  let [newTask, setnewTask] = useState(todoValue.todo)
  let [itemColor, setItemColor] = useState(false)
  let [hideEdit,sethideEdit] = useState(false)
  let { deleteTodo, updateTodo } = useContext(todoContext)

  const deleteItem = () => {
    deleteTodo(todoValue.id)
  }

  const updateItem = () => {
    setFlag(!flag)
    setisIconUpdated(true)
  }
  const updateNewItem = () => {
    updateTodo(todoValue.id, { ...todoValue, todo: newTask })
    setisIconUpdated(false)
  }

  const handlechange = (e) => {
    setnewTask(e.target.value)
  }

  const handleCheckBox = (e) => {
    setItemColor(!itemColor)
    sethideEdit(!hideEdit)
  }

  return (
    <div className={`w-3/5 px-2 py-4 border flex justify-between ${!itemColor ? '  bg-green-200 ' : ' bg-red-200 line-through '}`} >

      <div className='w-6'>
        <input type="checkbox" className='cursor-pointer p-2' onChange={handleCheckBox} />
      </div>
      {
        flag ?
          <div className=' w-2/3 flex font-semibold capitalize '>
            <input type="text" value={newTask} onChange={handlechange} className=" w-full h-full outline-none capitalize border bg-green-200 " readOnly={ isIconUpdated?  todoValue.isCompleted : !todoValue.isCompleted } />
          </div> :

          <div className=' w-2/3 flex font-semibold capitalize '>
            {todoValue.todo}
          </div>
      }
      <div className='w-20 flex justify-between items-center '>
        {
          isIconUpdated ? <CiSaveUp2 className='text-2xl cursor-pointer' onClick={updateNewItem} /> :

           !hideEdit ?  <BiEdit className='text-2xl cursor-pointer' onClick={updateItem}  /> : ""
        }
        <TiDelete className='text-2xl cursor-pointer' onClick={deleteItem} />
      </div>
    </div>
  )
}

export default TodoItem