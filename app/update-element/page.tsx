'use client'
import React, { useState } from 'react'
import NavBar from '../components/NavBar'
import List from '../components/UpdateElementsC/List'
import UpdateForm from '../components/UpdateElementsC/UpdateForm'
import { ElementStruct } from '../utils/types/elementItem'

const UpdateElement = () => {
  const [selectedElement, setSelectedElement] = useState<ElementStruct | null>(null);

  return (
    <>
      <h1
        className="text-center text-4xl pt-5 
            text-white pb-3
            font-mono bg-green-900"
      >
        Update Element
      </h1>
      <List clickedElement={setSelectedElement}/>
      <UpdateForm elementToUpdate={selectedElement}/>
    </>
  )
}

export default UpdateElement