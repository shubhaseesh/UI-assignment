import React from "react";
import Image from "../assets/person.jpg";
const UserHeader = () => {
  return (
    <div className="flex flex-row">
      <div className="">
        <img src={Image} alt="person" className="rounded-full h-14 w-14" />
      </div>
      <div className="flex flex-col items-center p-3 text-start">
        <h2 className="font-bold">Wade Warren</h2>
        <h2 className="font-thin">July 17, 2018</h2>
      </div>
    </div>
  );
};

export default UserHeader;
