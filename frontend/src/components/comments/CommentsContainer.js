import React, { useEffect, useState } from "react";
import CommentForm from "./CommentForm";
import { getCommentsData } from "../../data/comments";
import Comment from "./Comment";

export default function CommentsContainer({ className, logginedUserId, comments }) {
  
  const [affectedComment, setAffectedComment] = useState(null);

  const addCommentHandler = (text, parent = null, replyOnUser = null) => {
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
