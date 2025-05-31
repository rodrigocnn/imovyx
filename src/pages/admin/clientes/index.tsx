import { DataGrid } from "@/components/admin/Datagrid";
import { useRouter } from "next/router";
import { Spinner } from "flowbite-react";

import { DeleteCustomColumn } from "@/modules/clients/component/deleteCustomColumn";
import { EditCustomColumn } from "@/modules/clients/component/editCustomColumn";
import { useFindAllQuery } from "@/hooks/useFindAllQuery";
import { Client } from "@/modules/clients/interfaces";
import { propsFindAllClients } from "@/modules/clients/constants";
import { columnsClients } from "@/modules/clients/constants/columns";
import LayoutAdmin from "@/components/LayoutAdmin";

export default function Clientes() {
  const { data: clients, isLoading } =
    useFindAllQuery<Client>(propsFindAllClients);

  const router = useRouter();

  function handleClick(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    router.push("/admin/clientes/cadastrar");
  }

  return (
    <LayoutAdmin>
      <h2 className="text-2xl font-semibold  mb-4">Clientes</h2>
      <div className="bg-white p-4 rounded h-screen ">
        <div className="overflow-x-auto">
          {isLoading ? (
            <div className="flex justify-center items-center h-full">
              <Spinner aria-label="Carregando clientes..." />
            </div>
          ) : (
            <DataGrid
              rows={clients}
              columns={columnsClients}
              addAction={{
                label: "Cadastrar Cliente",
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
              searchField="name"
            />
          )}
        </div>
      </div>
    </LayoutAdmin>
  );
}
