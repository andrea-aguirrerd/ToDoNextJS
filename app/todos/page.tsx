"use client";
import React, { useEffect, useState } from "react";
import ToDoItem from "../components/todo-c/todo-item";
import { ToDoStruct } from "../utils/types/todoItem";
import { TODOS_BASEURL } from "../utils/api";

const ToDoList = () => {
  const [todos, setTodos] = useState<ToDoStruct[]>([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch(TODOS_BASEURL);
    const data = await response.json();
    setTodos(data);
  };

  return (
    <>
      <div className="justify-center items-center h-screen pb-5 overflow-scroll space-y-3 ">
        <h1 className=" text-4xl text-center font-mono text-white bg-green-900 pt-5 pb-5">
          To-Do List
        </h1>
        <div className="flex justify-center">
          <div className="grid grid-cols-1 gap-2 mr-5 max-w-max">
            {todos.map((todo) => (
              <ToDoItem key={todo.id} todo={todo} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ToDoList;
