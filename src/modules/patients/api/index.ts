import api from "@/services/api";
import { Patient } from "../interfaces";

export const patientsFindAll = async (): Promise<Patient[]> => {
  const response = await api.index("pacientes");
  return response.data;
};

export const PatientCreate = async (Patient: Patient): Promise<Patient> => {
  const response = await api.store("pacientes", Patient);
  return response.data;
};

export const PatientDelete = async (id: string): Promise<Patient> => {
  const response = await api.delete("pacientes", id);
  return response.data;
};

export const PatientShowApi = async (id: string): Promise<Patient> => {
  const response = await api.show("pacientes", id);
  return response.data;
};

export const PatientUpdateApi = async (Patient: Patient): Promise<Patient> => {
  const response = await api.update(
    "pacientes",
    Patient?.id as string,
    Patient
  );
  return response.data;
};
