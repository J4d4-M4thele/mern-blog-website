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
import { RouteAddBlog, RouteEditCategory } from "@/helpers/RouteName";
import { useFetch } from "@/hooks/useFetch";
import { getEnv } from "@/helpers/getEnv";
import Loading from "@/components/Loading";
import { FaRegEdit } from "react-icons/fa";
import { FaRegTrashAlt } from "react-icons/fa";
import { deleteData } from "@/helpers/handleDelete";
import { showToast } from "@/helpers/showToast";

const BlogDetails = () => {
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
              {/* {categories.length > 0 ? (
                categories.map((category) => (
                  <TableRow key={category._id}>
                    <TableCell>{category.name}</TableCell>
                    <TableCell>{category.slug}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <Button
                          asChild
                          variant="outline"
                          className="hover:bg-violet-500 hover:text-white"
                        >
                          <Link to={RouteEditCategory(category._id)}>
                            <FaRegEdit />
                          </Link>
                        </Button>

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
              )} */}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}

export default BlogDetails