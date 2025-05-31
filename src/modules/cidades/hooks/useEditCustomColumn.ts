import { useState } from "react";

import { Cidade } from "../interfaces";
import { useCity } from "./useCity";

export function useEditCustomColum() {
  const { update } = useCity();

  const [openModal, setOpenModal] = useState(false);
  const [city, setCity] = useState<Cidade | undefined>();

  const handleEdit = (row: Cidade) => {
    setOpenModal(true);
    setCity(row);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setCity((prevCity) => {
      if (!prevCity) return prevCity;
      return {
        ...prevCity,
        [name]: value,
      };
    });
  };

  const updateCity = () => {
    update.mutate(city as Cidade);
  };

  return {
    openModal,
    setOpenModal,
    handleEdit,
    handleChange,
    update,
    updateCity,
    city,
  };
}
