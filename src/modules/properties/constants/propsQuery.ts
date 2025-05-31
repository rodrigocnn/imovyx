import {
  propertiesFindAll,
  propertyCreate,
  propertyDelete,
  propertyFindOne,
  propertyUpdate,
} from "../api/propertyApi";
import { Property } from "../interfaces";

export const propsFindAllProperties = {
  queryKey: "get-properties",
  queryFn: propertiesFindAll,
};

export const propsFindOneProperty = {
  queryKey: "get-property",
  queryFn: (id: string) => propertyFindOne(id),
  enabled: true,
};

export const propsCreateProperty = {
  queryKey: "get-properties",
  onSuccessMsg: "Imóvel cadastrado com sucesso",
  mutationFn: (property: Property) => propertyCreate(property),
  urlRedirect: "/admin/imoveis",
};

export const propsUpdateProperty = {
  queryKey: "get-properties",
  onSuccessMsg: "Imóvel atualizado com sucesso",
  mutationFn: (property: Property) => propertyUpdate(property),
  urlRedirect: "/admin/imoveis",
};

export const propsDeleteProperty = {
  queryKey: "get-properties",
  onSuccessMsg: "Imóvel excluído com sucesso",
  mutationFn: (id: string) => propertyDelete(id),
};
