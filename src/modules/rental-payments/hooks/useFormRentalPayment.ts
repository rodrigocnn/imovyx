import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import * as Yup from "yup";

import { INITIAL_STATE_FORM_RENTAL_PAYMENT } from "../constants";
import { FormMapped, RentalPayment } from "../interfaces";
import { Contract } from "@/modules/contracts/interfaces";
import { mapRentalPayment } from "../mappers";
import { paymentsSchema } from "../validations";
import { useRentalPayment } from "./useRentalPayment";

export const useFormRentalPayment = (
  initialData?: RentalPayment,
  edit: boolean = false,
  contract?: Contract
) => {
  const [form, setForm] = useState<RentalPayment>(
    INITIAL_STATE_FORM_RENTAL_PAYMENT
  );

  const { create, update } = useRentalPayment();

  useEffect(() => {
    if (initialData) {
      setForm(initialData);
    }
  }, [initialData]);

  const handleChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = event.target;
    const parsedValue = name === "amount" ? parseFloat(value) : value;

    setForm((prevForm) => ({
      ...prevForm,
      [name]: parsedValue,
    }));
  };

  const handleDateChange = (name: string, value: Date | null) => {
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validation = async (form: FormMapped) => {
    try {
      await paymentsSchema.validate(form);
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

  const handleChangeCurrency = (name: string, value: number | undefined) => {
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (event?: React.FormEvent) => {
    if (event) event.preventDefault();
    const formMapped = mapRentalPayment(form);
    if (await validation(formMapped)) {
      try {
        if (edit) {
          update.mutate(formMapped);
        } else {
          create.mutate(formMapped);
        }
      } catch (error) {
        console.error("Erro ao enviar:", error);
      }
    }
  };

  const resetForm = () => {
    setForm(INITIAL_STATE_FORM_RENTAL_PAYMENT);
  };

  return {
    form,
    setForm,
    handleChange,
    handleDateChange,
    handleChangeCurrency,
    handleSubmit,
    resetForm,
    create,
    update,
  };
};
