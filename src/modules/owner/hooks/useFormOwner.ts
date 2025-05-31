import { useState } from "react";
import { toast } from "react-toastify";
import * as Yup from "yup";

import { Owner } from "../interfaces";
import { INITIAL_STATE_FORM_OWNER } from "../constants";
import { ownersSchema } from "../validations";
import { formatCPF, formatPhone } from "@/utils";
import { useOwner } from "./useOwner";

export const useFormOwner = (initialData?: Owner, edit: boolean = false) => {
  const [form, setForm] = useState<Owner>(INITIAL_STATE_FORM_OWNER);
  const { update, create } = useOwner();

  const handleChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = event.target;

    let formattedValue = value;

    if (name === "cpf") {
      formattedValue = formatCPF(value);
    } else if (name === "phone") {
      formattedValue = formatPhone(value);
    }

    setForm((prevForm) => ({
      ...prevForm,
      [name]: formattedValue,
    }));
  };

  const validation = async (form: Owner) => {
    try {
      await ownersSchema.validate(form);
      return true;
    } catch (error: any) {
      if (error instanceof Yup.ValidationError) {
        error.errors.forEach((errMsg) => {
          toast.error(errMsg);
        });
      } else {
        toast.error("Erro inesperado na validação.");
      }
      return false;
    }
  };

  const handleSubmit = async (event?: React.FormEvent) => {
    if (event) event.preventDefault();

    if (await validation(form)) {
      try {
        edit ? update.mutate(form) : create.mutate(form);
      } catch (error) {
        console.error("Erro ao enviar:", error);
      }
    }
  };

  const resetForm = () => {
    setForm(INITIAL_STATE_FORM_OWNER);
  };

  return {
    form,
    setForm,
    handleChange,
    handleSubmit,
    resetForm,
    update,
    create,
  };
};
