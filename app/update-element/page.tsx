'use client'
import React, { useState } from 'react'
import UpdateForm from '../components/update-element-c/update-form'
import { ElementStruct } from '../utils/types/elementItem'
import List from '../components/update-element-c/List'

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