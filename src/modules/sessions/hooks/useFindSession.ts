import { useQuery } from "@tanstack/react-query";

import { sessionFindOne } from "../api";
import { Session } from "../interfaces";

export function useFindSession(id: string) {
  const { data, isLoading, error } = useQuery<Session>({
    queryKey: ["query-session-show", id],
    queryFn: () => sessionFindOne(id),
    enabled: !!id,
  });

  return {
    isLoading,
    data,
    error,
  };
}
