import { useState } from "react";
import { useRouter } from "next/router";

import { Owner } from "../interfaces";
import { useOwner } from "./useOwner";

export function useEditOwnerColumn() {
  const router = useRouter();
  const { update } = useOwner();

  const [openModal, setOpenModal] = useState(false);
  const [owner, setOwner] = useState<Owner | undefined>();

  const handleEdit = (row: Owner) => {
    router.push(`/admin/proprietarios/editar/${row.id}`);
    setOwner(row);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setOwner((prevOwner) => {
      if (!prevOwner) return prevOwner;
      return {
        ...prevOwner,
        [name]: value,
      };
    });
  };

  const updateOwner = () => {
    if (owner) {
      update.mutate(owner);
    }
  };

  return {
    openModal,
    setOpenModal,
    handleEdit,
    handleChange,
    updateOwner,
    update,
    owner,
  };
}
