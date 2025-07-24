import React from "react";
import { NavLink } from "react-router";

interface IProps extends React.PropsWithChildren {
  to: string;
}

export const MenuItem: React.FC<IProps> = ({ to, children }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `${
          isActive ? "bg-gray-800" : ""
        } hover:bg-gray-700 cursor-pointer p-3 w-full`
      }
    >
      {children}
    </NavLink>
  );
};
