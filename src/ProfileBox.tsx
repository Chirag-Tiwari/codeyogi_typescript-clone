import React, { FC } from "react";
import Input from "./Input";
import { InputProps } from "./models/Input";

const ProfileBox: FC<InputProps> = (props) => {
  return (
    <div className="mt-5 border-t border-gray-200 flex justify-between items-center pt-4">
      <div>
        <h3 className="text-sm font-medium text-gray-500">{props.children}</h3>
      </div>
      <div className="w-3/5">
        <Input name={props.name} />
      </div>
    </div>
  );
};

export default ProfileBox;
