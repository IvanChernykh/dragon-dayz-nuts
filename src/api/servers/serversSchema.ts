export type ServerDetails = {
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

export type ServerRelationships = {
  game: {
    data: {
      type: string;
      id: string;
    };
  };
};

export type ServerAttributes = {
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
  details: ServerDetails;
  private: boolean;
  createdAt: string;
  updatedAt: string;
  portQuery: number;
  country: string;
  queryStatus: string;
};

export type ServerInfo = {
  type: string;
  id: string;
  attributes: ServerAttributes;
  relationships: ServerRelationships;
};

// Responses
export type GetAllServersResponse = {
  data: ServerInfo[];
  included: [];
  links: {
    next?: string;
    prev?: string;
  };
};

export type GetServerResponse = {
  data: ServerInfo;
};
