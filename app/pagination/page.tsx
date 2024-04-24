"use client";

import React, { useState, useEffect } from "react";
import NavBar from "../components/NavBar";

interface CharacterStruct {
  id: number;
  name: string;
  image: string;
  species: string;
}
const PaginationComponent = () => {
  const [characters, setCharacters] = useState<CharacterStruct[]>([]);
  const [info, setInfo] = useState({
    next: "",
    prev: "",
  });

  const [currentPageUrl, setCurrentPageUrl] = useState(
    "https://rickandmortyapi.com/api/character/"
  );

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(currentPageUrl);
      const data = await response.json();
      setCharacters(data.results);
      setInfo(data.info);
    };

    fetchData();
  }, [currentPageUrl]);

  const handlePrev = () => {
    setCurrentPageUrl(info.prev);
  };

  const handleNext = () => {
    setCurrentPageUrl(info.next);
  };

  return (
    <>
      <h1
        className="text-center text-4xl pt-5 
            text-white pb-3
            font-mono bg-green-900"
      >
        Rick and Morty Characters
      </h1>
      <div className="container mx-auto px-4 ">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
          {characters.map((character) => (
            <div
              key={character.id}
              className="bg-white rounded overflow-hidden shadow-lg"
            >
              <img
                src={character.image}
                alt={character.name}
                className="w-full h-48 object-cover"
              />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2 text-black">
                  {character.name}
                </div>
                <p className="text-gray-700 text-base">{character.species}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center gap-4 mb-5">
          <button
            onClick={handlePrev}
            disabled={!info.prev}
            className="hover:bg-green-500 bg-green-700 text-white font-bold py-2 px-4 rounded"
          >
            Prev
          </button>
          <button
            onClick={handleNext}
            disabled={!info.next}
            className=" hover:bg-green-500 bg-green-700 text-white font-bold py-2 px-4 rounded"
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default PaginationComponent;
