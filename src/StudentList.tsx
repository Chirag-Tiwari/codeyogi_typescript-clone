import React, { FC, useEffect, useState } from "react";
import { getStudents } from "./Api";
import Card from "./Card";
import { student } from "./models/Student";
import StudentLayout from "./StudentLayout";

const StudentList: FC = () => {
  const [students, setStudents] = useState<student[]>([]);

  useEffect(() => {
    const promise = getStudents();
    promise.then((student) => setStudents(student));
    console.log("students", students);
  }, []);

  return (
    <Card>
      <div className="flex flex-wrap mx-auto">
        {students.map((s) => (
          <StudentLayout student={s} key={s.id && s.name.first} />
        ))}
        <span className="w-80 h-80 mx-auto"></span>
        <span className="w-80 h-80 mx-auto"></span>
      </div>
    </Card>
  );
};

export default StudentList;
