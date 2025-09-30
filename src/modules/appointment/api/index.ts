import api from "@/services/api";
import { AppointmentEvent, AppointmentStore } from "../interfaces";

export const findAllAppointments = async (): Promise<AppointmentEvent[]> => {
  const response = await api.index("agenda");
  return response.data;
};

export const AppointmentCreate = async (
  appointment: AppointmentStore
): Promise<AppointmentEvent> => {
  const response = await api.store("agenda", appointment);
  return response.data;
};

export const AppointmentUpdate = async (
  appointment: AppointmentStore
): Promise<AppointmentEvent> => {
  const response = await api.update(
    "agenda",
    appointment.id as string,
    appointment
  );
  return response.data;
};
