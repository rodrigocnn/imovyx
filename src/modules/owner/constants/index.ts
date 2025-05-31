import {
  ownerCreate,
  ownerDelete,
  ownerFindOne,
  ownersFindAll,
  ownerUpdate,
} from "../api";
import { Owner } from "../interfaces";

export const INITIAL_STATE_FORM_OWNER = {
  name: "",
  email: "",
  cpf: "",
  phone: "",
};

export const propsFindAllOwners = {
  queryKey: "get-owners",
  queryFn: ownersFindAll,
};

export const propsFindOneOwner = {
  queryKey: "get-owner",
  queryFn: (id: string) => ownerFindOne(id),
  enabled: true,
};

export const propsCreateOwner = {
  queryKey: "get-owners",
  onSuccessMsg: "Proprietário cadastrado com sucesso",
  mutationFn: (owner: Owner) => ownerCreate(owner),
  urlRedirect: "/admin/proprietarios",
};

export const propsUpdateOwner = {
  queryKey: "get-owners",
  onSuccessMsg: "Proprietário atualizado com sucesso",
  mutationFn: (owner: Owner) => ownerUpdate(owner),
  urlRedirect: "/admin/proprietarios",
};

export const propsDeleteOwner = {
  queryKey: "get-owners",
  onSuccessMsg: "Proprietário excluído com sucesso",
  mutationFn: (id: string) => ownerDelete(id),
};
