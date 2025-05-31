import { MouseEventHandler, useState } from "react";
import { PropertyType } from "../interfaces";

import { PropertyTypeSchema } from "../validation";
import { usePropertyType } from "./usePropertyType";

export function useFormPropertyType() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [openModal, setOpenModal] = useState(false);
  const [propertyType, setPropertyType] = useState<PropertyType | undefined>();
  const { create, findAll } = usePropertyType();

  const handleClick: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.preventDefault();
    setOpenModal(true);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPropertyType((prev) => ({
      ...prev!,
      [event.target.name]: event.target.value,
    }));
  };

  const handleCloseModal = () => {
    setPropertyType(undefined);
    setErrors({});
    setOpenModal(false);
  };

  const createPropertyType = async () => {
    try {
      await PropertyTypeSchema.validate(propertyType, { abortEarly: false });
      create.mutate(propertyType as PropertyType);
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
    createPropertyType,
    errors,
    propertyType,
    findAll,
  };
}
