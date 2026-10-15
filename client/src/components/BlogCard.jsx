import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useSelector } from "react-redux";
import { Avatar, AvatarImage } from "./ui/avatar";
import { FaRegCalendarAlt } from "react-icons/fa";

const BlogCard = () => {
  const user = useSelector((state) => state.user);
  return (
    <Card className="pt-5">
      <CardContent>
        <div className="flex items-center justify-between">
          <div className="flex justify-between items-center">
            <Avatar>
              <AvatarImage src="" />
              <span>Username</span>
            </Avatar>
          </div>
          {user && user.user.role === "admin" && (
            <Badge variant="outline" className="bg-violet-500">
              Admin
            </Badge>
          )}
        </div>

        <div></div>

        <div>
          <p>
            <FaRegCalendarAlt />
            <span>Date</span>
          </p>
          <h2 className="text-2xl font-bold line-clamp-2">Title</h2>
        </div>
      </CardContent>
    </Card>
  );
};

export default BlogCard;
