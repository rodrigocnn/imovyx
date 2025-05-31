import { toast } from "react-toastify";
import { useMutation } from "@tanstack/react-query";
import { useContext, useState } from "react";

import { rentalPaymentFilter } from "../api/rental-pay-api";
import { FilterPayment } from "../interfaces";
import { INITIAL_FILTER } from "../constants";
import { RentalPaymentContext } from "../context";

export function useFilterPayment() {
  const [filter, setFilter] = useState<FilterPayment>(INITIAL_FILTER);
  const { setPayments } = useContext(RentalPaymentContext);

  const { mutate: submitFilter, isPending } = useMutation({
    mutationFn: rentalPaymentFilter,
    onSuccess: (data) => {
      setPayments(data);
    },
  });

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFilter((prev) => ({
      ...prev!,
      [event.target.name]: event.target.value,
    }));
  };

  const handleDateChange = (name: string, value: Date | null) => {
    setFilter((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (event?: React.FormEvent) => {
    if (event) event.preventDefault();

    if (!filter.filter_by) {
      toast.error("Necessário selecionar tipo de pesquisa");
    } else {
      submitFilter(filter);
    }
  };

  return { filter, isPending, handleChange, handleDateChange, handleSubmit };
}
