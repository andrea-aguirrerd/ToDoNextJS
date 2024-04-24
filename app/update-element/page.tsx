'use client'
import React from 'react'
import NavBar from '../components/NavBar'
import List from '../components/UpdateElementsC/List'
import UpdateForm from '../components/UpdateElementsC/UpdateForm'

const UpdateElement = () => {
  return (
    <>
      <h1
        className="text-center text-4xl pt-5 
            text-white pb-3
            font-mono bg-green-900"
      >
        Update Element
      </h1>
      <List/>
      <UpdateForm/>
    </>
  )
}

export default UpdateElement