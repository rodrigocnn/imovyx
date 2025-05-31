import { useCreateMutation } from "@/hooks/useCreateMutation";
import { useUpdateMutation } from "@/hooks/useUpdateMutation";
import {
  propsCreateRentalPayment,
  propsDeleteRentalPayment,
  propsFindAllRentalPayments,
  propsUpdateRentalPayment,
} from "../constants/";
import { useFindAllQuery } from "@/hooks/useFindAllQuery";
import { useDeleteMutation } from "@/hooks/useDeleteMutate";

export function useRentalPayment() {
  const create = useCreateMutation(propsCreateRentalPayment);
  const findAll = useFindAllQuery(propsFindAllRentalPayments);
  const update = useUpdateMutation(propsUpdateRentalPayment);
  const remove = useDeleteMutation(propsDeleteRentalPayment);

  return {
    create,
    findAll,
    update,
    remove,
  };
}
