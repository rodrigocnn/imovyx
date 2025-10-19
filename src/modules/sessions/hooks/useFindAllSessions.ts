import { useQuery } from "@tanstack/react-query";

import { sessionsFindAll } from "../api";
import { Session } from "../interfaces";

export function useFindAllSession(patientId: string) {
  const { data, isLoading, error } = useQuery<Session[]>({
    queryKey: ["find-all-sessions"],
    queryFn: () => sessionsFindAll(patientId),
    enabled: !!patientId,
  });

  return {
    isLoading,
    data,
    error,
  };
}
