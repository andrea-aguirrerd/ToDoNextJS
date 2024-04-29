import { ToDoStruct } from "@/app/utils/types/todoItem";
import React from "react";

interface ToDoItemProps {
  todo: ToDoStruct;
}

const ToDoItem = ({ todo }: ToDoItemProps) => {

  return (
    <div className="">
      <label className="flex items-center gap-2 border rounded-md p-2 border-gray-500 hover:bg-slate-300 grow">
        {todo.title}
        <div className="flex grow justify-end">
        <input type="checkbox" defaultChecked={todo.completed} className="scale-150" />

        </div>
      </label>
    </div>
  );
};

export default ToDoItem;
