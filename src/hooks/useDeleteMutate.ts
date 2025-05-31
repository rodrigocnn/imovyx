import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { toast } from "react-toastify";

type DeleteErrorResponse = {
  error: string;
};

interface useDeleteMutationProps<T> {
  queryKey: string;
  onSuccessMsg: string;
  mutationFn: (id: string) => Promise<any>;
  onErrorMsg?: string;
}

export function useDeleteMutation<T>(props: useDeleteMutationProps<T>) {
  const queryClient = useQueryClient();
  const { onSuccessMsg, queryKey, mutationFn } = props;

  return useMutation({
    mutationFn,
    onSuccess: () => {
      toast.success(onSuccessMsg);
      queryClient.refetchQueries({ queryKey: [queryKey] });
    },
    onError: (error: AxiosError<DeleteErrorResponse>) => {
      if (error.response?.data.error) {
        if (Array.isArray(error.response?.data.error)) {
          toast.error(error.response?.data.error.toString());
        } else {
          toast.error(error.response?.data.error);
        }
      } else {
        toast.error("Não foi possível realizar exclusão");
      }
    },
  });
}
