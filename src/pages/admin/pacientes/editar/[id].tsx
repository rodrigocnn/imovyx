import LayoutAdmin from "@/components/admin/LayoutAdmin";
import { FormPatient } from "@/modules/patients/component/form";
import { usePatientShowQuery } from "@/modules/patients/hooks/usePatientShowQuery";
import { Patient } from "@/modules/patients/interfaces";

import { useRouter } from "next/router";

export default function ClientesCadastrar() {
  const router = useRouter();

  const { data, isLoading } = usePatientShowQuery(router.query.id as string);

  return (
    <LayoutAdmin>
      <h2 className="text-2xl font-semibold  mb-4">Editar Cliente</h2>
      <FormPatient edit={true} initialData={data as Patient} />
    </LayoutAdmin>
  );
}
