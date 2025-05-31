import { useCreateMutation } from "@/hooks/useCreateMutation";
import { useDeleteMutation } from "@/hooks/useDeleteMutate";
import { useFindAllQuery } from "@/hooks/useFindAllQuery";
import { useUpdateMutation } from "@/hooks/useUpdateMutation";
import {
  propsCreateContract,
  propsDeleteContract,
  propsFindAllContract,
  propsUpdateContract,
} from "../constants";

export function useContract() {
  const create = useCreateMutation(propsCreateContract);
  const findAll = useFindAllQuery(propsFindAllContract);
  const update = useUpdateMutation(propsUpdateContract);
  const remove = useDeleteMutation(propsDeleteContract);

  return {
    create,
    findAll,
    update,
    remove,
  };
}
