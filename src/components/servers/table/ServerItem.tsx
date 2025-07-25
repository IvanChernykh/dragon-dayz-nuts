import React from "react";

import { LockIcon } from "../../ui/icons/LockIcon";
import { StarIcon } from "../../ui/icons/StarIcon";
import { TwoPersonsIcon } from "../../ui/icons/TwoPersonsIcon";
import { WrenchIcon } from "../../ui/icons/WrenchIcon";

import type { ServerInfo } from "../../../api/servers/serversSchema";

interface IProps {
  isFavorite: boolean;
  item: ServerInfo;
  handleFavorite: () => void;
}

export const ServerItem: React.FC<IProps> = ({
  item,
  isFavorite,
  handleFavorite,
}) => {
  const { attributes } = item;

  return (
    <div
      key={item.id}
      className="w-full bg-gray-900 mb-4 p-4 grid grid-cols-12"
    >
      <div className="col-span-2 grid grid-cols-3">
        <div className="col-span-1 flex justify-center">
          <WrenchIcon color={attributes.details.modded ? "white" : "gray"} />
        </div>
        <div className="col-span-1 flex justify-center">
          <LockIcon color={attributes.details.password ? "white" : "gray"} />
        </div>
        <div className="col-span-1 flex justify-center">
          <TwoPersonsIcon
            color={attributes.details.third_person ? "white" : "gray"}
          />
        </div>
      </div>
      <div className="ml-4 col-span-7">{attributes.name}</div>
      <div className="col-span-1 flex justify-center">
        {attributes.details.time}
      </div>
      <div className="col-span-1 flex justify-center">
        {attributes.players} / {attributes.maxPlayers}
      </div>
      <div className="col-span-1 flex justify-center">
        <button className="cursor-pointer" onClick={handleFavorite}>
          <StarIcon mode={isFavorite ? "fill" : "outline"} />
        </button>
      </div>
    </div>
  );
};
