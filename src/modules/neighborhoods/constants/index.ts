import {
  NeighborhoodCreate,
  NeighborhoodDelete,
  neighborhoodFindAll,
  NeighborhoodsFindByCity,
  NeighborhoodUpdate,
} from "../api/neighborhoodApi";
import { Neighborhood } from "../interfaces";

export const propsFindAllNeighborhood = {
  queryKey: "get-neighborhoods",
  queryFn: neighborhoodFindAll,
};

export const propsCreateNeighborhood = {
  queryKey: "get-neighborhoods",
  onSuccessMsg: "Bairro cadastrado com sucesso",
  mutationFn: (neighborhood: Neighborhood) => NeighborhoodCreate(neighborhood),
};

export const propsUpdateNeighborhood = {
  queryKey: "get-neighborhoods",
  onSuccessMsg: "Bairro atualizado com sucesso",
  mutationFn: (neighborhood: Neighborhood) => NeighborhoodUpdate(neighborhood),
};

export const propsDeleteNeighborhood = {
  queryKey: "get-neighborhoods",
  onSuccessMsg: "Bairro excluído com sucesso",
  mutationFn: (id: string) => NeighborhoodDelete(id),
};

export const propsNeighborhoodsFindByCity = {
  queryKey: "get-neighborhoods-by-city",
  queryFn: (id: string) => NeighborhoodsFindByCity(id),
  enabled: false,
};
