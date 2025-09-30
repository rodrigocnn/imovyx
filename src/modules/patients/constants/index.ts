import { PatientCreate } from "../api";
import { Patient } from "../interfaces";

export const INITIAL_STATE_FORM_CLIENT = {
  name: "",
  email: "",
  cpf: "",
  phone: "",
  birthDate: "",
  notes: "",
};

// export const propsFindAllClients = {
//   queryKey: "get-clients",
//   queryFn: clientsFindAll,
// };

// export const propsFindOneClient = {
//   queryKey: "get-client",
//   queryFn: (id: string) => clientFindOne(id),
//   enabled: true,
// };

export const patientCreateApi = {
  queryKey: "get-clients",
  onSuccessMsg: "Cliente cadastrado com sucesso",
  mutationFn: (client: Patient) => PatientCreate(client),
  urlRedirect: "/admin/clientes",
};

// export const propsUpdateClient = {
//   queryKey: "get-properties",
//   onSuccessMsg: "Imóvel atualizado com sucesso",
//   mutationFn: (client: Patient) => clientUpdate(client),
//   urlRedirect: "/admin/clientes",
// };

// export const propsDeleteClient = {
//   queryKey: "get-clients",
//   onSuccessMsg: "Cliente excluída com sucesso",
//   mutationFn: (id: string) => clientDelete(id),
// };
