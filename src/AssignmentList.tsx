import React, { useEffect, useState } from "react";
import { getAssignment } from "./Api";
import AssignmentLayout from "./AssignmentLayout";
import { Assignment } from "./models/Assignment";

const AssignmentList = () => {
  const [assignments, setAssignments] = useState<Assignment[]>([]);

  useEffect(() => {
    const promise = getAssignment();
    promise.then((assignments) => setAssignments(assignments));
  }, []);
  return (
    <div>
      {assignments.map((a) => (
        <AssignmentLayout assignment={a} />
      ))}
    </div>
  );
};

export default AssignmentList;
