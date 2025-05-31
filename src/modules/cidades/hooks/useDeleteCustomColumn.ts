import { useState } from "react";

import { Cidade } from "../interfaces";
import { useCity } from "./useCity";

export function useDeleteCustomColum() {
  const { remove } = useCity();

  const [openModal, setOpenModal] = useState(false);
  const [city, setCity] = useState<Cidade | undefined>();

  const handleDelete = (row: Cidade) => {
    setOpenModal(true);
    setCity(row);
  };

  const deleteCity = () => {
    remove.mutate(city?.id as string);
  };

  return {
    openModal,
    setOpenModal,
    handleDelete,
    deleteCity,
    remove,
    city,
  };
}
