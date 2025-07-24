import { useQueryClient } from "@tanstack/react-query";

import type { QueryKeys } from "../utils/constants/queryKeys";

export const useGetCachedData = <T>(key: QueryKeys): T | undefined => {
  const queryClient = useQueryClient();

  const cachedData = queryClient.getQueryData<T>([key]);

  return cachedData;
};
