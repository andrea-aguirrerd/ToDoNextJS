"use client";
import { Update } from "next/dist/build/swc";
import React, { useState } from "react";
import toast from "react-hot-toast";


const Page = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [colour, setColor] = useState("");



  return (
    <>
      <div className="mt-7 flex flex-col items-center container max-w-md px-4 bg-white rounded overflow-hidden shadow-lg mx-auto">
        <form className="w-full max-w-lg py-6" >
          <div className="flex flex-wrap w-full ">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label className="block tracking-wide text-gray-700 text-lg font-bold mb-2 ">
                First Name
              </label>
              <input
                className="appearance-none block w-full hover:bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                type="text"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label className="block tracking-wide text-black text-lg font-bold mb-2">
                Age
              </label>
              <input
                className="appearance-none block w-full hover:bg-gray-200 text-black border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                type="number"
                onChange={(e) => setAge(e.target.valueAsNumber)}
                min="0"
              />
            </div>
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label className="block tracking-wide text-black text-lg font-bold mb-2">
                Color
              </label>
              <input
                className="appearance-none block w-full hover:bg-gray-200 text-black border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                type="text"
                onChange={(e) => setColor(e.target.value)}
              />
            </div>
          </div>
          <div className="mt-4 justify-center flex">
            <button
              className="hover:bg-green-600 bg-green-800 text-white font-bold px-4 py-2 rounded"
              type="submit"
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Page;
