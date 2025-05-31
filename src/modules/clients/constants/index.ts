import {
  clientCreate,
  clientDelete,
  clientFindOne,
  clientsFindAll,
  clientUpdate,
} from "../api";
import { Client } from "../interfaces";

export const INITIAL_STATE_FORM_CLIENT = {
  name: "",
  email: "",
  cpf: "",
  phone: "",
};

export const propsFindAllClients = {
  queryKey: "get-clients",
  queryFn: clientsFindAll,
};

export const propsFindOneClient = {
  queryKey: "get-client",
  queryFn: (id: string) => clientFindOne(id),
  enabled: true,
};

export const propsCreateClient = {
  queryKey: "get-clients",
  onSuccessMsg: "Cliente cadastrado com sucesso",
  mutationFn: (client: Client) => clientCreate(client),
  urlRedirect: "/admin/clientes",
};

export const propsUpdateClient = {
  queryKey: "get-properties",
  onSuccessMsg: "Imóvel atualizado com sucesso",
  mutationFn: (client: Client) => clientUpdate(client),
  urlRedirect: "/admin/clientes",
};

export const propsDeleteClient = {
  queryKey: "get-clients",
  onSuccessMsg: "Cliente excluída com sucesso",
  mutationFn: (id: string) => clientDelete(id),
};
