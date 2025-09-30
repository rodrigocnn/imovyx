export type AppointmentStatus =
  | "SCHEDULED"
  | "CONFIRMED"
  | "RESCHEDULED"
  | "COMPLETED"
  | "CANCELED";
// ajuste conforme os status que existirem no seu sistema

export interface AppointmentEvent {
  id: string;
  start: string;
  end: string;
  status: AppointmentStatus;
  psychologistId: string;
  patientId: string;
  backgroundColor: string;
  textColor: string;
  display: string;
  title: string;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
}

export interface AppointmentStore {
  id?: string;
  start: string;
  end: string;
  status: AppointmentStatus;
  patientId: string;
}

export interface AppointmentForm {
  id?: string;
  patientId: string;
  date: string;
  initialTime: string;
  endTime: string;
  status?: AppointmentStatus;
}
