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
import { useFetch } from "@/hooks/useFetch";
import { getEnv } from "@/helpers/getEnv";
import Loading from "@/components/Loading";
import { FaRegEdit } from "react-icons/fa";
import { FaRegTrashAlt } from "react-icons/fa";
import { deleteData } from "@/helpers/handleDelete";
import { showToast } from "@/helpers/showToast";

const Comments = () => {
  const [refreshData, setRefreshData] = useState(false);
  const {
    data,
    loading,
    error,
  } = useFetch(
    `${getEnv("VITE_API_BASE_URL")}/comment/all-comments`,
    {
      method: "get",
      credentials: "include",
    },
    [refreshData],
  );

  const handleDelete = (id) => {
    const response = deleteData(`${getEnv("VITE_API_BASE_URL")}/comment/delete/${id}`);
    if (response) {
      setRefreshData(!refreshData);
      showToast("success", "Comment deleted successfully");
    }else {
      showToast("error", "Failed to delete comment");
    }
  }

  const comments = data?.comments ?? [];

  console.log(data);
  
  if (loading)
    return (
      <div>
        <Loading />
      </div>
    );

  return (
    <div>
      <Card>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Blog</TableHead>
                <TableHead>Comment By</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Comment</TableHead>
                <TableHead>Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {comments && comments.length > 0 ? (
                comments.map((comment) => (
                  <TableRow key={comment._id}>
                    <TableCell>{comment.blogId?.title}</TableCell>
                    <TableCell>{comment.user?.name}</TableCell>
                    <TableCell>{comment.createdAt}</TableCell>
                    <TableCell>{comment.comment}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <Button
                          onClick={() => handleDelete(category._id)}
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
                  <TableCell colSpan={3} className="text-center">
                    No data found
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}

export default Comments