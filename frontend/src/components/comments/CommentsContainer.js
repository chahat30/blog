import React, { useState } from "react";
import CommentForm from "./CommentForm";
import Comment from "./Comment";
import {useMutation} from '@tanstack/react-query';
import {useSelector} from 'react-redux';
import { createComment } from "../../services/index/comments";
import toast from 'react-hot-toast';

export default function CommentsContainer({ className, logginedUserId, comments, postSlug }) {
  
  const userState = useSelector(state => state.user);
  const [affectedComment, setAffectedComment] = useState(null);

  const {mutate: mutateNewComment, isLoading: isLoadingNewComment} = useMutation({
    mutationFn: ({token, desc, slug, parent, replyOnUser}) =>{
      return createComment({token, desc, slug, parent, replyOnUser});
    },
    onSuccess: ()=>{
      toast.success("Your comment is sent successfully, it will be visible after comfirmation from the admin");
    },
    onError: (error)=>{
      token.error(error.message);
    }
  })

  const addCommentHandler = (text, parent = null, replyOnUser = null) => {
    mutateNewComment({desc: text, parent, replyOnUser, token: userState.userInfo.token, slug:postSlug });
    setAffectedComment(null);
  };

  const updateCommentHandler=(value,commentId)=>{
    setAffectedComment(null);
  }

  const deleteCommentHandler= (commentId) => {
   
  }

  return (
    <div className={`${className}`}>
      <CommentForm
        btnLabel="Send"
        formSubmitHandler={(text) => addCommentHandler(text)}
        loading={isLoadingNewComment}
      ></CommentForm>
      <div className="space-y-4 mt-8">
        {comments.map((comment) => (
          <Comment
            key={comment._id}
            comment={comment}
            logginedUserId={logginedUserId}
            affectedComment={affectedComment}
            setAffectedComment={setAffectedComment}
            addCommentHandler={addCommentHandler}
            updateComment={updateCommentHandler}
            deleteComment={deleteCommentHandler}
            replies={comment.replies}
          />
        ))}
      </div>
    </div>
  );
}
