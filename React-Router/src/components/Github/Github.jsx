import React from 'react'
import { useLoaderData } from 'react-router-dom'


function Github() {
    const data = useLoaderData()
  return (
    <div className="bg-gray-700 text-center p-4">
        <span className='text-white text-xl'>Github Followers : {data.followers}</span>
        <img src={data.avatar_url} alt="Github Profile Image" />
    </div>

  )
}

export default Github

export async function githubUserInfo(){
    const response = await fetch('https://api.github.com/users/hiteshchoudhary')
    return response.json()
}