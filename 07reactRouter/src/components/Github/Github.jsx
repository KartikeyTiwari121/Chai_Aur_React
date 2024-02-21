import React, { useState } from 'react'
import { useLoaderData } from 'react-router-dom'
function Github() {
    const data = useLoaderData();

    // const [data, setData] = useState([])
    // useState(()=>{
    //     fetch('https://api.github.com/users/KartikeyTiwari121')
    //     .then(response => response.json() )
    //     .then(data => setData(data) )
    // }, [])

    return (
       <div className=' text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github Followers: {data.followers}
       <div className='flex w-full justify-center items-center'>
        <img src={data.avatar_url} alt="Profile Image" />
       </div>
       </div>
    )
}

export default Github

//Not good way to do like, instead make separate components for it.
export const githubInfoLoader = async () => {
    const response = await fetch("https://api.github.com/users/KartikeyTiwari121")
    return response.json()
}
