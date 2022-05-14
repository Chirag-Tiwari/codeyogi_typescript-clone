import React, { FC, useContext } from "react";
import Alert from "./Alert";
import AlertContext from "./AlertContext";

const AlertList: FC = () => {
  const { alertMessages, removeAlert } = useContext(AlertContext);
  return (
    <div>
      {alertMessages.map((a) => (
        <Alert alert={a} removeAlert={removeAlert} />
      ))}
    </div>
  );
};

export default AlertList;
