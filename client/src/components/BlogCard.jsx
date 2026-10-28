import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage } from "./ui/avatar";
import { FaRegCalendarAlt } from "react-icons/fa";
import usericon from "@/assets/images/user.png";
import moment from "moment";
import { Link } from "react-router-dom";
import { RouteBlog } from "@/helpers/RouteName";

const BlogCard = ({ props }) => {
  return (
    <Link
      to={RouteBlog(props.category?.slug, props.slug)}
      className="block h-full"
    >
      <Card className="pt-5 h-full">
        <CardContent className="flex flex-col h-full">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Avatar>
                <AvatarImage
                  src={props.author?.avatar || usericon}
                  referrerPolicy="no-referrer"
                />
              </Avatar>
              <span>{props.author?.name}</span>
            </div>
            {props.author?.role === "admin" && (
              <Badge variant="outline" className="bg-violet-500 text-white">
                Admin
              </Badge>
            )}
          </div>

          <div className="my-2">
            {props.featuredImage ? (
              <img
                src={props.featuredImage}
                className="rounded w-full aspect-video object-cover"
              />
            ) : (
              <div className="rounded w-full aspect-video bg-muted" />
            )}
          </div>

          <div className="mt-auto">
            <p className="flex items-center gap-2 mb-2">
              <FaRegCalendarAlt />
              <span>{moment(props.updatedAt).format("DD-MM-YYYY")}</span>
            </p>
            <h2 className="text-2xl font-bold line-clamp-2 min-h-[4rem]">
              {props.title}
            </h2>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default BlogCard;