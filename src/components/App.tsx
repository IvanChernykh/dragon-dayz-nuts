import { useEffect, useState } from "react";

type ServerInfo = {
  data: {
    type: string;
    id: string;
    attributes: {
      id: string;
      name: string;
      address: string | null;
      ip: string;
      port: number;
      players: number;
      maxPlayers: number;
      rank: number;
      location: [number, number];
      status: string;
      details: {
        version: string;
        password: boolean;
        official: boolean;
        time: string;
        third_person: boolean;
        modded: boolean;
        modIds: [];
        modNames: [];
        serverSteamId: string;
      };
      private: boolean;
      createdAt: string;
      updatedAt: string;
      portQuery: number;
      country: string;
      queryStatus: string;
    };
    relationships: {
      game: {
        data: {
          type: string;
          id: string;
        };
      };
    };
  };
  included: [];
};

export const App = () => {
  const [state, setState] = useState<ServerInfo>();
  useEffect(() => {
    fetch("https://api.battlemetrics.com/servers/29986593")
      .then((val) => val.json())
      .then((v) => {
        setState(v);
        console.log(v);
      });
  }, []);

  return (
    <div>
      <p>Name: {state?.data.attributes.name}</p>
      <p>Player: {state?.data.attributes.players}</p>
      <p>Time: {state?.data.attributes.details.time}</p>
      {/* <iframe src="https://www.izurvive.com/#c=20;-29;2" width="50%" /> */}

      <div>
        <p>Tools list:</p>
        <div>
          <a target="_blank" href="https://www.izurvive.com/#c=20;-29;2">
            Map
          </a>
        </div>
        <div>
          <a target="_blank" href="https://dayz.fandom.com/wiki/DayZ_Wiki">
            Wiki
          </a>
        </div>
        <div>
          <a
            target="_blank"
            href="https://wobo.tools/dayz-weapon-rank-tool?score=Overall_Score"
          >
            Weapon TierList
          </a>
        </div>
      </div>
    </div>
  );
};
