import React from 'react'
import CommentForm from './CommentForm'

export default function CommentsContainer({className}) {
  return (
    <div className={`${className}`}>
      <CommentForm btnLabel="Send"></CommentForm>
    </div>
  )
}
