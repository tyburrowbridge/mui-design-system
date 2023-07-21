import * as React from "react"
import { DataGrid, GridRowsProp, GridColDef } from "@mui/x-data-grid"
import { Box } from "@mui/material"
import { surfaceGrey } from "../config/colors"

const rows: GridRowsProp = [
  { id: 1, col1: "Hello", col2: "98.4%" },
  { id: 2, col1: "DataGridPro", col2: "98.4%" },
  { id: 3, col1: "MUI", col2: "98.4%" },
]

const columns: GridColDef[] = [
  {
    field: "col1",
    headerName: "Tail ID",
    description: "The id of a tail.",
    width: 150,

    headerAlign: "left",
    pinnable: true,
  },
  {
    field: "col2",
    headerName: "IFC %",
    description: "The id of a tail.",
    width: 150,
    headerAlign: "left",
  },
  {
    field: "col3",
    headerName: "Column 3",
    description: "The id of a tail.",
    width: 150,
    headerAlign: "left",
  },
  {
    field: "col4",
    headerName: "Column 4",
    description: "The id of a tail.",
    width: 150,
    headerAlign: "left",
  },
  {
    field: "col5",
    headerName: "Column 5",
    description: "The id of a tail.",
    width: 150,
    headerAlign: "left",
  },
  {
    field: "col6",
    headerName: "Column 6",
    description: "The id of a tail.",
    width: 150,
    headerAlign: "left",
  },
  {
    field: "col7",
    headerName: "Column 7",
    description: "The id of a tail.",
    width: 150,
    headerAlign: "left",
  },
  {
    field: "col8",
    headerName: "Column 8",
    description: "The id of a tail.",
    width: 150,
    headerAlign: "left",
  },
  {
    field: "col9",
    headerName: "Column 9",
    description: "The id of a tail.",
    width: 150,
    headerAlign: "left",
  },
]
export const SurfaceDataGrid = () => (
  <Box
    pt={1}
    pb={2}
    pr={2}
    pl={2}
    sx={{
      backgroundColor: surfaceGrey[150],
      borderBottomLeftRadius: "8px",
      borderBottomRightRadius: "8px",
    }}
  >
    <DataGrid rows={rows} columns={columns} />
  </Box>
)
