{/*import { ToDoStruct } from '@/app/utils/types/todoItem'
import React from 'react'

interface ToDoItemProps{
    todo:ToDoStruct
}

const ToDoItem = ({todo}:ToDoItemProps) => {
  return (
    <div className="">
      <label className="flex items-center gap-2 border rounded-md p-2 border-gray-500 hover:bg-slate-300 grow ">
        {todo.title}    
        <input type="checkbox" 
        checked={todo.completed}
        className="scale-150" />     
      </label>
    </div>
  )
}

export default ToDoItem*/}
import { ToDoStruct } from '@/app/utils/types/todoItem'
import React from 'react'

interface ToDoItemProps {
    todo: ToDoStruct,
    onDelete: (id: number) => void // Función para manejar la eliminación de un todo
}

const ToDoItem = ({ todo, onDelete }: ToDoItemProps) => {
    const handleDelete = () => {
        onDelete(todo.id); // Llama a la función onDelete con el ID del todo a eliminar
    }

    return (
        <div className="">
            <label className="flex items-center gap-2 border rounded-md p-2 border-gray-500 hover:bg-slate-300 grow">
                {todo.title}
                <input type="checkbox"
                    checked={todo.completed}
                    className="scale-150" />
                <button onClick={handleDelete} className="ml-2 text-red-600 hover:text-red-800">Eliminar</button> {/* Botón de eliminación */}
            </label>
        </div>
    )
}

export default ToDoItem
