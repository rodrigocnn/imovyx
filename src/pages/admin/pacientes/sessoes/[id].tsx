import { useRouter } from "next/router";
import { Button } from "flowbite-react";
import { DataGrid, GridPaginationModel } from "@mui/x-data-grid";

import LayoutAdmin from "@/components/LayoutAdmin";
import { useState } from "react";
import { useFindAllPatients } from "@/modules/patients/hooks/useFindAllPatients";
import { columnsPatients } from "@/modules/patients/columns";

export default function Pacientes() {
  const { data: patients, isLoading } = useFindAllPatients();

  const [paginationModel, setPaginationModel] = useState<GridPaginationModel>({
    pageSize: 5,
    page: 0,
  });

  const router = useRouter();

  function handleClick(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    router.push("/admin/clientes/cadastrar");
  }

  return (
    <LayoutAdmin>
      <h2 className="text-2xl font-semibold  mb-4">Pacientes</h2>

      <div className="bg-white p-4 rounded h-screen ">
        <Button className=" text-white  rounded hover:bg-red-600 mb-4">
          Iniciar Sessão
        </Button>

        <div className="overflow-x-auto">
          <DataGrid
            loading={isLoading}
            rows={[]}
            columns={columnsPatients}
            checkboxSelection
            disableRowSelectionOnClick
            autoHeight
            paginationModel={paginationModel}
            onPaginationModelChange={setPaginationModel}
            pageSizeOptions={[5, 10]}
          />
        </div>
      </div>
    </LayoutAdmin>
  );
}
