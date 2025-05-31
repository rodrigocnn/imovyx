import { useCreateMutation } from "@/hooks/useCreateMutation";
import { useUpdateMutation } from "@/hooks/useUpdateMutation";
import {
  propsCreateOwner,
  propsDeleteOwner,
  propsFindAllOwners,
  propsUpdateOwner,
} from "../constants/";
import { useFindAllQuery } from "@/hooks/useFindAllQuery";
import { useDeleteMutation } from "@/hooks/useDeleteMutate";

export function useOwner() {
  const create = useCreateMutation(propsCreateOwner);
  const findAll = useFindAllQuery(propsFindAllOwners);
  const update = useUpdateMutation(propsUpdateOwner);
  const remove = useDeleteMutation(propsDeleteOwner);

  return {
    create,
    findAll,
    update,
    remove,
  };
}
