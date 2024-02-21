import React from 'react'
import { useParams } from 'react-router-dom'
export default function User() {
    const {userid} = useParams()
    return (
            <div className=' bg-gray-400 text-3xl p-4 font-bold'>User: {userid}</div>
    )
}
