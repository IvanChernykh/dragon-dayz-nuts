import React from "react";
import { Route, Routes, useLocation } from "react-router";

import { routes } from "../../utils/constants/routes";
import { Links } from "../links/Links";
import { Map } from "../map/Map";
import { Servers } from "../servers/Servers";
import { Wiki } from "../wiki/Wiki";

export const RoutesLayout: React.FC = () => {
  const path = useLocation();

  return (
    <div
      className={`overflow-y-${
        path.pathname.includes(routes.map) ||
        path.pathname.includes(routes.wiki)
          ? "hidden"
          : "auto"
      } h-[calc(100vh-64px)]`}
    >
      <Routes>
        <Route path={routes.servers} element={<Servers />} />
        <Route path={routes.map} element={<Map />} />
        <Route path={routes.wiki} element={<Wiki />} />
        <Route path={routes.weapons} element={<div>weapons</div>} />
        <Route path={routes.links} element={<Links />} />
      </Routes>
    </div>
  );
};
