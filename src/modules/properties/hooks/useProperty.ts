import { useCreateMutation } from "@/hooks/useCreateMutation";
import { useUpdateMutation } from "@/hooks/useUpdateMutation";
import {
  propsUpdateProperty,
  propsCreateProperty,
  propsFindAllProperties,
  propsDeleteProperty,
} from "../constants/propsQuery";
import { useFindAllQuery } from "@/hooks/useFindAllQuery";
import { useDeleteMutation } from "@/hooks/useDeleteMutate";

export function useProperty() {
  const create = useCreateMutation(propsCreateProperty);
  const findAll = useFindAllQuery(propsFindAllProperties);
  const update = useUpdateMutation(propsUpdateProperty);
  const remove = useDeleteMutation(propsDeleteProperty);

  return {
    create,
    findAll,
    update,
    remove,
  };
}
