import styled from "@emotion/styled"
import React from "react"
import {
  BoltRounded,
  DashboardRounded,
  MapRounded,
  MenuRounded,
  ListAltRounded,
  ExpandMoreRounded,
  VerifiedUserRounded,
  PersonRounded,
} from "@mui/icons-material"
import {
  Button,
  Checkbox,
  Radio,
  Switch,
  TextField,
  Select,
  Stack,
  MenuItem,
  Slider,
  Autocomplete,
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Avatar,
  Badge,
  Chip,
  Paper,
  Card,
  CardHeader,
  CardContent,
  CardActions,
  CardMedia,
  Stepper,
  Step,
  StepLabel,
  Tab,
  Tabs,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Tooltip,
  Typography,
  Popover,
  Snackbar,
  Alert,
  Backdrop,
  CircularProgress,
  InputLabel,
  Container,
  Grid,
  Box,
} from "@mui/material"
const ComponentWrapper = styled(Grid)({
  padding: "1rem",

  border: "1px solid #ccc",
  margin: "1rem",
  borderRadius: "8px",
})

const ComponentContainer = styled(Box)({
  textAlign: "center",
  marginBottom: "4rem",
})

const AllComponentsPage: React.FC = () => {
  const [open, setOpen] = React.useState(false)

  const handleDrawerToggle = () => {
    setOpen(!open)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const handleSnackbarClose = () => {
    console.log("Snackbar closed")
  }

  return (
    <Box p={3}>
      <Typography variant="h4" gutterBottom align="center">
        All Material-UI v5 Components
      </Typography>

      <ComponentContainer>
        <Typography variant="h5" align="center">
          Typography
        </Typography>
        <ComponentWrapper>
          <Stack direction="row" spacing={2}>
            <Typography variant="h1">H1</Typography>
            <Typography variant="h1">Hello World.</Typography>
          </Stack>
          <Typography variant="h2">H2</Typography>
          <Typography variant="h3">H3</Typography>
          <Typography variant="h4">H4</Typography>
          <Typography variant="h5">H5</Typography>
        </ComponentWrapper>
      </ComponentContainer>

      <ComponentContainer>
        <Typography variant="h5" align="center">
          Core Components
        </Typography>
        <ComponentWrapper container spacing={2}>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Button variant="contained" color="primary">
              Button
            </Button>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Checkbox color="primary" />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Radio color="primary" />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Switch color="primary" />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <TextField label="Text Field" variant="outlined" />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <InputLabel>Hello</InputLabel>
            <Select
              variant="standard"
              displayEmpty
              defaultValue={""}
              value={""}
            >
              <MenuItem value={1}>Option 1</MenuItem>
              <MenuItem value={2}>Option 2</MenuItem>
              <MenuItem value={3}>Option 3</MenuItem>
            </Select>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Slider defaultValue={50} />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Autocomplete
              options={["Option 1", "Option 2", "Option 3"]}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Autocomplete"
                  variant="outlined"
                />
              )}
            />
          </Grid>
        </ComponentWrapper>
      </ComponentContainer>

      <ComponentContainer>
        <Typography variant="h5">Navigation Components</Typography>
        <ComponentWrapper container spacing={2}>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <AppBar position="static">
              <Toolbar>
                <IconButton edge="start" color="inherit" aria-label="menu">
                  <MenuRounded />
                </IconButton>
                <Typography variant="h6" sx={{ flexGrow: 1 }}>
                  App Bar
                </Typography>
                <Button color="inherit">Login</Button>
              </Toolbar>
            </AppBar>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Drawer anchor="left" open={open} onClose={handleClose}>
              <List>
                <ListItem button>
                  <ListItemIcon>
                    <DashboardRounded />
                  </ListItemIcon>
                  <ListItemText primary="InboxRounded" />
                </ListItem>
                <ListItem button>
                  <ListItemIcon>
                    <MapRounded />
                  </ListItemIcon>
                  <ListItemText primary="MailRounded" />
                </ListItem>
              </List>
              <Divider />
              <List>
                <ListItem button>
                  <ListItemIcon>
                    <ExpandMoreRounded />
                  </ListItemIcon>
                  <ListItemText primary="Drafts" />
                </ListItem>
              </List>
            </Drawer>
            <IconButton color="inherit" onClick={handleDrawerToggle}>
              <ListAltRounded />
            </IconButton>
          </Grid>
          {/* Add more navigation components here */}
        </ComponentWrapper>
      </ComponentContainer>

      <ComponentContainer>
        <Typography variant="h5">Data Display Components</Typography>
        <ComponentWrapper container spacing={2}>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Avatar />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Badge badgeContent={4} color="primary">
              <ListAltRounded />
            </Badge>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Chip label="Chip" />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Paper elevation={3}>
              <Typography variant="body1" component="div" p={2}>
                Paper
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Card>
              <CardHeader title="Card" />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  Card content
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Stepper activeStep={1}>
              <Step>
                <StepLabel>Step 1</StepLabel>
              </Step>
              <Step>
                <StepLabel>Step 2</StepLabel>
              </Step>
              <Step>
                <StepLabel>Step 3</StepLabel>
              </Step>
            </Stepper>
          </Grid>
        </ComponentWrapper>
      </ComponentContainer>

      <ComponentContainer>
        <Typography variant="h5">UI Components</Typography>
        <ComponentWrapper container spacing={2}>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Tab label="Tab 1" />
            <Tab label="Tab 2" />
            <Tab label="Tab 3" />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Tabs value={0}>
              <Tab label="Tab 1" />
              <Tab label="Tab 2" />
              <Tab label="Tab 3" />
            </Tabs>
          </Grid>
          {/* Add more UI components here */}
        </ComponentWrapper>
      </ComponentContainer>

      <ComponentContainer>
        <Typography variant="h5">Feedback Components</Typography>
        <ComponentWrapper container spacing={2}>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreRounded />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>Accordion</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Dialog open={open} onClose={handleClose}>
              <DialogTitle>Dialog</DialogTitle>
              <DialogContent>
                <Typography variant="body1">Dialog content</Typography>
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose} color="primary">
                  Close
                </Button>
              </DialogActions>
            </Dialog>
            <Button
              variant="outlined"
              color="primary"
              onClick={handleDrawerToggle}
            >
              Open Dialog
            </Button>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Tooltip title="Tooltip Text">
              <Button variant="contained" color="primary">
                Tooltip
              </Button>
            </Tooltip>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Popover
              open={open}
              onClose={handleClose}
              anchorReference="anchorPosition"
              anchorPosition={{ top: 200, left: 400 }}
            >
              <Typography>Popover Content</Typography>
            </Popover>
            <Button
              variant="contained"
              color="primary"
              onClick={handleDrawerToggle}
            >
              Open Popover
            </Button>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Snackbar
              open={open}
              autoHideDuration={6000}
              onClose={handleSnackbarClose}
            >
              <Alert onClose={handleSnackbarClose} severity="success">
                Snackbar
              </Alert>
            </Snackbar>
            <Button
              variant="outlined"
              color="primary"
              onClick={handleDrawerToggle}
            >
              Open Snackbar
            </Button>
          </Grid>
        </ComponentWrapper>
      </ComponentContainer>

      <ComponentContainer>
        <Typography variant="h5">Feedback Components</Typography>
        <ComponentWrapper container spacing={2}>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Backdrop open={open}>
              <CircularProgress color="inherit" />
            </Backdrop>
            <Button
              variant="outlined"
              color="primary"
              onClick={handleDrawerToggle}
            >
              Open Backdrop
            </Button>
          </Grid>
          {/* Add more other components here */}
        </ComponentWrapper>
      </ComponentContainer>
    </Box>
  )
}
