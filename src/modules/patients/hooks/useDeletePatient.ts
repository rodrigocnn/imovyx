import { useMutation, useQueryClient } from "@tanstack/react-query";

import { toast } from "react-toastify";
import { PatientDelete } from "../api";

export function useDeletePatient() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: PatientDelete,
    onSuccess: () => {
      toast.success("Paciente excluído com sucesso");
      queryClient.refetchQueries({ queryKey: ["find-all-patients"] });
    },
    onError: () => {
      toast.error("Erro ao realizar o cadastro");
    },
  });
}
