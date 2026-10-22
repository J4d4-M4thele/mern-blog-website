import React from "react";
import { getEnv } from "@/helpers/getEnv";
import { useFetch } from "@/hooks/useFetch";
import { FaRegComment } from "react-icons/fa";

const CommentCount = ({props}) => {
  const { data, loading } = useFetch(
    `${getEnv("VITE_API_BASE_URL")}/comment/get-count/${props.blogId}`,
    {
      method: "get",
      credentials: "include",
    },
  );
  console.log(data);
  
  return (
    <button type="button" className="flex justify-between items-center gap-1">
        <FaRegComment />
        {data && data.commentCount}
    </button>
  )
};

export default CommentCount;
