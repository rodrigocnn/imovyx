import { GridColDef, GridRenderCellParams } from "@mui/x-data-grid";

export const columnsSessions: GridColDef[] = [
  { field: "sessionDateFormatted", headerName: "Data", flex: 1, minWidth: 150 },
  { field: "status", headerName: "Status", flex: 1, minWidth: 150 },
];
