import React, { FC } from "react";
import cn from "classnames";
import { alert } from "./models/Alert";

type alertProps = { alert: alert; removeAlert: (alert: alert) => void };

const Alert: FC<alertProps> = ({ alert, removeAlert }) => {
  const { type, message } = alert;
  const buttonClasses = cn("bg-green-500 text-white", {
    "bg-red-500 text-white": type === "error",
    "bg-yellow-500 text-white": type === "warning",
  });

  return (
    <div className={buttonClasses}>
      <span className="text-white">{message}</span>
      <button
        onClick={() => {
          removeAlert(alert);
        }}
      >
        X
      </button>
    </div>
  );
};

export default Alert;
