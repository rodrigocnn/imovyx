import Link from "next/link";

import { Button } from "flowbite-react";
import { DataGrid, GridPaginationModel } from "@mui/x-data-grid";
import { useState } from "react";
import { useFindAllPatients } from "@/modules/patients/hooks/useFindAllPatients";
import { columnsPatients } from "@/modules/patients/columns";

import LayoutAdmin from "@/components/LayoutAdmin";
import { ptBRGridLocaleText } from "@/shared/constants";

export default function Pacientes() {
  const { data: patients, isLoading } = useFindAllPatients();

  const [paginationModel, setPaginationModel] = useState<GridPaginationModel>({
    pageSize: 5,
    page: 0,
  });

  return (
    <LayoutAdmin>
      <h2 className="text-2xl font-semibold  mb-4">Pacientes</h2>

      <div className="bg-white p-4 rounded h-screen ">
        <Link href={"/admin/pacientes/cadastrar"}>
          <Button className="text-white bg-sky-500 rounded mb-4 hover:!bg-sky-500/75">
            Cadastrar
          </Button>
        </Link>

        <div className="overflow-x-auto">
          <DataGrid
            loading={isLoading}
            rows={patients}
            columns={columnsPatients}
            disableRowSelectionOnClick
            disableColumnSelector
            paginationModel={paginationModel}
            onPaginationModelChange={setPaginationModel}
            pageSizeOptions={[5, 10]}
            localeText={ptBRGridLocaleText}
          />
        </div>
      </div>
    </LayoutAdmin>
  );
}
