import React, { FC } from "react";
import { ButtonProps } from "./models/Button";

const Button: FC<ButtonProps> = ({ children }) => {
  return (
    <button className="px-8 py-2 text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 items-center">
      {children}
    </button>
  );
};

export default Button;
