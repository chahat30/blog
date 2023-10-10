import React, { useState } from 'react'

export default function CommentForm({btnLabel}) {

    const[text,setText]=useState("");

    const onSubmitHandler=(e)=>{
        e.preventDefault();
    }

    const onChangeHandler=(e)=>{
        setText(e.target.value)
    }

  return (
    <form onSubmit={onSubmitHandler}>
      <div className='flex flex-col items-end border border-primary rounded-lg p-4'>
        <textarea
          className="w-full focus:outline-none"
          rows="5"
          placeholder="Leave your comment here"
          value={text}
          onChange={onChangeHandler}
        />
        <button type="submit" className='px-6 py-2.5 rounded-lg bg-primary text-white font-semibold mt-2'>{btnLabel}</button>
      </div>
    </form>
  );
}
