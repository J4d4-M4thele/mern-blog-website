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
import { RouteAddCategory, RouteEditCategory } from "@/helpers/RouteName";
import { useFetch } from "@/hooks/useFetch";
import { getEnv } from "@/helpers/getEnv";
import Loading from "@/components/Loading";
import { FaRegEdit } from "react-icons/fa";
import { FaRegTrashAlt } from "react-icons/fa";

const CategoryDetails = () => {
  const {
    data: categoryData,
    loading,
    error,
  } = useFetch(
    `${getEnv("VITE_API_BASE_URL")}/category/all-categories`,
    {
      method: "get",
      credentials: "include",
    },
    [],
  );

  const categories = categoryData?.categories ?? [];

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
              <Link to={RouteAddCategory}>Add Category</Link>
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Category</TableHead>
                <TableHead>Slug</TableHead>
                <TableHead>Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {categories.length > 0 ? (
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
};

export default CategoryDetails;
