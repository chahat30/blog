import React from 'react'
import {FiMessageSquare,FiEdit2,FiTrash} from 'react-icons/fi'
import {images} from '../../constants'

export default function Comment({comment}) {
  return (
    <div className='flex flex-nowrap items-start gap-x-3 p-3 rounded-lg bg-[#F2F4F5]'>
      <img src={images.postProfile} alt="user profile" className='h-9 w-9 object-cover rounded-full'/>
      <div className='flex flex-col flex-1'>
        <h5 className='font-bold text-dark-hard text-xs'>{comment.user.name}</h5>
        <span className='text-xs text-dark-light'>
        {new Date(comment.createdAt).toLocaleDateString("en-US", {
                  day: "numeric",
                  month: "short",
                  year: "numeric",
                  hour:"2-digit",
                })}
        </span>
        <p className='mt-[10px] font-opensans text-dark-light'>{comment.desc}</p>
        <div className=' flex items-center gap-x-3 text-dark-light font-roboto text-sm mt-3 mb-3'>
            <button className='flex items-center space-x-2'>
                <FiMessageSquare className='w-4 h-auto'/>
                <span>Reply</span>
            </button>
            <button className='flex items-center space-x-2'>
                <FiEdit2 className='w-4 h-auto'/>
                <span>Edit</span>
            </button>
            <button className='flex items-center space-x-2'>
                <FiTrash className='w-4 h-auto'/>
                <span>Delete</span>
            </button>
        </div>
      </div>
    </div>
  )
}
