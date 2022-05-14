import React, { FC } from "react";
import { Link } from "react-router-dom";
import { MdOutlineQuiz, MdOutlineAssignment } from "react-icons/md";
import { GiTeacher } from "react-icons/gi";
import { IoIosSchool } from "react-icons/io";
import { CgProfile } from "react-icons/cg";

const SideBar: FC = () => {
  return (
    <div className="bg-gray-800 h-screen sm:block  w-60 space-y-4 p-4 sticky top-0 flex-shrink-0 ">
      <h1 className="text-3xl font-extrabold text-white">CodeYogi</h1>
      <Link
        to="/lecture"
        className="text-white text-bold flex hover:bg-gray-900"
      >
        <span className="text-2xl mr-2">
          <GiTeacher />
        </span>
        Lecture
      </Link>
      <Link
        to="/assignment"
        className="text-white text-bold flex hover:bg-gray-900"
      >
        {" "}
        <span className=" mr-2 text-2xl">
          <MdOutlineAssignment />{" "}
        </span>
        Assignment
      </Link>
      <Link to="/quiz" className="text-white text-bold flex hover:bg-gray-900">
        <span className=" mr-2 text-2xl">
          <MdOutlineQuiz />
        </span>{" "}
        Quiz
      </Link>
      <Link
        to="/students"
        className="text-white text-bold flex hover:bg-gray-900"
      >
        <span className=" mr-2 text-2xl">
          <IoIosSchool />
        </span>{" "}
        Students
      </Link>
      <Link
        to="/profile"
        className="text-white text-bold flex hover:bg-gray-900"
      >
        <span className=" mr-2 text-2xl">
          <CgProfile />
        </span>
        Profile
      </Link>
    </div>
  );
};

export default SideBar;
