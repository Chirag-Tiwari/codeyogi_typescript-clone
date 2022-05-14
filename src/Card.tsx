import React, { FC } from "react";

type cardProps = { children: any };

const Card: FC<cardProps> = ({ children }) => {
  return (
    <div className="w-full border-2 border-gray-100 bg-white rounded-lg shadow-lg my-5 p-3">
      {children}
    </div>
  );
};

export default Card;
