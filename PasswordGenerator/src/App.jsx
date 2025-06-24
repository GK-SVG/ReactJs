import { useState, useCallback } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numbrs, setNumbers] = useState(false)
  const [characters, setCharacters] = useState(false)
  const [password, setPassword] = useState('')

  const generatePassword = useCallback(() => {
    const lower = 'abcdefghijklmnopqrstuvwxyz'
    const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const numbers = '0123456789'
    const special = '!@#$%^&*()_+[]{}|;:,.<>?'
    let characters = lower + upper
    if (numbrs) characters += numbers
    if (characters) characters += special
    let password = ''
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length)
      password += characters[randomIndex]
    }
    setPassword(password)
  }, [length, numbrs, characters, setPassword])

  return (
    <>
      <h1 className='text-4xl text-center'>Password Generator</h1>
      <div className='w-full mx-w-md shadow-md p-6 mt-4 rounded-lg bg-gray-600'>
        <input type="text" value={password} readOnly className='border border-gray-300 p-2 rounded' />
        <div className='flex justify-center mt-4'>
          <input
            type='range'
            min='8'
            max='20'
            value={length}
            onChange={(e) => setLength(e.target.value)}
            className='border border-gray-300 p-2 rounded'
          />
          <span className='ml-2 text-orange-500 text-md mt-1'>Length ({length})</span>
          <label className='mx-4 text-orange-500 mt-1'>
            <input
              className='mr-2'
              type='checkbox'
              checked={numbrs}
              onChange={(e) => setNumbers(e.target.checked)}
            />
            Include Numbers
          </label>
          <label className='text-orange-500 mt-1'>
            <input
              className='mr-2'
              type='checkbox'
              checked={characters}
              onChange={(e) => setCharacters(e.target.checked)}
            />
            Include Special Characters
          </label>
        </div>
      </div>
    </>
  )
}

export default App
