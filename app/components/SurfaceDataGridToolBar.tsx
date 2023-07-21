import { CircleRounded } from "@mui/icons-material"
import {
  Box,
  Grid,
  IconButton,
  Toolbar,
  Select,
  MenuItem,
  Typography,
  Stack,
  InputLabel,
  Autocomplete,
  TextField,
} from "@mui/material"
import { surfaceGrey } from "../config/colors"

export const SurfaceDataGridToolbar = () => (
  <Box
    sx={{
      backgroundColor: surfaceGrey[150],
      borderTopLeftRadius: "8px",
      borderTopRightRadius: "8px",
    }}
  >
    <Toolbar>
      <Grid container pt={2} pb={1}>
        <Grid item xs={12}>
          <Stack direction={"row"}>
            <Box width={140}>
              <InputLabel>Label</InputLabel>
              <Select variant="standard" defaultValue={"hello world"} fullWidth>
                <MenuItem>One</MenuItem>
                <MenuItem>A longer item</MenuItem>
                <MenuItem>One</MenuItem>
                <MenuItem>One</MenuItem>
              </Select>
            </Box>
            <Box width={140}>
              <InputLabel>Label</InputLabel>
              <TextField variant="standard"></TextField>
            </Box>
            <Stack
              height={58}
              direction={"row"}
              alignItems={"flex-end"}
              spacing={1}
            >
              <IconButton>
                <CircleRounded />
              </IconButton>
              <IconButton>
                <CircleRounded />
              </IconButton>
            </Stack>
          </Stack>
        </Grid>
      </Grid>
    </Toolbar>
  </Box>
)
