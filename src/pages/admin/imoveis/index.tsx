import { DataGrid } from "@/components/admin/Datagrid";
import { useRouter } from "next/router";
import { Spinner } from "flowbite-react";

import { DeleteCustomColumn } from "@/modules/properties/components/deleteCustomColumn";
import { EditCustomColumn } from "@/modules/properties/components/editCustomColumn";
import { useProperty } from "@/modules/properties/hooks/useProperty";
import { columnsProperties } from "@/modules/properties/constants/columns";
import LayoutAdmin from "@/components/LayoutAdmin";

export default function Imoveis() {
  const router = useRouter();
  const { findAll } = useProperty();

  function handleClick(event: React.MouseEvent<HTMLButtonElement>) {
    router.push("/admin/imoveis/cadastrar");
  }

  return (
    <LayoutAdmin>
      <h2 className="text-2xl font-semibold  mb-4">Imóveis</h2>
      <div className="bg-white p-4 rounded h-screen ">
        <div className="overflow-x-auto">
          {findAll.isLoading ? (
            <div className="flex justify-center items-center h-full">
              <Spinner aria-label="Carregando imóveis..." />
            </div>
          ) : (
            <DataGrid
              rows={findAll.data}
              columns={columnsProperties}
              addAction={{
                label: "Cadastrar Imóvel",
                onClick: handleClick,
              }}
              columnsFormatters={[
                {
                  component: EditCustomColumn,
                  label: "Editar",
                  field: "editar",
                },
                {
                  component: DeleteCustomColumn,
                  label: "Excluir",
                  field: "excluir",
                },
              ]}
              searchField="title"
            />
          )}
        </div>
      </div>
    </LayoutAdmin>
  );
}
