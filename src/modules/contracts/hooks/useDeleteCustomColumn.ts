import { useState } from "react";

import { Contract } from "../interfaces";
import { useContract } from "./useContract";

export function useDeleteCustomColum() {
  const [openModal, setOpenModal] = useState(false);
  const [contract, setContract] = useState<Contract | undefined>();
  const { remove } = useContract();

  const handleDelete = (row: Contract) => {
    setOpenModal(true);
    setContract(row);
  };

  const deleteCity = () => {
    remove.mutate(contract?.id as string);
  };

  return {
    openModal,
    setOpenModal,
    handleDelete,
    deleteCity,
    remove,
    contract,
  };
}
