"use client";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { ELEMENTS_BASEURL } from "../utils/api";

const CreateElement = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [colour, setColor] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const submitData = { name, age, colour };

    try {
      const res = await fetch(ELEMENTS_BASEURL, {
        method: "POST",
        body: JSON.stringify(submitData),
        headers: {
          "content-type": "application/json",
        },
      });
      if (res.ok) {
        toast.success("Element was created successfully!");
      }
    } catch (error) {
      toast.error("Error creating the element");
    }

    setName("");
    setAge(0);
    setColor("");
  };

  {
    /** https://stackoverflow.com/questions/76267351/how-to-fetch-data-server-side-in-the-latest-next-js-tried-getstaticprops-but-it*/
  }

  return (
    <>
      <h1 className="text-4xl text-center font-mono text-white bg-green-900 pt-5 pb-5">
        Create Element Form
      </h1>
      <div className="mt-7 flex flex-col items-center container max-w-md px-4 bg-white rounded overflow-hidden shadow-lg mx-auto">
        <form className="w-full max-w-lg py-6" onSubmit={handleSubmit}>
          <div className="flex flex-wrap w-full ">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label className="block tracking-wide text-gray-700 text-lg font-bold mb-2 ">
                First Name
              </label>
              <input
                className="appearance-none block w-full hover:bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                type="text"
                placeholder="Pegasus"
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
            </div>
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label className="block tracking-wide text-black text-lg font-bold mb-2">
                Age
              </label>
              <input
                className="appearance-none block w-full hover:bg-gray-200 text-black border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                type="number"
                placeholder="8"
                onChange={(e) => setAge(e.target.valueAsNumber)}
                min="0"
                value={age}
              />
            </div>
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label className="block tracking-wide text-black text-lg font-bold mb-2">
                Color
              </label>
              <input
                className="appearance-none block w-full hover:bg-gray-200 text-black border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                type="text"
                placeholder="Yellow"
                onChange={(e) => setColor(e.target.value)}
                value={colour}
              />
            </div>
          </div>
          <div className="mt-4 justify-center flex">
            <button
              className="hover:bg-green-600 bg-green-800 text-white font-bold px-4 py-2 rounded"
              type="submit"
            >
              Create Element
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default CreateElement;
