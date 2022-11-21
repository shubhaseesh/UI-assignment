import React from "react";
import Image from "../assets/person.jpg";
const UserHeader = () => {
  return (
    <div className="flex flex-row">
      <div className="">
        <img src={Image} alt="person" className="rounded-full h-14 w-14" />
      </div>
      <div className="flex flex-col items-center p-3 ">
        <p className="font-bold">Wade Warren</p>
        <p className="text-slate-700">July 17, 2018</p>
      </div>
    </div>
  );
};

export default UserHeader;
