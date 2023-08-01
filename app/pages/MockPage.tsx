import { SideBar } from "../components/"
import {
  Box,
  Grid,
  Paper,
  Stack,
  Typography,
  Button,
  Container,
  Tab,
} from "@mui/material"
import { SurfaceAppBar } from "../components/SurfaceAppBar"
import { SummaryCard } from "../components/SummaryCard"
import { SurfaceDataGrid } from "../components/SurfaceDataGrid"
import { SurfaceDataGridToolbar } from "../components/SurfaceDataGridToolBar"
import { surfaceGrey } from "../config/colors"
import { InfoCard } from "../components/InfoCard"

export const MockPage: React.FC = () => {
  return (
    <Box
      sx={{
        width: 1,
        height: 1,
      }}
    >
      {/* APPBAR */}
      <SurfaceAppBar />

      {/* SIDEBAR */}
      <SideBar />

      <Box
        sx={{
          pl: { xs: 4, sm: 8, md: 10 },
          pt: 8,
        }}
      >
        <Grid container>
          {/* BODY */}
          <Grid item xs={12}>
            <Grid container spacing={1} p={2}>
              <Tab
                label="Status"
                sx={{ color: surfaceGrey.primary.dark, opacity: 1 }}
              />
              <Tab label="Flights" />
              <Tab label="Aircraft" />

              <Grid item xs={12}>
                <Typography variant="h1">Hello World</Typography>
              </Grid>

              {/* Summary Cards */}
              <Grid item xs={12}>
                <Stack direction={"row"} spacing={1}>
                  <InfoCard />
                  <SummaryCard />
                  <SummaryCard />
                </Stack>
              </Grid>

              {/* Data Grid */}
              <Grid item xs={12}>
                <SurfaceDataGridToolbar />
                <SurfaceDataGrid />
              </Grid>

              {/* Buttons */}
              <Grid item xs={12}>
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
    </Box>
  )
}
