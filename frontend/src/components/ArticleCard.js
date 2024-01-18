import React from "react";
import { BsCheckLg } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import { images } from "../constants";
import { stables } from "../constants";

export default function ArticleCard({ post, className }) {
  return (
    <div
      className={`rounded-xl overflow-hidden shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px] ${className} `}
    >
      <img
        src={post.photo? stables.UPLOAD_FOLDER_BASE_URL + post.photo : images.samplePostImage}
        className="w-full object-cover object-center h-auto md:h-52 lg:h-48 xl:h-60"
        alt="title-img"
      />
      <div className="p-5">
        <h2 className="font-roboto font-bold text-xl text-dark-soft md:text-2xl lg:text-[28px]">
          {post.title}
        </h2>
        <p className="text-dark-light mt-3 text-sm md:text-lg">
          {post.caption}
        </p>
        <div className="flex justify-between flex-nowrap items-center mt-6">
          <div className="flex items-center gap-x-2 md:gap-x-2.5">
            <img
              src={post.user.avatar? stables.UPLOAD_FOLDER_BASE_URL + post.user.avatar : images.userImage}
              alt="post profile"
              className="h-9 w-9 md:h-10 md:w-10 rounded-full"
            />
            <div className="flex flex-col">
              <h4 className="font-bold italic text-dark-soft text-sm md:text-base">
                {post.user.name}
              </h4>
              <div className="flex items-center gap-x-2">
                <span className={` ${post.user.verified ? "bg-[#36B37E]": "bg-red-500"}  w-fit bg-opacity-20 p-1 rounded-full`} >
                  {post.user.verified? <BsCheckLg className="text-[#36B37E] w-2 h-2" /> : <AiOutlineClose className="w-1.5 h-1.5 text-red-500" />}
                </span>
                <span className="italic text-dark-light text-xs md:text-sm">
                  {post.user.verified ? "Verified " : "Unverified "}
                   writer
                </span>
              </div>
            </div>
          </div>
          <span className="font-bold italic text-dark-light text-xs md:text-base">
            {new Date(post.createdAt).getDate()}{" "}
            {new Date(post.createdAt).toLocaleString("default", {
              month: "long",
            })}
          </span>
        </div>
      </div>
    </div>
  );
}
