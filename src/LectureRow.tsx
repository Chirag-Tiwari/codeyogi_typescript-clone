import { FC, useEffect, useState } from "react";
import { getLectures } from "./Api";
import LectureLayout from "./LectureLayout";
import { Lecture } from "./models/Lecture";

const LectureRow: FC = () => {
  const [lectures, setLectures] = useState<Lecture[]>([]);

  useEffect(() => {
    const promise = getLectures();
    promise.then((lecture) => setLectures(lecture));
  }, []);

  return (
    <div>
      {lectures.map((l) => (
        <LectureLayout lecture={l} />
      ))}
    </div>
  );
};

export default LectureRow;
