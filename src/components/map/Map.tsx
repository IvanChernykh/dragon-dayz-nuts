import React from "react";

import { useGlobalContext } from "../../hooks/useGlobalContext";

export const Map: React.FC = () => {
  const { state } = useGlobalContext();

  return (
    <div className="w-full p-4">
      <iframe
        src={state.inviteLink || "https://www.izurvive.com/"}
        className="w-full h-[calc(100vh-96px)]"
        allowFullScreen
      />
    </div>
  );
};
