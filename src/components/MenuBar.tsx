import React from "react";

import { MenuItem } from "./ui/MenuItem";
import { routes } from "../utils/constants/routes";

type MenuItem = {
  text: string;
  path: string;
};

const menuItems: MenuItem[] = [
  { text: "Servers", path: routes.servers },
  { text: "Map", path: routes.map },
  { text: "Wiki", path: routes.wiki },
  // { text: "Weapons", path: routes.weapons },
  { text: "Links", path: routes.links },
];

export const MenuBar: React.FC = () => {
  return (
    <div className="w-full max-w-[250px] bg-gray-900">
      <div className="h-16 flex items-center justify-center mb-4">
        <h4 className="font-bold text-xl">Dragon Dayz Nuts</h4>
      </div>
      <div className="w-full flex flex-col">
        {menuItems.map((item) => {
          return (
            <MenuItem key={item.text} to={item.path}>
              {item.text}
            </MenuItem>
          );
        })}
      </div>
    </div>
  );
};
