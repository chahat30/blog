import React, { useEffect, useState } from 'react'
import CommentForm from './CommentForm'
import { getCommentsData } from '../../data/comments';
import Comment from './Comment';

export default function CommentsContainer({className,logginedUserId}) {

  const [comments,setComments]=useState([]);
  const mainComments=comments.filter((comment)=>comment.parent===null);

  console.log(comments);
  
  useEffect(()=>{
    (async()=>{
      const commendData=await getCommentsData();
      setComments(commendData);
    })()                           //function runs itself, no need to call
  },[]);

    const addCommentHandler=(text,parent=null,replyOnUser=null)=>{
      const newComment={
        _id: "10",
        user: {
          _id: "a",
          name: "Mohammad Rezaii",
        },
        desc:text,
        post: "1",
        parent: parent,
        replyOnUser: replyOnUser,
        createdAt: "2022-12-31T17:22:05.092+0000",
      };
      setComments((currState)=>{
        return [newComment,...currState];
      });
    };

  return (
    <div className={`${className}`}>
      <CommentForm btnLabel="Send" formSubmitHandler={(text)=>addCommentHandler(text)}></CommentForm>
      <div className='space-y-4 mt-8'>
        {mainComments.map((comment)=>(
          <Comment comment={comment} logginedUserId={logginedUserId}/>
        ))}
      </div>
    </div>
  )
}
