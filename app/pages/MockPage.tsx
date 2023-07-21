import { SideBar } from "../components/"
import { Box, Grid, Paper, Stack, Typography, Button } from "@mui/material"
import { SurfaceAppBar } from "../components/SurfaceAppBar"
import { SummaryCard } from "../components/SummaryCard"
import { SurfaceDataGrid } from "../components/SurfaceDataGrid"
import styled from "@emotion/styled"
import { SurfaceDataGridToolbar } from "../components/SurfaceDataGridToolBar"

export const MockPage: React.FC = () => {
  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
      }}
    >
      {/* APPBAR */}
      <SurfaceAppBar />

      <Grid container>
        {/* SIDEBAR */}
        <Grid item sm={1}>
          <SideBar />
        </Grid>

        {/* BODY */}
        <Grid item sm={11}>
          <Grid container spacing={1} p={2}>
            {/* H1 Title */}
            <Grid item sm={12}>
              <Typography variant="h1">Hello World</Typography>
            </Grid>

            {/* Summary Cards */}
            <Grid item sm={12}>
              <Stack direction={"row"} spacing={1}>
                <SummaryCard />
                <SummaryCard />
                <SummaryCard />
              </Stack>
            </Grid>

            {/* Data Grid */}
            <Grid item sm={12}>
              <SurfaceDataGridToolbar />
              <SurfaceDataGrid />
            </Grid>
            {/* Buttons */}
            <Grid item sm={12}>
              <Paper>
                <Stack direction={"row"} spacing={1}>
                  <Button variant="contained" size="large">
                    Large
                  </Button>
                  <Button variant="contained" size="medium">
                    Medium
                  </Button>
                  <Button variant="contained" size="small">
                    Small
                  </Button>
                  <Button variant="outlined" size="large">
                    Large
                  </Button>
                  <Button variant="outlined" size="medium">
                    Medium
                  </Button>
                  <Button variant="outlined" size="small">
                    Small
                  </Button>
                </Stack>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  )
}
