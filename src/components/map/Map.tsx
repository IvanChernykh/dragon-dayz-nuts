import React from "react";

export const Map: React.FC = () => {
  return (
    <div className="w-full p-4">
      <iframe
        src="https://www.izurvive.com/"
        className="w-full h-[calc(100vh-96px)]"
        allowFullScreen
      />
    </div>
  );
};
