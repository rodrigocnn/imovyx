import { useState } from "react";

import { Property } from "../interfaces";
import { useProperty } from "./useProperty";

export function useDeleteCustomColum() {
  const [openModal, setOpenModal] = useState(false);
  const [property, setProperty] = useState<Property | undefined>();
  const { remove } = useProperty();

  const handleDelete = (row: Property) => {
    setOpenModal(true);
    setProperty(row);
  };

  const deleteCity = () => {
    remove.mutate(property?.id as string);
  };

  return {
    openModal,
    setOpenModal,
    handleDelete,
    deleteCity,
    property,
  };
}
