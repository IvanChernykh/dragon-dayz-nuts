import React from "react";
import { Route, Routes, useLocation } from "react-router";
import { Map } from "../map/Map";
import { Servers } from "../servers/Servers";
import { routes } from "../../utils/constants/routes";

export const RoutesLayout: React.FC = () => {
  const path = useLocation();

  return (
    <div
      className={`overflow-y-${
        path.pathname.includes("map") ? "hidden" : "auto"
      } h-[calc(100vh-64px)]`}
    >
      <Routes>
        <Route path={routes.servers} element={<Servers />} />
        <Route path={routes.map} element={<Map />} />
        <Route path={routes.wiki} element={<div>wiki</div>} />
        <Route path={routes.weapons} element={<div>weapons</div>} />
      </Routes>
    </div>
  );
};
