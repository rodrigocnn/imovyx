import React from "react";
import { useState } from "react";

import { Patient } from "../interfaces";
import { INITIAL_STATE_FORM_CLIENT } from "../constants";
import { formatCPF, formatPhone } from "@/utils";
import { patientPersist } from "../validations";

import { useCreatePatient } from "./useCreatePatient";
import { useUpdatePatient } from "./useUpdatePatient";
import { persistMapperPatient } from "../mappers";

export const useFormPatient = (
  initialData?: Patient,
  edit: boolean = false
) => {
  const [form, setForm] = useState<Patient>(INITIAL_STATE_FORM_CLIENT);
  const createPatient = useCreatePatient();
  const updatePatient = useUpdatePatient();

  const handleChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = event.target;

    let formattedValue = value;

    setForm((prevForm) => ({
      ...prevForm,
      [name]: formattedValue,
    }));
  };

  const handleChangeCPF = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    const formattedValue = formatCPF(value);

    setForm((prevForm) => ({
      ...prevForm,
      [name]: formattedValue,
    }));
  };

  // handleChange para Telefone
  const handleChangePhone = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    const formattedValue = formatPhone(value);

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

  const handleSubmit = async (event?: React.FormEvent) => {
    if (event) event.preventDefault();

    if (await patientPersist(form)) {
      try {
        const formMapped = persistMapperPatient(form);
        if (edit) {
          updatePatient.mutate(form);
        } else {
          createPatient.mutate(formMapped);
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
    handleChangeCPF,
    handleLocationChange,
    handleChangePhone,
    handleSubmit,
    resetForm,
    createPatient,
  };
};
