import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardHeader,
} from "@mui/material"

export const SummaryCard = () => (
  <Card sx={{ width: 1 }}>
    <CardHeader title="N2983F"></CardHeader>
    <CardActions>
      <Button variant="contained" size="medium">
        Flight
      </Button>
      <Button variant="outlined" size="medium">
        Details
      </Button>
    </CardActions>
  </Card>
)
