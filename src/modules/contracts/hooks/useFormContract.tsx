import { useState } from "react";
import * as Yup from "yup";

import { Contract } from "../interfaces";
import { INITIAL_FORM_CONTRACT } from "../constants";
import { useFindAllQuery } from "@/hooks/useFindAllQuery";
import { Property } from "@/modules/properties/interfaces";
import { propsFindRentAllProperties } from "@/modules/properties/constants";
import { mapContractFormData } from "../mapper";
import { contractsSchema } from "../validations";
import { validation } from "@/utils/validations";
import { useContract } from "./useContract";
import { useClient } from "@/modules/clients/hooks/useClient";

export const useFormContract = (edit: boolean = false) => {
  const [form, setForm] = useState<Contract>(INITIAL_FORM_CONTRACT);
  const { data: properties } = useFindAllQuery<Property>(
    propsFindRentAllProperties
  );
  const { findAll: clients } = useClient();
  const { create, update } = useContract();

  const handleChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = event.target;

    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };
  const handleDateChange = (name: string, value: Date | null) => {
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleChangeCurrency = (name: string, value: number | undefined) => {
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (event?: React.FormEvent) => {
    if (event) event.preventDefault();

    if (await validation(form, contractsSchema as Yup.Schema)) {
      try {
        if (edit) {
          update.mutate(form);
        } else {
          const formMapped = mapContractFormData(form);
          create.mutate(formMapped);
        }
      } catch (error) {
        console.error("Erro ao enviar:", error);
      }
    }
  };

  const resetForm = () => {
    setForm(INITIAL_FORM_CONTRACT);
  };

  return {
    form,
    setForm,
    handleChange,
    handleSubmit,
    resetForm,
    create,
    update,
    clients,
    properties,
    handleDateChange,
    handleChangeCurrency,
  };
};
