import { FormSession } from "../interfaces";

export function persistMapperSession(
  form: FormSession,
  idPatient: string
): FormSession {
  const payload = { ...form };
  payload.status = "COMPLETED";
  payload.patientId = idPatient;
  payload.sessionDate = new Date().toISOString();
  return {
    ...payload,
  };
}

export function updateMapperSession(form: FormSession): FormSession {
  const payload = { ...form };

  payload.sessionDate = new Date().toISOString();
  return {
    ...payload,
  };
}
