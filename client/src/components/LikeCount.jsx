import React, { useEffect, useState } from "react";
import { getEnv } from "@/helpers/getEnv";
import { useFetch } from "@/hooks/useFetch";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { useSelector } from "react-redux";
import { showToast } from "@/helpers/showToast";

const LikeCount = ({ props }) => {
  const [likeCount, setLikeCount] = useState(0);
  const [hasLiked, setHasLiked] = useState(false);
  const user = useSelector((state) => state.user);

  const {
    data: blogLikeCount,
    loading,
    error,
  } = useFetch(
    `${getEnv("VITE_API_BASE_URL")}/blog-like/get-count/${props.blogId}/${user && user.isLoggedIn ? user.user._id : ''}`,
    {
      method: "get",
      credentials: "include",
    },
  );

  useEffect(() => {
    if (blogLikeCount) {
      setLikeCount(blogLikeCount.likeCount ?? 0);
      setHasLiked(blogLikeCount.isUserLiked ?? false);
    }
  }, [blogLikeCount]);

  const handleLike = async () => {
    try {
      if (!user.isLoggedIn) {
        return showToast("error", "Please login into your account.");
      }

      const response = await fetch(
        `${getEnv("VITE_API_BASE_URL")}/blog-like/like`,
        {
          method: "post",
          credentials: "include",
          headers: { "Content-type": "application/json" },
          body: JSON.stringify({ user: user.user._id, blogId: props.blogId }),
        },
      );

      if (!response.ok) {
        showToast("error", response.statusText);
      }

      const responseData = await response.json();
      setLikeCount(responseData.likeCount);
      setHasLiked(!hasLiked);
    } catch (error) {
      showToast("error", error.message);
    }
  };

  return (
    <button
      onClick={handleLike}
      type="button"
      className="flex justify-between items-center gap-1"
    >
      {!hasLiked ? <FaRegHeart /> : <FaHeart fill="red" />}
      {likeCount}
    </button>
  );
};

export default LikeCount;
