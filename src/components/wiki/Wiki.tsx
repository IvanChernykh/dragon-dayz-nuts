import React from "react";

export const Wiki: React.FC = () => {
  return (
    <div className="w-full p-4">
      <iframe
        src="https://dayz.fandom.com/wiki/DayZ_Wiki"
        className="w-full h-[calc(100vh-96px)]"
        allowFullScreen
      />
    </div>
  );
};
