import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import React from "react";
import { useFetch } from "@/hooks/useFetch";
import { getEnv } from "@/helpers/getEnv";
import Loading from "@/components/Loading";
import { FaRegTrashAlt } from "react-icons/fa";
import { deleteData } from "@/helpers/handleDelete";
import { showToast } from "@/helpers/showToast";
import usericon from '@/assets/images/user.png'
import moment from 'moment'

const Users = () => {
  const [refreshData, setRefreshData] = useState(false);
  const {
    data,
    loading,
    error,
  } = useFetch(
    `${getEnv("VITE_API_BASE_URL")}/user/all-users`,
    {
      method: "get",
      credentials: "include",
    },
    [refreshData],
  );

  const handleDelete = async (id) => {
    const response = await deleteData(`${getEnv("VITE_API_BASE_URL")}/user/delete/${id}`);
    if (response) {
      setRefreshData(!refreshData);
      showToast("success", "User deleted successfully");
    }else {
      showToast("error", "Failed to delete user");
    }
  }

  const users = data?.users ?? [];

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
                <TableHead>Role</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Avatar</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {data && users.length > 0 ? (
                users.map((user) => (
                  <TableRow key={user._id}>
                    <TableCell>{user?.role}</TableCell>
                    <TableCell>{user?.name}</TableCell>
                    <TableCell>{user?.email}</TableCell>
                    <TableCell>
                        <img src={user?.avatar || usericon} className="w-10 h-10 rounded-full" />
                    </TableCell>
                    <TableCell>{moment(user?.createdAt).format('DD-MM-YYYY')}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <Button
                          onClick={() => handleDelete(user._id)}
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
                    No users found
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

export default Users