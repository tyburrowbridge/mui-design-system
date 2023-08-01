import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Typography,
  Stack,
  Grid,
} from "@mui/material"
import { ProgressBar } from "./ProgressBar"
import { surfaceGrey } from "../config/colors"

interface CardDetailRowProps {
  label: string
  value: string
}

const CardDetailRow = ({ label, value }: CardDetailRowProps) => (
  <Box width={1} p={0.25}>
    <Stack direction={"row"} justifyContent={"space-between"} width={1}>
      <Typography variant="label" color={surfaceGrey.secondary.main}>
        {label}
      </Typography>
      <Typography variant="body1">{value}</Typography>
    </Stack>
  </Box>
)

const InfoCardTitle = () => (
  <Grid container alignItems={"center"}>
    <Grid item xs={12} sm={9}>
      <Typography variant="h5" width={1}>
        N2983F
      </Typography>
    </Grid>
    <Grid item xs={12} sm={3}>
      <ProgressBar />
    </Grid>
  </Grid>
)

export const InfoCard = () => (
  <Box width={1} height={1}>
    <Card sx={{ borderTop: 8, borderColor: surfaceGrey.secondary.main }}>
      <CardHeader title={<InfoCardTitle />} />

      <CardContent>
        <Typography variant="overline">Vehicle Info</Typography>
        <Stack spacing={1 / 2}>
          <CardDetailRow label="Make" value="Boeing" />
          <CardDetailRow label="Model" value="747-MAX" />
          <CardDetailRow label="Fleet" value="MAX Aircrafts" />
          <CardDetailRow label="Antenna" value="Ka" />
        </Stack>
      </CardContent>
    </Card>
  </Box>
)
