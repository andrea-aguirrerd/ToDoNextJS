"use client";
import { ELEMENTS_BASEURL } from "@/app/api/apiEndpoints";
import { ElementStruct } from "@/app/utils/types/elementItem";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";


interface UpdateFormProps{
  elementToUpdate:ElementStruct|null
}
interface UpdateFormProps {
  elementToUpdate: ElementStruct | null;
}

const UpdateForm = ({ elementToUpdate }: UpdateFormProps) => {
  const [name, setName] = useState('');
  const [age, setAge] = useState(0);
  const [colour, setColor] = useState('');

  useEffect(() => {
    if (elementToUpdate) {
      setName(elementToUpdate.name);
      setAge(elementToUpdate.age);
      setColor(elementToUpdate.colour);
    }
  }, [elementToUpdate]);

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleAgeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAge(parseInt(e.target.value, 10));
  };

  const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setColor(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const submitData = { name, age, colour };

    try {
      const res = await fetch(`${ELEMENTS_BASEURL}${elementToUpdate?._id}`, {
        method: 'PUT',
        body: JSON.stringify(submitData),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (res.ok) {
        toast.success('Element updated successfully!');
      } else {
        throw new Error('Failed to update');
      }
    } catch (error) {
      toast.error('Error updating the element');
    }
  };

  return (
    <div className="mt-7 flex flex-col items-center container max-w-md px-4 bg-white rounded overflow-hidden shadow-lg mx-auto">
      <form className="w-full max-w-lg py-6" onSubmit={handleSubmit}>
        <div className="flex flex-wrap w-full">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block tracking-wide text-gray-700 text-lg font-bold mb-2">
              First Name
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              type="text"
              value={name}
              onChange={handleNameChange}
            />
          </div>
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block tracking-wide text-black text-lg font-bold mb-2">
              Age
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-black border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              type="number"
              min="0"
              value={age}
              onChange={handleAgeChange}
            />
          </div>
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block tracking-wide text-black text-lg font-bold mb-2">
              Color
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-black border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              type="text"
              value={colour}
              onChange={handleColorChange}
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
  );
};

export default UpdateForm;
