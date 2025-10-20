import { GridColDef, GridRenderCellParams } from "@mui/x-data-grid";
import { CellsSessionsCustom } from "../components/cells-sessions-custom";

export const columnsSessions: GridColDef[] = [
  { field: "sessionDateFormatted", headerName: "Data", flex: 1, minWidth: 150 },
  { field: "status", headerName: "Status", flex: 1, minWidth: 150 },
  {
    field: "acoes",
    headerName: "Ações",
    flex: 1,
    minWidth: 220,
    sortable: false,
    filterable: false,
    renderCell: (params: GridRenderCellParams) => {
      return <CellsSessionsCustom params={params} />;
    },
  },
];
