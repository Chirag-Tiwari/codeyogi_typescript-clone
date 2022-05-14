import React, { FC } from "react";
import { Lecture } from "./models/Lecture";
import Card from "./Card";
import { HiOutlineExternalLink } from "react-icons/hi";
import MDEditor from "@uiw/react-md-editor";
import { DateTime } from "luxon";

type LectureProps = { lecture: Lecture };

const LectureLayout: FC<LectureProps> = ({ lecture }) => {
  const startTime: Date = new Date(lecture.start_time);
  const endTime: Date = new Date(lecture.end_time);
  const diff = endTime.getTime() - startTime.getTime();
  const duration = new Date(diff).toISOString();
  const durationTime = duration.substring(11, 19);

  return (
    <Card>
      <h1 className="font-medium">
        Lecture #{lecture.id}{" "}
        <span className="font-medium text-gray-500">
          (
          {DateTime.fromISO(lecture.created_at).toLocaleString(
            DateTime.DATE_MED_WITH_WEEKDAY
          )}
          )
        </span>
      </h1>
      <h1 className="text-gray-500">Duration: {durationTime}</h1>
      <div className="mt-3 py-2 font-medium">
        <MDEditor.Markdown className="markdown" source={lecture.topic} />
      </div>
      <div className="flex justify-center">
        <a
          className="text-gray-500 font-medium flex"
          href={lecture.recording_url}
        >
          <span className="text-2xl mr-2">
            <HiOutlineExternalLink />
          </span>
          Watch/Download Recording
        </a>
      </div>
    </Card>
  );
};

export default LectureLayout;
