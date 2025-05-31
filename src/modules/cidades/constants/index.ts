import {
  citiesFindAll,
  cityCreate,
  cityDelete,
  cityUpdate,
} from "../api/cityApi";
import { Cidade } from "../interfaces";

export const propsCreateCity = {
  queryKey: "get-cities",
  onSuccessMsg: "Cidade criada com sucesso",
  mutationFn: (city: Cidade) => cityCreate(city),
};

export const propsFindAllCity = {
  queryKey: "get-cities",
  queryFn: citiesFindAll,
};

export const propsUpdateCity = {
  queryKey: "get-cities",
  onSuccessMsg: "Cidade criada com sucesso",
  mutationFn: (city: Cidade) => cityUpdate(city),
};

export const propsDeleteCity = {
  queryKey: "get-cities",
  onSuccessMsg: "Cidade excluída com sucesso",
  mutationFn: (id: string) => cityDelete(id),
};
