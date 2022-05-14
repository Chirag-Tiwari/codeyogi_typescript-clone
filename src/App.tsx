import { FC, useState } from "react";
import AssignmentList from "./AssignmentList";
import LectureRow from "./LectureRow";
import StudentList from "./StudentList";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import MainLayout from "./MainLayout";
import { uniqueId } from "lodash";
import AlertContext from "./AlertContext";
import { alert } from "./models/Alert";
import ProfileRow from "./ProfileRow";
import AlertList from "./AlertList";

const App: FC = () => {
  const [alertMessages, setAlertMessages] = useState<alert[]>([]);

  const showAlert = (
    message: string,
    type: "success" | "error" | "warning" = "success",
    timeOut = 4
  ) => {
    const id = uniqueId();
    const alert = { message, type, id };
    setAlertMessages([...alertMessages, alert]);

    timeOut &&
      setTimeout(() => {
        removeAlert(alert), timeOut * 1000;
      });
  };

  const removeAlert = (alert: alert) => {
    setAlertMessages((alerts) => {
      return alerts.filter((a) => a !== alert);
    });
  };

  const alertData = { alertMessages, showAlert, removeAlert };

  return (
    <div>
      <AlertContext.Provider value={alertData}>
        <AlertList />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navigate to="/lecture" />} />
            <Route path="/" element={<MainLayout />}>
              <Route path="lecture" element={<LectureRow />} />
              <Route path="assignment" element={<AssignmentList />} />
              <Route path="students" element={<StudentList />} />
              <Route path="profile" element={<ProfileRow />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </AlertContext.Provider>
    </div>
  );
};

export default App;
