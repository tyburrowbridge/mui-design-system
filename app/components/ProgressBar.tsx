import { LinearProgress, Stack, Typography, Box } from "@mui/material"

export const ProgressBar = ({}) => (
  <Box width={1 / 2}>
    <Stack direction={"column"} alignItems={"end"} spacing={0}>
      <Typography variant="caption">89.4%</Typography>
      <LinearProgress variant="determinate" value={84} />
    </Stack>
  </Box>
)
