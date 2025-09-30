import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { AppointmentUpdate } from "../api";
import { Dispatch, SetStateAction } from "react";

export function useAppointmentUpdate(
  setIsModalOpen: Dispatch<SetStateAction<boolean>>
) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: AppointmentUpdate,
    onSuccess: () => {
      toast.success("Agendamento atualizado com sucesso");
      queryClient.refetchQueries({ queryKey: ["find-appointments"] });
      setIsModalOpen(false);
    },
    onError: () => {
      toast.error("Erro ao realizar o cadastro");
    },
  });
}
