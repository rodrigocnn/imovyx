import { useMutation, useQueryClient } from "@tanstack/react-query";

import { toast } from "react-toastify";
import { sessionDelete } from "../api";

export function useDeleteSession() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: sessionDelete,
    onSuccess: () => {
      toast.success("Sessão excluída com sucesso");
      queryClient.refetchQueries({ queryKey: ["buscar-pacientes"] });
    },
    onError: () => {
      toast.error("Erro ao realizar o cadastro");
    },
  });
}
