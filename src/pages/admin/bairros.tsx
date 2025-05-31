import { Select, Spinner, TextInput } from "flowbite-react";

import { DataGrid } from "@/components/admin/Datagrid";

import { DeleteCustomColumn } from "@/modules/neighborhoods/components/deleteCustomColumn";
import { useCreateNeighborhood } from "@/modules/neighborhoods/hooks/useCreateNeighborhood";
import { CustomModal } from "@/components/Modal";
import { useFindAllQuery } from "@/hooks/useFindAllQuery";
import { propsFindAllNeighborhood } from "@/modules/neighborhoods/constants";
import { Neighborhood } from "@/modules/neighborhoods/interfaces";
import { EditCustomColumn } from "@/modules/neighborhoods/components/editCustomColumn";
import LayoutAdmin from "@/components/LayoutAdmin";

export default function Bairros() {
  const { data: neighborhoods, isLoading } = useFindAllQuery<Neighborhood>(
    propsFindAllNeighborhood
  );

  const {
    handleClick,
    openModal,
    createNeighborhood,
    neighborhood,
    handleChange,
    errors,
    handleCloseModal,
  } = useCreateNeighborhood();

  return (
    <LayoutAdmin>
      <h2 className="text-2xl font-semibold  mb-4">Bairros</h2>
      <div className="bg-white p-4 rounded h-screen ">
        <CustomModal
          title="Cadastrar Bairro"
          show={openModal}
          onClose={() => handleCloseModal()}
          primaryAction={{
            label: "Salvar",
            onClick: () => {
              createNeighborhood();
            },
          }}
        >
          <TextInput
            id="cidade"
            name="name"
            type="text"
            placeholder="Nome da Bairro"
            required
            value={neighborhood?.name}
            onChange={handleChange}
          />
          {errors.name && <p className="text-red-500">{errors.name}</p>}
          <Select name="city_id" onChange={handleChange} id="cities" required>
            <option value={"-1"}>Selecione Cidade</option>
            <option value={1}>Barreiras</option>
          </Select>
          {errors.name && <p className="text-red-500">{errors.cityId}</p>}
        </CustomModal>

        <div className="overflow-x-auto">
          {isLoading ? (
            <div className="flex justify-center items-center h-full">
              <Spinner aria-label="Carregando Bairros..." />
            </div>
          ) : (
            <DataGrid
              rows={neighborhoods}
              columns={[
                {
                  headerName: "Bairros",
                  field: "name",
                },
              ]}
              addAction={{
                label: "Cadastrar Bairro",
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
