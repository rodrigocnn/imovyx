import {
  propertyTypesCreate,
  propertyTypesDelete,
  propertyTypesFindAll,
  propertyTypesUpdate,
} from "../api";
import { PropertyType } from "../interfaces";

export const propsCreatePropertyTypes = {
  queryKey: "get-types",
  onSuccessMsg: "Tipo de Imóvel criado com sucesso",
  mutationFn: (type: PropertyType) => propertyTypesCreate(type),
};

export const propsFindAllPropertyTypes = {
  queryKey: "get-types",
  queryFn: propertyTypesFindAll,
};

export const propsUpdatePropertyTypes = {
  queryKey: "get-types",
  onSuccessMsg: "Tipo de Imóvel atualizado com sucesso",
  mutationFn: (propertyType: PropertyType) => propertyTypesUpdate(propertyType),
};

export const propsDeletePropertyTypes = {
  queryKey: "get-types",
  onSuccessMsg: "Tipo de Imóvel excluído com sucesso",
  mutationFn: (id: string) => propertyTypesDelete(id),
};
