import React from "react";
import { getEnv } from "@/helpers/getEnv";
import { useFetch } from "@/hooks/useFetch";
import { FaRegHeart } from "react-icons/fa";

const LikeCount = ({ props }) => {
  const { data: blogLikeCount, loading, error } = useFetch(
    `${getEnv("VITE_API_BASE_URL")}/blog-like/get-count/${props.blogId}`,
    {
      method: "get",
      credentials: "include",
    },
  );
  return (
    <button type="button" className="flex justify-between items-center gap-1">
      <FaRegHeart /> 
      {blogLikeCount && blogLikeCount.likeCount}
    </button>
  );
};

export default LikeCount;
