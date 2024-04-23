"use client";
import React, { useEffect, useState } from "react";
import { ElementStruct } from "../utils/types/elementItem";

const ListElements = () => {
  const [elements, setElements] = useState<ElementStruct[]>([]);
  const [deleteId, setDeleteId] = useState<string>(""); // Id del elemento a eliminar
  const [showConfirmation, setShowConfirmation] = useState<boolean>(false);

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

  const handleDelete = async () => {
    if (deleteId) {
      await fetch(
        `https://crudcrud.com/api/85ceb0ce496d45e0a9b97335227413de/unicorns/${deleteId}`,
        {
          method: "DELETE"
        }
      );
      // Actualizar la lista después de eliminar el elemento
      fetchData();
    }
    setShowConfirmation(false);
  };

  return (
    <div className="justify-center items-center h-screen pb-5 overflow-scroll space-y-3 bg-gray-200">
      <h1 className="text-4xl text-center font-mono text-white bg-green-900 pt-5 pb-5">Elements Table</h1>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg m-auto container bg-white">
        <table className="table-auto text-lg w-full text-left border-spacing-3">
          <thead className="text-lg text-gray-400 border-b-2">
            <tr>
              <th className="border-r-2">Name</th>
              <th className="border-r-2 pl-2">Age</th>
              <th className="pl-2">Color</th>
              <th className="pl-2">Delete</th>
            </tr>
          </thead>
          <tbody>
            {elements.map((element) => (
              <tr key={element._id}>
                <td>{element.name}</td>
                <td>{element.age}</td>
                <td>{element.colour}</td>
                <td>
                  <button
                    onClick={() => {
                      setDeleteId(element._id);
                      setShowConfirmation(true);
                    }}
                    className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {showConfirmation && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-8 rounded-lg">
            <p>¿Estás seguro de que deseas eliminar este elemento?</p>
            <div className="flex justify-center mt-4">
              <button
                onClick={handleDelete}
                className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded mr-4"
              >
                Sí
              </button>
              <button
                onClick={() => setShowConfirmation(false)}
                className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded"
              >
                No
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ListElements;
