import { useEffect, useState } from "react";
import * as Yup from "yup";

import { Property } from "../interfaces";
import { INITIAL_STATE_FORM_PROPERTY } from "../constants";
import { propertySchema } from "../validations";
import { validation } from "@/utils/validations";
import { useFindAllNeighborhoodsByCity } from "@/modules/neighborhoods/hooks/useFindAllNeighborhoodsByCity";
import { useProperty } from "./useProperty";
import { useCity } from "@/modules/cidades/hooks/useCity";

export const useFormProperty = (edit: boolean = false) => {
  const [form, setForm] = useState<Property>(INITIAL_STATE_FORM_PROPERTY);
  const { fetchNeighborhoodsByCityId, neighborhoods } =
    useFindAllNeighborhoodsByCity();

  const { create, update } = useProperty();
  const { findAll: cities } = useCity();

  useEffect(() => {
    if (edit && form.city_id) {
      fetchNeighborhoodsByCityId(form.city_id.toString());
    }
  }, [form]);

  const resetForm = () => {
    setForm(INITIAL_STATE_FORM_PROPERTY);
  };

  const isNumericFiedForm = (name: string, value: string) => {
    const numericFields = [
      "bedrooms",
      "bathrooms",
      "suites",
      "price",
      "latitude",
      "longitude",
    ];
    return numericFields.includes(name) ? Number(value) : value;
  };

  const handleChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = event.target;
    const newValue = isNumericFiedForm(name, value);

    if (name === "city_id") {
      fetchNeighborhoodsByCityId(value);
    }

    setForm((prevForm) => ({
      ...prevForm,
      [name]: newValue,
    }));
  };

  const handleChangeCurrency = (name: string, value: number | undefined) => {
    setForm((prev) => ({
      ...prev,
      [name]: value,
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

    if (await validation(form, propertySchema as Yup.Schema)) {
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

  return {
    form,
    setForm,
    handleChange,
    handleChangeCurrency,
    handleLocationChange,
    handleSubmit,
    resetForm,
    neighborhoods,
    create,
    update,
    cities,
  };
};
