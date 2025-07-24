import React from "react";

export const ServersTableHeader: React.FC = () => {
  return (
    <div className="w-full bg-gray-900 mb-4 p-4 grid grid-cols-12">
      <div className="col-span-2 grid grid-cols-3">
        <div className="col-span-1 flex justify-center">mods</div>
        <div className="col-span-1 flex justify-center">pwd</div>
        <div className="col-span-1 flex justify-center">3rd</div>
      </div>
      <div className="ml-4 col-span-7">Name</div>
      <div className="col-span-1 flex justify-center">Time</div>
      <div className="col-span-1 flex justify-center">Players</div>
      <div className="col-span-1 flex justify-center">Fav</div>
    </div>
  );
};
