import React from "react";

export const Header: React.FC = () => {
  return (
    <div className="h-16 bg-gray-900 flex items-center px-3">
      <p>
        <span className="font-bold">Server not choosen </span>
      </p>
      {/* <p>
        <span className="font-bold">Players: </span>69
      </p>
      <p>
        <span className="font-bold">Time: </span>12.42
      </p> */}
    </div>
  );
};
