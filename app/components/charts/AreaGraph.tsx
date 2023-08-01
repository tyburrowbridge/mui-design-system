import surfaceDataVis from "@/app/config/colors/surfaceDataVis"
import { Box } from "@mui/material"
import { LineChart } from "@mui/x-charts/LineChart"

const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490]

export const AreaGraph = () => (
  <Box width={1}>
    <LineChart
      margin={{ top: 8 }}
      height={300}
      series={[{ data: uData, area: true }]}
      // xAxis={[{ scaleType: "point", data: xLabels }]}
      legend={{
        direction: "row",
        position: {
          vertical: "bottom",
          horizontal: "middle",
        },
      }}
      colors={[surfaceDataVis.grey.main]}
    />
  </Box>
)
