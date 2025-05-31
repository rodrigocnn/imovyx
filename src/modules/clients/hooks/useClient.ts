import { useCreateMutation } from "@/hooks/useCreateMutation";
import { useDeleteMutation } from "@/hooks/useDeleteMutate";
import { useFindAllQuery } from "@/hooks/useFindAllQuery";
import { useUpdateMutation } from "@/hooks/useUpdateMutation";
import {
  propsCreateClient,
  propsDeleteClient,
  propsFindAllClients,
  propsUpdateClient,
} from "../constants";

export function useClient() {
  const create = useCreateMutation(propsCreateClient);
  const findAll = useFindAllQuery(propsFindAllClients);
  const update = useUpdateMutation(propsUpdateClient);
  const remove = useDeleteMutation(propsDeleteClient);

  return {
    create,
    findAll,
    update,
    remove,
  };
}
