import React from "react";

const page = () => {
  return (
    <form className="w-full max-w-lg ">
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
  );
};

export default page;
