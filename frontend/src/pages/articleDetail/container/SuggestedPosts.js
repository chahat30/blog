import React from 'react'
import {Link} from 'react-router-dom'

export default function SuggestedPosts({className,header, posts=[],tags}) {
  return (
    <div
      className={`w-full shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px] rounded-lg p-4 ${className}`}
    >
      <h2 className="font-roboto font-medium text-dark-hard">{header}</h2>
      <div className="grid gap-y-5 mt-5">
        {posts.map((item) => (
          <div
            key={item._id}
            className="flex space-x-3 flex-nowrap items-center"
          >
            <img
              className="aspect-square object-cover rounded-lg w-1/5"
              src={item.image}
              alt="laptop"
            />
            <div className="text-sm font-roboto font-medium text-dark-hard">
              <h3 className="">{item.title}</h3>
              <span className='text-xs opacity-60'>
                {new Date(item.createdAt).toLocaleDateString("en-US", {
                  day: "numeric",
                  month: "short",
                  year: "numeric",
                })}
              </span>
            </div>
          </div>
        ))}
      </div>
      <h2 className='font-roboto font-medium text-dark-hard mt-8'>Tags</h2>
      <div className="flex flex-wrap gap-x-2 gap-y-2 mt-4">
      {tags.map((item)=>(
        <Link to="/" className='inline-block rounded-lg px-3 py-1.5 bg-primary font-roboto text-white text-xs'>{item}</Link>
      ))}
      </div>
    </div>
  );
}
