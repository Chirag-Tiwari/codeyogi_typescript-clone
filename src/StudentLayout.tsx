import React, { FC } from "react";
import { student } from "./models/Student";
import { GrTwitter } from "react-icons/gr";
import { AiFillLinkedin } from "react-icons/ai";

type studentProps = { student: student };
const StudentLayout: FC<studentProps> = ({ student }) => {
  return (
    <div className=" bg-white m-3 w-80 h-80 mx-auto ">
      <div>
        <img
          className="h-52 w-72 object-cover rounded-lg"
          src={student.picture.large}
        />
      </div>
      <div>
        <div>
          <h1 className="font-bold text-xl">
            {student.name.title} {student.name.first} {student.name.last}
          </h1>
        </div>
        <h1 className="font-bold text-indigo-500">{student.nat}</h1>
        <div className="flex space-x-4 text-gray-500 text-xl">
          <div>
            <a href={student.email}>
              <GrTwitter />
            </a>
          </div>
          <div>
            <a href={student.email}>
              <AiFillLinkedin />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentLayout;
