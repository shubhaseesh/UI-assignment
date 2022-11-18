import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const CommentList = () => {
  return (
    <div className="mt-6">
      <div className="flex flex-row m-1 mb-6">
        <img
          src={
            "https://images.pexels.com/photos/1139743/pexels-photo-1139743.jpeg?auto=compress&cs=tinysrgb&w=600"
          }
          alt="old_man"
          className="rounded-full h-16 w-16"
        />
        <div className="mx-4">
          <span className="font-light">
            <span className="font-bold mr-2">Leslie Alexnder</span>25 minutes ago
          </span>
          <p>Lorem ipsum dolor sit amet, consectetur.</p>
          <span>
            <FontAwesomeIcon icon={faHeart} className="text-red-600" />
            <span className="mx-3">12</span>
            <span className="font-bold">Reply</span>
          </span>
        </div>
      </div>
      <div className="flex flex-row m-1">
        <img
          src={
            "https://images.pexels.com/photos/3018993/pexels-photo-3018993.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          }
          alt="young_girl"
          className="rounded-full h-16 w-16"
        />
        <div className="mx-4">
          <span className="font-light">
            <span className="font-bold mr-2">Amily Clark</span>3 minutes ago
          </span>
          <p>Dolor sit ameteiusmod consectetur adipiscing elit.</p>
          <span>
            <FontAwesomeIcon icon={faHeart} className="text-gray-300" />
            <span className="mx-3">0</span>
            <span className="font-bold">Reply</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default CommentList;
