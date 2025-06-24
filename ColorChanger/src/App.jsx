import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState('bg-blue-500')
  document.body.className = color

  return (
    <>
      <h1 className='text-4xl font-bold text-center'>Color Changer</h1>
      <div className='flex justify-center mt-4 bg-white p-4 rounded shadow-lg'>
        <button className='bg-blue-500 text-white px-4 py-2 rounded' onClick={() => {
          setColor('bg-blue-500')
        }}>Blue</button>
        <button className='bg-red-500 text-white px-4 py-2 rounded ml-2' onClick={() => {
          setColor('bg-red-500')
        }}>Red</button>
        <button className='bg-green-500 text-white px-4 py-2 rounded ml-2' onClick={() => {
          setColor('bg-green-500')
        }}>Green</button>
        <button className='bg-yellow-500 text-white px-4 py-2 rounded ml-2' onClick={() => {
          setColor('bg-yellow-500')
        }}>Yellow</button>
        <button className='bg-purple-500 text-white px-4 py-2 rounded ml-2' onClick={() => {
          setColor('bg-purple-500')
        }}>Purple</button>
        <button className='bg-gray-500 text-white px-4 py-2 rounded ml-2' onClick={() => {
          setColor('bg-gray-500')
        }}>Gray</button>
        <button className='bg-black text-white px-4 py-2 rounded ml-2' onClick={() => {
          setColor('bg-black')
        }}>Black</button>
      </div>
    </>
  )
}

export default App
