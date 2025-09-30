import { useQuery } from "@tanstack/react-query";

import { findAllAppointments } from "../api";
import { AppointmentEvent } from "../interfaces";

export function useFindAllAppoitments() {
  const { data, isLoading, error } = useQuery<AppointmentEvent[]>({
    queryKey: ["find-appointments"],
    queryFn: findAllAppointments,
  });

  return {
    isLoading,
    data,
    error,
  };
}
