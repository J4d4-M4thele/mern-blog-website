import React from 'react'
import { FaComments } from "react-icons/fa";

const Comment = () => {
  return (
    <div>
        <h4 className='flex items-center gap-2'>
            <FaComments className='text-violet-500'/> Comment
        </h4>
    </div>
  )
}

export default Comment