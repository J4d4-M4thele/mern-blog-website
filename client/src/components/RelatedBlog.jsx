import React from "react";
import { useFetch } from "@/hooks/useFetch";
import { getEnv } from "@/helpers/getEnv";

const RelatedBlog = ({ props }) => {
  const { data, loading } = useFetch(
    `${getEnv("VITE_API_BASE_URL")}/blog/get-related-blog/${props.category}`,
    {
      method: "get",
      credentials: "include",
    },
  );

  return (
    <div>
      <h2 className="text-2xl font-bold">Related Blogs</h2>
      <div>
        <div className="flex items-center gap-2">
          <img />
          <h4></h4>
        </div>
      </div>
    </div>
  );
};

export default RelatedBlog;
