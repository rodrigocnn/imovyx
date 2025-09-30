import { GridColDef, GridRenderCellParams } from "@mui/x-data-grid";

import { CellsPatientsCustom } from "../component/cells-patients-custom";

export const columnsPatients: GridColDef[] = [
  { field: "name", headerName: "Nome", flex: 1, minWidth: 150 },
  { field: "email", headerName: "E-mail", flex: 1, minWidth: 150 },
  {
    field: "birthDateFormatted",
    headerName: "Data de Nascimento",
    flex: 1,
    minWidth: 150,
  },
  {
    field: "acoes",
    headerName: "Ações",
    flex: 1,
    minWidth: 220,
    sortable: false,
    filterable: false,
    renderCell: (params: GridRenderCellParams) => {
      return <CellsPatientsCustom params={params} />;
    },
  },
];
