import React from "react";
import { FiMessageSquare, FiEdit2, FiTrash } from "react-icons/fi";
import { images } from "../../constants";
import CommentForm from "./CommentForm";

export default function Comment({
  comment,
  logginedUserId,
  affectedComment,
  setAffectedComment,
  addCommentHandler,
  parentId = null,
}) {
  const isUserLoggined = Boolean(logginedUserId);
  const BelongsToUser = logginedUserId === comment.user._id;
  const isReplying =
    affectedComment &&
    affectedComment.type === "replying" &&
    affectedComment._id === comment._id;
  const repliedCommentId = parentId ? parentId : comment._id;
  const replyOnUserId = comment.user._id;

  return (
    <div className="flex flex-nowrap items-start gap-x-3 p-3 rounded-lg bg-[#F2F4F5]">
      <img
        src={images.postProfile}
        alt="user profile"
        className="h-9 w-9 object-cover rounded-full"
      />
      <div className="flex flex-col flex-1">
        <h5 className="font-bold text-dark-hard text-xs">
          {comment.user.name}
        </h5>
        <span className="text-xs text-dark-light">
          {new Date(comment.createdAt).toLocaleDateString("en-US", {
            day: "numeric",
            month: "short",
            year: "numeric",
            hour: "2-digit",
          })}
        </span>
        <p className="mt-[10px] font-opensans text-dark-light">
          {comment.desc}
        </p>
        <div className=" flex items-center gap-x-3 text-dark-light font-roboto text-sm mt-3 mb-3">
          {isUserLoggined && (
            <button
              className="flex items-center space-x-2"
              onClick={() =>
                setAffectedComment({ type: "replying", _id: comment._id })
              }
            >
              <FiMessageSquare className="w-4 h-auto" />
              <span>Reply</span>
            </button>
          )}
          {BelongsToUser && (
            <>
              <button className="flex items-center space-x-2">
                <FiEdit2 className="w-4 h-auto" />
                <span>Edit</span>
              </button>
              <button className="flex items-center space-x-2">
                <FiTrash className="w-4 h-auto" />
                <span>Delete</span>
              </button>
            </>
          )}
        </div>
        {isReplying && (
          <CommentForm
            btnLabel={"Reply"}
            formSubmitHandler={(value) =>
              addCommentHandler(value, repliedCommentId, replyOnUserId)
            }
            formCancelHandler={()=>setAffectedComment(null)}
          />
        )}
      </div>
    </div>
  );
}
