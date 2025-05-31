import { useState } from "react";

import { Client } from "../interfaces";
import { useClient } from "./useClient";

export function useDeleteCustomColum() {
  const { remove } = useClient();

  const [openModal, setOpenModal] = useState(false);
  const [client, setClient] = useState<Client | undefined>();

  const handleDelete = (row: Client) => {
    setOpenModal(true);
    setClient(row);
  };

  const deleteCity = () => {
    remove.mutate(client?.id as string);
  };

  return {
    openModal,
    setOpenModal,
    handleDelete,
    deleteCity,
    remove,
    client,
  };
}
