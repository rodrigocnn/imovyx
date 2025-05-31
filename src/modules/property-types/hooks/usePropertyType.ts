import { useCreateMutation } from "@/hooks/useCreateMutation";
import { useUpdateMutation } from "@/hooks/useUpdateMutation";
import {
  propsCreatePropertyTypes,
  propsDeletePropertyTypes,
  propsFindAllPropertyTypes,
  propsUpdatePropertyTypes,
} from "../constants/";
import { useFindAllQuery } from "@/hooks/useFindAllQuery";
import { useDeleteMutation } from "@/hooks/useDeleteMutate";

export function usePropertyType() {
  const create = useCreateMutation(propsCreatePropertyTypes);
  const findAll = useFindAllQuery(propsFindAllPropertyTypes);
  const update = useUpdateMutation(propsUpdatePropertyTypes);
  const remove = useDeleteMutation(propsDeletePropertyTypes);

  return {
    create,
    findAll,
    update,
    remove,
  };
}
