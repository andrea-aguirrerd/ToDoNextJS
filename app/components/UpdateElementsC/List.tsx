
"use client";
import { ELEMENTS_BASEURL } from "@/app/api/apiEndpoints";
import { ElementStruct } from "@/app/utils/types/elementItem";
import React, { useEffect, useState } from "react";

interface ListUpdateProps{
  clickedElement:(element: ElementStruct|null) =>void;
}

const ListElements = ({clickedElement}:ListUpdateProps) => {
  const [elements, setElements] = useState<ElementStruct[]>([]);

  const onClickElement = (elementId: string) => {
    const selected:(ElementStruct|any) = elements.find(element => element._id === elementId);
    if (selected) {
      clickedElement(selected);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch(
      ELEMENTS_BASEURL
    );
    const data = await response.json();
    setElements(data);
  };


  return (
    <>
        <div className="relative overflow-x-scroll shadow-md sm:rounded-lg m-auto container bg-white mt-4  mb-2">
          <table className="table-auto text-lg w-full text-center border-spacing-3  ">
            <thead className="text-lg text-gray-400 border-b-2">
              <tr>
                <th className="border-r-2">Name</th>
                <th className="border-r-2 pl-2">Age</th>
                <th className="border-r-2 pl-2">Color</th>
              </tr>
            </thead>
            <tbody className="ml-6 ">
              {elements.map((element) => (
                <tr key={element._id} className="hover:bg-gray-300" onClick={() => onClickElement(element._id)}>
                  <td>{element.name}</td>
                  <td>{element.age}</td>
                  <td>{element.colour}</td>

                </tr>
              ))}
            </tbody>
          </table>
        </div>
    </>
  );
};

export default ListElements;
