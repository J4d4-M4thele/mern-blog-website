import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import React from "react";
import { Link } from "react-router-dom";
import { RouteAddBlog, RouteEditBlog } from "@/helpers/RouteName";
import { useFetch } from "@/hooks/useFetch";
import { getEnv } from "@/helpers/getEnv";
import Loading from "@/components/Loading";
import { FaRegEdit } from "react-icons/fa";
import { FaRegTrashAlt } from "react-icons/fa";
import { deleteData } from "@/helpers/handleDelete";
import { showToast } from "@/helpers/showToast";
import moment from "moment";

const BlogDetails = () => {
  const [refreshData, setRefreshData] = useState(false);
  const {
    data: blogData,
    loading,
    error,
  } = useFetch(
    `${getEnv("VITE_API_BASE_URL")}/blog/all-blogs`,
    {
      method: "get",
      credentials: "include",
    },
    [refreshData],
  );

  const handleDelete = (id) => {
    const response = deleteData(`${getEnv("VITE_API_BASE_URL")}/blog/delete/${id}`);
    if (response) {
      setRefreshData(!refreshData);
      showToast("success", "Blog deleted successfully");
    }else {
      showToast("error", "Failed to delete blog");
    }
  }

  const blogs = blogData?.blog ?? [];

  if (loading)
    return (
      <div>
        <Loading />
      </div>
    );

  return (
    <div>
      <Card>
        <CardHeader>
          <div>
            <Button asChild>
              <Link to={RouteAddBlog}>Add Blog Post</Link>
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Author</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Title</TableHead>
                <TableHead>Slug</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {blogs.length > 0 ? (
                blogs.map((blog) => (
                  <TableRow key={blog._id}>
                    <TableCell>{blog.author.name}</TableCell>
                    <TableCell>{blog.category.name}</TableCell>
                    <TableCell>{blog.title}</TableCell>
                    <TableCell>{blog.slug}</TableCell>
                    <TableCell>{moment(blog.updatedAt).format("DD-MM-YYYY")}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <Button
                          asChild
                          variant="outline"
                          className="hover:bg-violet-500 hover:text-white"
                        >
                          <Link to={RouteEditBlog(blog._id)}>
                            <FaRegEdit />
                          </Link>
                        </Button>

                        <Button
                          onClick={() => handleDelete(blog._id)}
                          variant="outline"
                          className="hover:bg-violet-500 hover:text-white"
                        >
                          <FaRegTrashAlt />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={6} className="text-center">
                    No data found
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}

export default BlogDetails