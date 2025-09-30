import { useQuery } from "@tanstack/react-query";

import { PatientShowApi } from "../api";
import { Patient } from "../interfaces";

export function usePatientShowQuery(id: string) {
  const { data, isLoading, error } = useQuery<Patient>({
    queryKey: ["query-patient-show", id],
    queryFn: () => PatientShowApi(id),
    enabled: !!id,
  });

  return {
    isLoading,
    data,
    error,
  };
}
