import { useCreateMutation } from "@/hooks/useCreateMutation";
import { useDeleteMutation } from "@/hooks/useDeleteMutate";
import { useFindAllQuery } from "@/hooks/useFindAllQuery";
import { useUpdateMutation } from "@/hooks/useUpdateMutation";
import {
  propsCreateCity,
  propsDeleteCity,
  propsFindAllCity,
  propsUpdateCity,
} from "../constants";

export function useCity() {
  const create = useCreateMutation(propsCreateCity);
  const findAll = useFindAllQuery(propsFindAllCity);
  const update = useUpdateMutation(propsUpdateCity);
  const remove = useDeleteMutation(propsDeleteCity);

  return {
    create,
    findAll,
    update,
    remove,
  };
}
