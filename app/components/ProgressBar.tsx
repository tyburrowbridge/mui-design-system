import { LinearProgress, Stack, Typography, Box } from "@mui/material"
import surfaceGreen from "../config/colors/surfaceGreen"

export const ProgressBar = ({}) => (
  <Box width={1}>
    <Stack direction={"column"} alignItems={"end"} spacing={0}>
      <LinearProgress
        variant="determinate"
        value={84}
        sx={{
          ".MuiLinearProgress-bar": {
            backgroundColor: surfaceGreen.main,
          },
        }}
      />
    </Stack>
  </Box>
)
