import { useState } from "react";
import { useRouter } from "next/router";

import { RentalPayment } from "../interfaces";
import { useRentalPayment } from "./useRentalPayment";

export function useEditRentalPayment() {
  const router = useRouter();
  const [openModal, setOpenModal] = useState(false);
  const [payment, setPayment] = useState<RentalPayment | undefined>();
  const { update } = useRentalPayment();

  const handleEdit = (row: RentalPayment) => {
    router.push(`/admin/pagamentos/editar/${row.id}`);
    setPayment(row);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setPayment((prev) => {
      if (!prev) return prev;
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const updateRentalPayment = () => {
    update.mutate(payment as RentalPayment);
  };

  return {
    openModal,
    setOpenModal,
    handleEdit,
    handleChange,
    updateRentalPayment,
    update,
    payment,
  };
}
