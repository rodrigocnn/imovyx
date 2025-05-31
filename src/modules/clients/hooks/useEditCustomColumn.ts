import { useState } from "react";

import { Client } from "../interfaces";
import { useRouter } from "next/router";
import { useClient } from "./useClient";

export function useEditCustomColum() {
  const router = useRouter();

  const { update } = useClient();

  const [openModal, setOpenModal] = useState(false);
  const [client, setClient] = useState<Client | undefined>();

  const handleEdit = (row: Client) => {
    router.push(`/admin/clientes/editar/${row.id}`);
    setClient(row);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setClient((prevCity) => {
      if (!prevCity) return prevCity;
      return {
        ...prevCity,
        [name]: value,
      };
    });
  };

  const updateCity = () => {
    update.mutate(client as Client);
  };

  return {
    openModal,
    setOpenModal,
    handleEdit,
    handleChange,
    updateCity,
    update,
    client,
  };
}
