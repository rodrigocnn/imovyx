import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import { PatientUpdateApi } from "../api";

export function useUpdatePatient() {
  const queryClient = useQueryClient();
  const router = useRouter();

  return useMutation({
    mutationFn: PatientUpdateApi,
    onSuccess: () => {
      router.push("/admin/pacientes");
      toast.success("Paciente atualizado com sucesso");
      queryClient.refetchQueries({ queryKey: ["buscar-pacientes"] });
    },
    onError: () => {
      toast.error("Erro ao realizar o cadastro");
    },
  });
}
