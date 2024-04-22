"use client";
import React, { useEffect, useState } from "react";
import { ElementStruct } from "../utils/types/elementItem";

const ListElements = () => {
  const [elements, setElements] = useState<ElementStruct[]>([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch(
      "https://crudcrud.com/api/85ceb0ce496d45e0a9b97335227413de/unicorns"
    );
    const data = await response.json();
    setElements(data);
  };

  return (
    <div className="justify-center items-center h-screen pb-5 overflow-scroll space-y-3 bg-gray-200">
      <h1 className="text-4xl text-center font-mono text-white bg-green-900 pt-5 pb-5">Elements Table</h1>
      <div className=" relative overflow-x-auto shadow-md sm:rounded-lg m-auto container bg-white">
      <table className="table-auto text-lg w-full text-left border-spacing-3">
        <thead className="text-lg text-gray-400 border-b-2">
          <tr>
            <th className="border-r-2" >Name</th>
            <th className="border-r-2 pl-2">Age</th>
            <th className="pl-2">Color</th>
            <th className="pl-2">Delete</th>
          </tr>
        </thead>
        <tbody>
          {elements.map((element) => (
            <tr key={element._id}>
              <td>{element.name}</td>
              <td key={element._id}>{element.age}</td>
              <td key={element._id}>{element.colour}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
  );
};

export default ListElements;
