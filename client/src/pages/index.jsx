import { useFetch } from "@/hooks/useFetch";
import React from "react";
import { getEnv } from "@/helpers/getEnv";
import Loading from "@/components/Loading";
import BlogCard from "@/components/BlogCard";

const index = () => {
  const {
    data: blogData,
    loading,
    error,
  } = useFetch(`${getEnv("VITE_API_BASE_URL")}/blog/blogs`, {
    method: "get",
    credentials: "include",
  });

  const blogs = Array.isArray(blogData)
    ? blogData
    : (blogData?.blog ?? blogData?.blogs ?? []);

  if (loading) return <Loading />;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-10">
      {blogs.length > 0 ? (
        blogs.map((blog) => <BlogCard key={blog._id} props={blog} />)
      ) : (
        <div>Data Not Found.</div>
      )}
    </div>
  );
};

export default index;
