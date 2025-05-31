import { DataGrid } from "@/components/admin/Datagrid";
import { DeleteCustomColumn } from "@/modules/property-types/component/deleteCustomColumn";
import { EditCustomColumn } from "@/modules/property-types/component/editCustomColumn";
import { TextInput } from "flowbite-react";
import { CustomModal } from "@/components/Modal";

import { Spinner } from "flowbite-react";
import { useFormPropertyType } from "@/modules/property-types/hooks/useFormPropertyType";
import LayoutAdmin from "@/components/LayoutAdmin";

export default function Tipos() {
  const {
    openModal,
    handleCloseModal,
    createPropertyType,
    propertyType,
    errors,
    handleChange,
    handleClick,
    findAll,
  } = useFormPropertyType();

  return (
    <LayoutAdmin>
      <div className="bg-white p-4 rounded h-screen">
        {findAll.isLoading ? (
          <div className="flex justify-center items-center h-full">
            <Spinner aria-label="Carregando tipos..." />
          </div>
        ) : (
          <>
            <CustomModal
              title="Cadastrar Tipo de Imóvel"
              show={openModal}
              onClose={() => handleCloseModal()}
              primaryAction={{
                label: "Salvar",
                onClick: () => {
                  createPropertyType();
                },
              }}
            >
              <TextInput
                id="cidade"
                name="name"
                type="text"
                placeholder="Tipo de Imóvel"
                required
                value={propertyType?.name}
                onChange={handleChange}
              />
              {errors.name && <p className="text-red-500">{errors.name}</p>}{" "}
            </CustomModal>

            <div className="overflow-x-auto">
              <DataGrid
                rows={findAll.data}
                columns={[
                  {
                    headerName: "Tipos de Imóvel",
                    field: "name",
                  },
                ]}
                addAction={{
                  label: "Cadastrar Tipo de Imóvel",
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
              />
            </div>
          </>
        )}
      </div>
    </LayoutAdmin>
  );
}
