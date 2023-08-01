import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  IconButton,
  Tooltip,
} from "@mui/material"
import { CircleRounded, InfoRounded } from "@mui/icons-material"
import surfaceStatus from "../config/colors/surfaceStatus"
import { Sparklines, SparklinesCurve } from "react-sparklines-typescript"
import surfaceDataVis from "../config/colors/surfaceDataVis"

const SummaryCardStatusDot = () => (
  <CircleRounded
    sx={{
      color: surfaceStatus.green.main,
    }}
  />
)

const SummaryCardSparklineGraph = () => (
  <Sparklines data={[16, 5, 7, 9, 12, 20, 10, 29, 11, 18, 19]} min={0} max={30}>
    <SparklinesCurve color={surfaceDataVis.grey.light} margin={0} />
  </Sparklines>
)

const CardTooltip = () => (
  <Tooltip title="hello world." placement="left">
    <IconButton size="small">
      <InfoRounded />
    </IconButton>
  </Tooltip>
)

export const SummaryCard = () => (
  <Box width={1} height={1}>
    <Card>
      <CardHeader
        title="IFC Availability"
        subheader="A subheader goes here"
        action={<CardTooltip />}
      />
      <CardContent>
        <SummaryCardSparklineGraph />
      </CardContent>
      <CardActions>
        <Button variant="contained" size="medium">
          Flight
        </Button>
        <Button variant="outlined" size="medium">
          Details
        </Button>
      </CardActions>
    </Card>
  </Box>
)
