import { ToDoStruct } from "@/app/utils/types/todoItem";
import React from "react";

interface ToDoItemProps {
  todo: ToDoStruct;
  onDelete: (id: number) => void; 
}

const ToDoItem = ({ todo, onDelete }: ToDoItemProps) => {
  const handleDelete = () => {
    onDelete(todo.id); 
  };

  return (
    <div className="">
      <label className="flex items-center gap-2 border rounded-md p-2 border-gray-500 hover:bg-slate-300 grow">
        {todo.title}
        <div className="flex grow justify-end">
        <input type="checkbox" defaultChecked={todo.completed} className="scale-150" />
        <button
          onClick={handleDelete}
          className="ml-4  text-black border border-black rounded-lg px-5 py-1 hover:bg-red-500 hover:border-red-500 hover:font-bold bg-white"
        >
          Delete
        </button>
        </div>
      </label>
    </div>
  );
};

export default ToDoItem;
