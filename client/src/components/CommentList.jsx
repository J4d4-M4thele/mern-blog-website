import React from "react";
import { useFetch } from "@/hooks/useFetch";
import { getEnv } from "@/helpers/getEnv";
import { Avatar, AvatarImage } from "./ui/avatar";

const CommentList = ({ props }) => {
  const { data, loading, error } = useFetch(
    `${getEnv("VITE_API_BASE_URL")}/comment/all-comments/${props.blogId}`,
    {
      method: "get",
      credentials: "include",
    },
  );

  console.log(data);

  if (loading) return <div>Loading</div>;

  return (
    <div>
      <h4 className="text-2xl font-bold">
        {data && data.comments.length} Comment(s)
      </h4>
      <div className="mt-5">
        <div className="flex gap-2">
          <Avatar>
            <AvatarImage src="" />
          </Avatar>

          <div>
            <p>Name</p>
            <p>Date</p>
            <div className="pt-3">
                lorem ipsum
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommentList;
