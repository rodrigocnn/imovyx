import { useState } from "react";

import { PropertyType } from "../interfaces";
import { usePropertyType } from "./usePropertyType";

export function useDeleteCustomColum() {
  const { remove } = usePropertyType();
  const [openModal, setOpenModal] = useState(false);
  const [propertyType, setPropertyType] = useState<PropertyType | undefined>();

  const handleDelete = (row: PropertyType) => {
    setOpenModal(true);
    setPropertyType(row);
  };

  const deletePropertyType = () => {
    remove.mutate(propertyType?.id as string);
  };

  return {
    openModal,
    setOpenModal,
    handleDelete,
    deletePropertyType,
    remove,
    propertyType,
  };
}
