import React from "react";

export const Welcome: React.FC = () => {
  return (
    <div className="p-4">
      <div className="text-center mb-16">
        <h1 className="text-4xl mb-4">Welcome to</h1>
        <p className="text-2xl">
          Dedicated Resourceful Assistive Graphical Overpowered Nimble Dayz
          Nerdy Utility Toolkit System
        </p>
      </div>
      <div className="mx-auto w-full max-w-[900px] text-lg">
        <p>
          I was tired of switching windows while playing to check the time,
          player count, map, and sometimes the wiki. So I created this app to
          have everything in one place.
        </p>
        <p>
          To start using <b>Dragon Dayz Nuts</b>, go to the Servers tab, find
          the server you're playing on, and add it to favorites.
        </p>
      </div>
    </div>
  );
};
