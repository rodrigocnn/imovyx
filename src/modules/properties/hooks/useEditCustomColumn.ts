import { useState } from "react";

import { Property } from "../interfaces";
import { useRouter } from "next/router";
import { useProperty } from "./useProperty";

export function useEditCustomColum() {
  const router = useRouter();
  const [property, setProperty] = useState<Property | undefined>();
  const { update } = useProperty();

  const handleEdit = (row: Property) => {
    router.push(`/admin/imoveis/editar/${row.id}`);
    setProperty(row);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setProperty((prevProperty) => {
      if (!prevProperty) return prevProperty;
      return {
        ...prevProperty,
        [name]: value,
      };
    });
  };

  const updateCity = () => {
    update.mutate(property as Property);
  };

  return {
    handleEdit,
    handleChange,
    updateCity,
    update,
    property,
  };
}
