import { MouseEventHandler, useState } from "react";

import { Cidade } from "../interfaces";
import { citySchema } from "../validation";
import { useCity } from "./useCity";

export function useFormCity() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [openModal, setOpenModal] = useState(false);
  const [city, setCity] = useState<Cidade | null>(null);
  const { create } = useCity();

  const handleClick: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.preventDefault();
    setOpenModal(true);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCity((prev) => ({
      ...prev!,
      [event.target.name]: event.target.value,
    }));
  };

  const handleCloseModal = () => {
    setErrors({});
    setOpenModal(false);
    setCity(null);
  };

  const createCity = async () => {
    try {
      await citySchema.validate(city, { abortEarly: false });
      create.mutate(city as Cidade);
      handleCloseModal();
    } catch (error: any) {
      if (error.name === "ValidationError") {
        const validationErrors = error.inner.reduce((acc: any, err: any) => {
          acc[err.path] = err.message;
          return acc;
        }, {});
        setErrors(validationErrors);
      }
    }
  };

  return {
    openModal,
    setOpenModal,
    handleCloseModal,
    handleClick,
    handleChange,
    createCity,
    create,
    errors,
    city,
  };
}
