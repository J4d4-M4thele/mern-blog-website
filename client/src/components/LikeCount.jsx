import React from "react";
import { FaRegHeart } from "react-icons/fa";

const LikeCount = ({props}) => {
  return (
    <button type="button" className="flex justify-between items-center gap-1">
      <FaRegHeart />
      {/* {data && data.commentCount} */}
      0
    </button>
  );
};

export default LikeCount;
