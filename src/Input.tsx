import { useField } from "formik";
import React, { FC, InputHTMLAttributes } from "react";
import { number } from "yup";
import { InputProps } from "./models/Input";

const Input: FC<InputProps> = ({ name, id, type, ...rest }) => {
  const [field, meta] = useField(name);
  const { touched, error } = meta;

  return (
    <div>
      <input
        {...rest}
        {...field}
        className="w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 bg-gray-50 rounded-md"
      />
      <div className="h-2">
        {touched && error && <span className="text-red-500">{error}</span>}
      </div>
    </div>
  );
};

export default Input;
