import { useState } from "react";

import { PropertyType } from "../interfaces";
import { usePropertyType } from "./usePropertyType";

export function useEditCustomColum() {
  const { update } = usePropertyType();
  const [openModal, setOpenModal] = useState(false);
  const [propertyType, setPropertyType] = useState<PropertyType | undefined>();

  const handleEdit = (row: PropertyType) => {
    setOpenModal(true);
    setPropertyType(row);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setPropertyType((prevType) => {
      if (!prevType) return prevType;
      return {
        ...prevType,
        [name]: value,
      };
    });
  };

  const updatePropertyType = () => {
    update.mutate(propertyType as PropertyType);
  };

  return {
    openModal,
    setOpenModal,
    handleEdit,
    handleChange,
    updatePropertyType,
    update,
    propertyType,
  };
}
