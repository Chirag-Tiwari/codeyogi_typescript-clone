import { createContext } from "react";
import { alert } from "./models/Alert";

type contextType = {
  alertMessages: alert[];
  showAlert: (
    message: string,
    type?: "success" | "error" | "warning",
    timeOut?: number
  ) => void;
  removeAlert: (alert: alert) => void;
};

const AlertContext = createContext<contextType>({
  alertMessages: [],
  showAlert: (
    message: string,
    type?: "success" | "error" | "warning",
    timeOut?: number
  ) => {},
  removeAlert: (alert: alert) => {},
});

export default AlertContext;
