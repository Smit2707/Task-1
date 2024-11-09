import React from 'react'
import Card from './Card'

const Cards = () => {
  return (
    <div className='w-[95%] mx-auto flex justify-center items-center xl:flex-row flex-col gap-3'>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
    </div>
  )
}

export default Cards