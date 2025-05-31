import { useState } from "react";

import { Owner } from "../interfaces";
import { useOwner } from "./useOwner";

export function useDeleteOwnerColumn() {
  const { remove } = useOwner();

  const [openModal, setOpenModal] = useState(false);
  const [owner, setOwner] = useState<Owner | undefined>();

  const handleDelete = (row: Owner) => {
    setOpenModal(true);
    setOwner(row);
  };

  const deleteOwner = () => {
    if (owner?.id) {
      remove.mutate(owner.id);
    }
  };

  return {
    openModal,
    setOpenModal,
    handleDelete,
    deleteOwner,
    remove,
    owner,
  };
}
