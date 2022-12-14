import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";
import { faSmile } from "@fortawesome/free-regular-svg-icons";


const CommentBar = () => {
  return (
    <div className="flex flex-row justify-between bg-gray-200 mt-6 w-full rounded-md h-10 p-3 placeholder-gray-800">
      <input
        type="text"
        placeholder="Write a comment"
        className="bg-inherit outline-none w-full px-3 placeholder-gray-500"
      />
      <div className="flex justify-around">
        <FontAwesomeIcon icon={faSmile}  className="px-2 text-gray-700" />
        <FontAwesomeIcon icon={faPaperPlane} />
      </div>
    </div>
  );
};

export default CommentBar;
