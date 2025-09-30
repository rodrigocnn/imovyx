import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { AppointmentCreate } from "../api";
import { Dispatch, SetStateAction } from "react";

export function useAppointmentCreate(
  setIsModalOpen: Dispatch<SetStateAction<boolean>>
) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: AppointmentCreate,
    onSuccess: () => {
      toast.success("Agendamento realizado com sucesso");
      queryClient.refetchQueries({ queryKey: ["find-appointments"] });
      setIsModalOpen(false);
    },
    onError: () => {
      toast.error("Erro ao realizar o cadastro");
    },
  });
}
