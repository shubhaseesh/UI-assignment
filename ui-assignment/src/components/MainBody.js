import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const MainBody = () => {
  return (
    <div className="mt-4 p-1">
      <h1 className="text-start font-bold text-2xl mb-4">
        Web Design templates Selection
      </h1>
      <div className="grid gap-1">
        <div className="grid grid-cols-3 gap-1">
          <img
            className="rounded-tl"
            src="https://images.pexels.com/photos/167699/pexels-photo-167699.jpeg?auto=compress&cs=tinysrgb&w=300"
            alt="img1"
          />
          <img
            src="https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?auto=compress&cs=tinysrgb&w=300"
            alt="img2"
          />
          <img
            className="rounded-tr"
            src="https://images.pexels.com/photos/2775196/pexels-photo-2775196.jpeg?auto=compress&cs=tinysrgb&w=300"
            alt="img3"
          />
        </div>
        <div className="grid grid-cols-2 gap-1">
          <img
            className="rounded-bl"
            src="https://images.pexels.com/photos/2559941/pexels-photo-2559941.jpeg?auto=compress&cs=tinysrgb&w=300"
            alt="img4"
          />
          <img
            className="rounded-br"
            src="https://images.pexels.com/photos/2559941/pexels-photo-2559941.jpeg?auto=compress&cs=tinysrgb&w=300"
            alt="img5"
          />
        </div>
      </div>
      <p className="mt-2">
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout. The point of
        infancy.
      </p>
      <div className="flex flex-row mt-4">
        <div>
          <FontAwesomeIcon icon={faHeart} className='text-red-600'/>
        </div>
        <p className="px-2">34</p>
      </div>
    </div>
  );
};

export default MainBody;
