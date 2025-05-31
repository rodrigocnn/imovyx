import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { toast } from "react-toastify";

interface useCreateMutationProps<T> {
  queryKey: string;
  onSuccessMsg: string;
  mutationFn: (item: T) => Promise<any>;
  onErrorMsg?: string;
  urlRedirect?: string;
}

export function useCreateMutation<T>(props: useCreateMutationProps<T>) {
  const queryClient = useQueryClient();
  const { onSuccessMsg, queryKey, mutationFn, urlRedirect } = props;
  const router = useRouter();

  return useMutation({
    mutationFn,
    onSuccess: () => {
      if (urlRedirect) router.push(urlRedirect);
      toast.success(onSuccessMsg);
      queryClient.refetchQueries({ queryKey: [queryKey] });
    },
    onError: () => {
      toast.error("Erro ao realizar o cadastro");
    },
  });
}
