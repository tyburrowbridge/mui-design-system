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
import { SIDEBAR_MAX_WIDTH } from "../config/consts"
import theme from "../config/theme"

export const MockPage: React.FC = () => {
  return (
    <Box
      sx={{
        width: 1,
        height: 1,
      }}
      display={"flex"}
    >
      {/* APPBAR */}
      <SurfaceAppBar />

      {/* SIDEBAR */}
      <SideBar />

      <Box
        sx={{
          pt: 8,
          pb: 8,
          width: 1,
        }}
      >
        <Grid container pl={{ xs: 0, sm: 8 }}>
          {/* BODY */}
          <Grid item xs={12}>
            <Grid container spacing={1} p={2}>
              <Tab
                label="Status"
                sx={{ color: surfaceGrey.primary.dark, opacity: 1, pl: 1 }}
              />
              <Tab label="Flights" />
              <Tab label="Aircraft" />

              {/* <Grid item xs={12}>
                <Typography variant="h1">Hello World</Typography>
              </Grid> */}

              {/* Summary Cards */}
              <Grid item xs={12}>
                <Grid container spacing={1}>
                  <Grid item xs={12} sm={4}>
                    <InfoCard />
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    {" "}
                    <SummaryCard />
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <SummaryCard />
                  </Grid>
                </Grid>
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
