import { useState } from "react";

import { Contract } from "../interfaces";
import { useRouter } from "next/router";
import { useContract } from "./useContract";

export function useEditCustomColum() {
  const router = useRouter();
  const [contract, setContract] = useState<Contract | undefined>();
  const { update } = useContract();

  const handleEdit = (row: Contract) => {
    router.push(`/admin/contratos/editar/${row.id}`);
    setContract(row);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setContract((prevContract) => {
      if (!prevContract) return prevContract;
      return {
        ...prevContract,
        [name]: value,
      };
    });
  };

  const updateContract = () => {
    update.mutate(contract as Contract);
  };

  return {
    handleEdit,
    handleChange,
    updateContract,
    update,
    contract,
  };
}
