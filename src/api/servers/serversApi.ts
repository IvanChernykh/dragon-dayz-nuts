import type { AxiosInstance } from "axios";
import axiosInstance from "../axiosInstance";
import type { GetAllServersResponse, GetServerResponse } from "./serversSchema";

const baseUrl = "https://api.battlemetrics.com/servers";

class ServersApi {
  axios: AxiosInstance;

  constructor(axiosInstance: AxiosInstance) {
    this.axios = axiosInstance;
  }

  getAllServers = async (params?: string): Promise<GetAllServersResponse> => {
    return this.axios.get(`${baseUrl}?filter[game]=dayz&${params || ""}`);
  };

  getServer = async (id: string): Promise<GetServerResponse> => {
    return this.axios.get(`${baseUrl}/${id}`);
  };
}

export const serversApi = new ServersApi(axiosInstance);
