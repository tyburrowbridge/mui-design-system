import {
  AppBar,
  Box,
  Grid,
  IconButton,
  Select,
  Stack,
  Switch,
  Toolbar,
  Typography,
} from "@mui/material"
import { MoreVertRounded, PersonRounded } from "@mui/icons-material"
import { surfaceGrey } from "../config/colors"

const AppBarTitle = () => (
  <Box display={"flex"}>
    <Stack direction={"row"} spacing={1} alignItems={"center"}>
      <Typography variant="h6">Tower</Typography>
      <Typography variant="body1" width={180}>
        Commercial Aviation
      </Typography>
    </Stack>
  </Box>
)

const AppBarCustomerSelect = () => (
  <Box width={180} display={"block"}>
    <Select />
  </Box>
)

const CustomerViewSwitch = () => (
  <Box
    width={138}
    sx={{
      display: { xs: "none", sm: "block" },
    }}
  >
    <Stack direction={"row"} spacing={0.5}>
      <Typography variant="body2" color={surfaceGrey.secondary.main}>
        Customer View
      </Typography>
      <Switch />
    </Stack>
  </Box>
)

export const SurfaceAppBar = () => (
  <AppBar position="fixed" square>
    <Toolbar>
      <Grid container justifyContent={"space-between"} alignItems={"center"}>
        <Grid item pl={{ xs: 0, sm: 6 }} xs={5}>
          <Stack direction={"row"} spacing={0}>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              <AppBarTitle />
            </Box>
            <AppBarCustomerSelect />
          </Stack>
        </Grid>

        <Grid item xs={6} alignItems={"center"}>
          <Stack
            direction={"row"}
            spacing={4}
            justifyContent={"end"}
            alignItems={"center"}
          >
            <CustomerViewSwitch />
            <Stack direction={"row"} spacing={0}>
              <IconButton>
                <PersonRounded />
              </IconButton>
              <IconButton>
                <MoreVertRounded />
              </IconButton>
            </Stack>
          </Stack>
        </Grid>
      </Grid>
    </Toolbar>
  </AppBar>
)
