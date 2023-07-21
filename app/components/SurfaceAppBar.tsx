import theme from "../config/theme"
import {
  AppBar,
  Avatar,
  Box,
  Grid,
  IconButton,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material"
import { OfflineBoltRounded, PersonRounded } from "@mui/icons-material"

const AppBarAppIcon = () => (
  <Box display={"flex"} justifyContent={"center"}>
    <IconButton size="large">
      <OfflineBoltRounded />
    </IconButton>
  </Box>
)

const AppBarTitle = () => (
  <Box display={"flex"}>
    <Stack direction={"row"} spacing={1} alignItems={"center"}>
      <Typography variant="h6">Tower</Typography>
      <Typography variant="body1">Commercial Aviation</Typography>
    </Stack>
  </Box>
)

export const SurfaceAppBar = () => (
  <AppBar
    position="sticky"
    sx={{
      zIndex: theme.zIndex.drawer + 1,
      paddingLeft: 0,
      paddingRight: 2,
    }}
  >
    <Toolbar disableGutters sx={{}}>
      <Grid container justifyContent={"space-between"} alignItems={"center"}>
        <Grid item justifyItems={"center"} sm={1}>
          <AppBarAppIcon />
        </Grid>
        <Grid item sm={10} sx={{}}>
          <AppBarTitle />
        </Grid>

        <Grid item sm={1} alignItems={"center"}>
          <Box display={"flex"} justifyContent={"end"}>
            <Avatar sizes="small" variant="circular">
              <PersonRounded />
            </Avatar>
          </Box>
        </Grid>
      </Grid>
    </Toolbar>
  </AppBar>
)
