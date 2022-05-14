import axios from "axios";
import { Assignment } from "./models/Assignment";
import { Lecture } from "./models/Lecture";
import { student } from "./models/Student";

const codeyogi_api_Base_URL = "https://api.codeyogi.io/";
const RandomUsers_Base_URL = "https://randomuser.me/api/";

export const getLectures = async () => {
  const lecturePromise = await axios.get<Lecture[]>(
    codeyogi_api_Base_URL + "batches/1/sessions",
    { withCredentials: true }
  );
  const lectures = lecturePromise.data;
  return lectures;
};

export const getAssignment = async () => {
  const AssignmentPromise = await axios.get<Assignment[]>(
    codeyogi_api_Base_URL + "batches/1/assignments",
    { withCredentials: true }
  );
  const assignments = AssignmentPromise.data;
  return assignments;
};

export const getStudents = async () => {
  const studentPromise = await axios.get<{ results: student[] }>(
    RandomUsers_Base_URL + "?results=13"
  );
  const students = studentPromise.data.results;
  return students;
};

export const getProfile = () => {
  const profilePromise = axios.get(codeyogi_api_Base_URL + "me", {
    withCredentials: true,
  });
  return profilePromise.then((profile) => {
    const myProfile = profile.data;
    return myProfile;
  });
};

// const localStore = (data) => {
//   localStorage.setItem("data", data);
// };
