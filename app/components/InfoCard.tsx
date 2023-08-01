import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Typography,
  Stack,
  Divider,
} from "@mui/material"
import { ProgressBar } from "./ProgressBar"
import { surfaceGrey } from "../config/colors"

const CardDetailRow = () => (
  <Box width={1} p={0.25}>
    <Stack direction={"row"} justifyContent={"space-between"} width={1}>
      <Typography variant="body1" color={surfaceGrey.secondary.main}>
        Model
      </Typography>
      <Typography variant="body1">2983838376F</Typography>
    </Stack>
  </Box>
)

const InfoCardTitle = () => (
  <Box width={1}>
    <Stack
      direction={"row"}
      justifyContent={"space-between"}
      alignItems={"center"}
    >
      <Typography variant="h5" width={1}>
        N2983F
      </Typography>
      <ProgressBar />
    </Stack>
  </Box>
)

export const InfoCard = () => (
  <Box width={1}>
    <Card sx={{ borderTop: 8, borderColor: surfaceGrey.primary.main }}>
      <CardHeader title={<InfoCardTitle />} />
      <Box p={2}>
        <Divider />
      </Box>
      <CardContent>
        <CardDetailRow />
        <CardDetailRow />
        <CardDetailRow />
        <CardDetailRow />
      </CardContent>
    </Card>
  </Box>
)
