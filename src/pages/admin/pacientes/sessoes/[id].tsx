import { useRouter } from "next/router";
import { DataGrid, GridPaginationModel } from "@mui/x-data-grid";

import { useState } from "react";

import { useFindAllSession } from "@/modules/sessions/hooks/useFindAllSessions";
import { columnsSessions } from "@/modules/sessions/columns";
import Link from "next/link";
import { ButtonApp } from "@/components/admin/Button";
import LayoutAdmin from "@/components/admin/LayoutAdmin";

export default function Pacientes() {
  const [paginationModel, setPaginationModel] = useState<GridPaginationModel>({
    pageSize: 5,
    page: 0,
  });

  const router = useRouter();
  const patientId = router.query.id as string;
  const { data: sessions, isLoading } = useFindAllSession(patientId);

  return (
    <LayoutAdmin>
      <h2 className="text-2xl font-semibold  mb-4">Sessões</h2>

      <div className="bg-white p-4 rounded h-screen ">
        <Link href={`/admin/pacientes/sessoes/criar/${patientId}`}>
          <ButtonApp />
        </Link>

        <div className="overflow-x-auto">
          <DataGrid
            loading={isLoading}
            rows={sessions || []}
            columns={columnsSessions}
            checkboxSelection
            disableRowSelectionOnClick
            paginationModel={paginationModel}
            onPaginationModelChange={setPaginationModel}
            pageSizeOptions={[5, 10]}
          />
        </div>
      </div>
    </LayoutAdmin>
  );
}
