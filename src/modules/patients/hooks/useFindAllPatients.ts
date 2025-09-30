import { useQuery } from "@tanstack/react-query";

import { patientsFindAll } from "../api";
import { Patient } from "../interfaces";

export function useFindAllPatients() {
  const { data, isLoading, error } = useQuery<Patient[]>({
    queryKey: ["find-all-patients"],
    queryFn: patientsFindAll,
  });

  return {
    isLoading,
    data,
    error,
  };
}
