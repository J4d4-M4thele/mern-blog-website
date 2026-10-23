import React from "react";
import { getEnv } from "@/helpers/getEnv";
import { useFetch } from "@/hooks/useFetch";
import { Avatar, AvatarImage } from "./ui/avatar";
import usericon from "@/assets/images/user.png";
import moment from "moment";
import { useSelector } from "react-redux";

const CommentList = ({ props }) => {
  const user = useSelector((state) => state.user);

  const { data, loading } = useFetch(
    `${getEnv("VITE_API_BASE_URL")}/comment/all-comments/${props.blogId}`,
    {
      method: "get",
      credentials: "include",
    },
  );

  const comments = data?.comments ?? [];

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <h4 className="text-2xl font-bold">
        <span className="me-2">
          {props.newComment ? comments.length + 1 : comments.length}
        </span>
        Comments
      </h4>

      <div className="mt-5">
        {props.newComment && (
          <div className="flex gap-2 mb-3">
            <Avatar>
              <AvatarImage
                src={user?.user?.avatar || usericon}
                referrerPolicy="no-referrer"
              />
            </Avatar>
            <div>
              <p className="font-bold">{user?.user?.name}</p>
              <p>{moment(props.newComment.createdAt).format("DD-MM-YYYY")}</p>
              <div className="pt-3">{props.newComment.comment}</div>
            </div>
          </div>
        )}

        {comments.map((comment) => (
          <div key={comment._id} className="flex gap-2 mb-3">
            <Avatar>
              <AvatarImage
                src={comment.user?.avatar || usericon}
                referrerPolicy="no-referrer"
              />
            </Avatar>

            <div>
              <p className="font-bold">{comment.user?.name}</p>
              <p>{moment(comment.createdAt).format("DD-MM-YYYY")}</p>
              <div className="pt-3">{comment.comment}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommentList;
