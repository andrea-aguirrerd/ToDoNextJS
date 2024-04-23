import React from "react";
import NavBar from "../components/NavBar";

const page = () => {
  return (
    <>
    <NavBar/>
   
    <h1 className=" text-4xl text-center font-mono text-white bg-green-900 pt-5 pb-5">Create Element Form</h1>
    <div className="mt-7 flex container max-w-md px-4 justify-center items-center bg-white rounded overflow-hidden shadow-lg mx-auto">
    <form className="w-full max-w-lg py-6 ">
      <div className="flex flex-wrap ">
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
        <label className="block tracking-wide text-gray-700 text-lg font-bold mb-2">
          First Name
        </label>
        <input
          className="appearance-none block w-full hover:bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
          type="text"
          placeholder="Pegasus"
        />
      </div>
      <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
        <label className="block tracking-wide text-gray-700 text-lg font-bold mb-2">
          Age
        </label>
        <input
          className="appearance-none block w-full hover:bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
          type="number"
          placeholder="8"
        />
      </div>
      <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
        <label className="block tracking-wide text-gray-700 text-lg font-bold mb-2">
          Color
        </label>
        <input
          className="appearance-none block w-full hover:bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
          type="text"
          placeholder="Yellow"
        />
      </div>
      </div>
      <button className="hover:bg-blue-500 bg-blue-700 text-white font-bold py-2 px-4 rounded"> Create Element</button>
    </form>
    </div>
    </>
  );
};

export default page;
