import { useState } from "react";
import { useCreateSession } from "./useCreateSession";
import { FormSession } from "../interfaces";
import { persistMapperSession } from "../mappers";
import { INITIALSTATESESSION } from "../constants";
import { sessionValidation } from "../validations";

export function useFormSession(idPatient: string, mode: string) {
  const [form, setForm] = useState<FormSession>(INITIALSTATESESSION);
  const sessionMutate = useCreateSession();

  const onEditorChange = (value: string, field: string) => {
    setForm({ ...form, [field]: value });
  };

  const saveSession = async () => {
    if (mode === "create") {
      if (await sessionValidation(form)) {
        const payload = persistMapperSession(form, idPatient);
        sessionMutate.mutate(payload);
      }
    } else {
    }
  };

  return {
    form,
    onEditorChange,
    saveSession,
  };
}
