import React from "react";
import { useParams } from "react-router-dom";
import { decode } from "entities";
import Loading from "@/components/Loading";
import Comment from "@/components/Comment";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import usericon from "@/assets/images/user.png";
import { getEnv } from "@/helpers/getEnv";
import { useFetch } from "@/hooks/useFetch";
import moment from "moment";
import CommentCount from "@/components/CommentCount";

const SingleBlogDetails = () => {
  const { blog } = useParams();

  const { data, loading } = useFetch(
    `${getEnv("VITE_API_BASE_URL")}/blog/get-blog/${blog}`,
    { method: "get", credentials: "include" },
    [blog],
  );

  if (loading) return <Loading />;

  const post = data?.blog;

  return (
    <div className="flex flex-col lg:flex-row justify-between gap-10 lg:gap-20">
      {post ? (
        <div className="border rounded w-full lg:w-[70%] p-5">
          <h1 className="text-2xl font-bold mb-5">{post.title}</h1>

          <div className="flex justify-between items-center">
            <div className="flex justify-between items-center gap-5">
              <Avatar>
                <AvatarImage src={data.blog.author.avatar} />
              </Avatar>
              <div>
                <p className="font-bold">{data.blog.author.name}</p>
                <p>Date: {moment(data.blog.createdAt).format("DD-MM-YYYY")}</p>
              </div>
            </div>
            <div className="flex justify-between items-center gap-5">
              {/* <LikeCount props={{ blogId: data.blog._id }} /> */}
              <CommentCount props={{ blogId: data.blog._id }} />
            </div>
          </div>

          {post.featuredImage && (
            <div className="my-5">
              <img src={post.featuredImage} className="rounded w-full" />
            </div>
          )}

          <div
            dangerouslySetInnerHTML={{
              __html: decode(post.blogContent || ""),
            }}
          />

          <div className="border-t mt-5 pt-5">
            <Comment props={{ blogId: post._id }} />
          </div>
        </div>
      ) : (
        <div className="w-full lg:w-[70%]">Blog not found.</div>
      )}

      <div className="border rounded w-full lg:w-[30%]"></div>
    </div>
  );
};

export default SingleBlogDetails;
