/* eslint-disable react-hooks/exhaustive-deps */
import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useRef } from "react";
import { NavLink, useLocation } from "react-router";

import { Button } from "./Button";
import { ClockIcon } from "./icons/ClockIcon";
import { PersonIcon } from "./icons/PersonIcon";
import { serversApi } from "../../api/servers/serversApi";
import { useGlobalContext } from "../../hooks/useGlobalContext";
import { QueryKeys } from "../../utils/constants/queryKeys";
import { routes } from "../../utils/constants/routes";
import { MapLinkInput } from "../map/MapLinkInput";

export const Header: React.FC = () => {
  const { state } = useGlobalContext();
  const favorite = state.favoriteServer;

  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const { pathname } = useLocation();

  const { data, refetch } = useQuery({
    queryKey: [QueryKeys.FAVORITE_SERVERS],
    queryFn: () => {
      if (!favorite) {
        return;
      }

      return serversApi.getServer(favorite);
    },
    enabled: !!favorite,
  });

  useEffect(() => {
    console.log(favorite);
    if (!favorite || intervalRef.current) {
      return;
    }

    refetch();

    intervalRef.current = setInterval(() => {
      refetch();
    }, 20000);

    return (): void => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [favorite]);

  return (
    <div className="h-16 bg-gray-900 flex items-center px-3">
      <div className="flex justify-between w-full">
        <div>{pathname.includes(routes.map) && <MapLinkInput />}</div>
        <div className="px-4 flex items-center justify-end gap-12 w-full text-lg">
          {favorite ? (
            <>
              <span>{data?.data.attributes.name}</span>

              {data && (
                <span className="flex items-center gap-4">
                  <PersonIcon />
                  {data.data.attributes.players} /{" "}
                  {data.data.attributes.maxPlayers}
                </span>
              )}

              {data && (
                <span className="flex items-center gap-4">
                  <ClockIcon />
                  {data.data.attributes.details.time}
                </span>
              )}
            </>
          ) : (
            <>
              {!pathname.includes(routes.servers) && (
                <NavLink to={routes.servers}>
                  <Button className="font-bold">[ choose server ]</Button>
                </NavLink>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};
