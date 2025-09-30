import * as yup from "yup";

import { toast } from "react-toastify";
import { Patient } from "../interfaces";

export const clientsSchema = yup.object().shape({
  phone: yup.string().required("Telefone é obrigatório"),
  email: yup.string().required("Email é obrigatório"),
  name: yup.string().required("Nome é obrigatório"),
});

export const patientPersist = async (form: Patient) => {
  try {
    await clientsSchema.validate(form);
    return true;
  } catch (error: any) {
    if (error instanceof yup.ValidationError) {
      error.errors.forEach((errMsg) => {
        toast.error(errMsg);
      });
    } else {
      toast.error("Erro inesperado na validação.");
    }
    return false;
  }
};
