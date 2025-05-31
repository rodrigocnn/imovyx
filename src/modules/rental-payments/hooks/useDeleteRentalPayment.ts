import { useState } from "react";

import { RentalPayment } from "../interfaces";
import { useRentalPayment } from "./useRentalPayment";

export function useDeleteRentalPayment() {
  const { remove } = useRentalPayment();

  const [openModal, setOpenModal] = useState(false);
  const [selectedPayment, setSelectedPayment] = useState<
    RentalPayment | undefined
  >();

  const handleDelete = (row: RentalPayment) => {
    setOpenModal(true);
    setSelectedPayment(row);
  };

  const deleteRentalPayment = () => {
    if (selectedPayment?.id) {
      remove.mutate(selectedPayment.id);
    }
  };

  return {
    openModal,
    setOpenModal,
    handleDelete,
    deleteRentalPayment,
    remove,
    selectedPayment,
  };
}
