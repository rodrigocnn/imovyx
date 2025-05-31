import { Spinner } from "flowbite-react";

import { DataGrid } from "@/components/admin/Datagrid";
import { DeleteCustomColumn } from "@/modules/cidades/component/deleteCustomColumn";
import { EditCustomColumn } from "@/modules/cidades/component/editCustomColumn";
import { TextInput } from "flowbite-react";
import { useFormCity } from "@/modules/cidades/hooks/useFormCity";
import { CustomModal } from "@/components/Modal";
import { useCity } from "@/modules/cidades/hooks/useCity";
import LayoutAdmin from "@/components/LayoutAdmin";

export default function Cidades() {
  const { findAll } = useCity();

  const {
    openModal,
    handleCloseModal,
    createCity,
    city,
    errors,
    handleChange,
    handleClick,
  } = useFormCity();

  return (
    <LayoutAdmin>
      <h2 className="text-2xl font-semibold  mb-4">Cidades</h2>
      <div className="bg-white p-4 rounded h-screen">
        {findAll.isLoading ? (
          <div className="flex justify-center items-center h-full">
            <Spinner aria-label="Carregando cidades..." />
          </div>
        ) : (
          <>
            <CustomModal
              title="Cadastrar Cidade"
              show={openModal}
              onClose={() => handleCloseModal()}
              primaryAction={{
                label: "Salvar",
                onClick: () => {
                  createCity();
                },
              }}
            >
              <TextInput
                id="cidade"
                name="name"
                type="text"
                placeholder="Nome da Cidade"
                required
                value={city?.name}
                onChange={handleChange}
              />
              {errors.name && <p className="text-red-500">{errors.name}</p>}{" "}
            </CustomModal>

            <div className="overflow-x-auto">
              <DataGrid
                rows={findAll.data}
                columns={[
                  {
                    headerName: "Cidades",
                    field: "name",
                  },
                ]}
                addAction={{
                  label: "Cadastrar Cidade",
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
            </div>
          </>
        )}
      </div>
    </LayoutAdmin>
  );
}
