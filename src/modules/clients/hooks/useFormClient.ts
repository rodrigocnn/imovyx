import { useState } from "react";
import { toast } from "react-toastify";
import * as Yup from "yup";

import { Client } from "../interfaces";
import { INITIAL_STATE_FORM_CLIENT } from "../constants";
import { formatCPF, formatPhone } from "@/utils";
import { clientsSchema } from "../validations";
import { useClient } from "./useClient";

export const useFormClient = (initialData?: Client, edit: boolean = false) => {
  const [form, setForm] = useState<Client>(INITIAL_STATE_FORM_CLIENT);
  const { create, update } = useClient();

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

  const handleLocationChange = (latitude: number, longitude: number) => {
    setForm((prevForm) => ({
      ...prevForm,
      location: { latitude, longitude },
    }));
  };

  const validation = async (form: Client) => {
    try {
      await clientsSchema.validate(form);
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
        if (edit) {
          update.mutate(form);
        } else {
          create.mutate(form);
        }
      } catch (error) {
        console.error("Erro ao enviar:", error);
      }
    }
  };

  const resetForm = () => {
    setForm(INITIAL_STATE_FORM_CLIENT);
  };

  return {
    form,
    setForm,
    handleChange,
    handleLocationChange,
    handleSubmit,
    resetForm,
    create,
    update,
  };
};
