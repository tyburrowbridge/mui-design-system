import * as React from "react"
import { Box, Drawer, IconButton, Paper, Stack } from "@mui/material"
import { SideBarIconButton } from "./SidebarIconButton"
import {
  DashboardRounded,
  ConfirmationNumberRounded,
  MapRounded,
  ViewTimelineRounded,
  GridOnRounded,
  OfflineBoltRounded,
} from "@mui/icons-material"
import { SIDEBAR_MAX_WIDTH } from "../config/consts"

const AppBarAppIcon = () => (
  <Box display={"flex"} justifyContent={"center"}>
    <IconButton size="large"></IconButton>
  </Box>
)

export const SideBar = () => (
  <Drawer
    open
    variant="persistent"
    PaperProps={{
      sx: {
        backgroundColor: (theme) => theme.palette.background.default,
      },
    }}
  >
    <Stack
      spacing={4}
      pt={1}
      pb={1}
      pl={{ xs: 0, sm: 2 }}
      pr={{ xs: 0, sm: 2 }}
      maxWidth={SIDEBAR_MAX_WIDTH}
      justifyContent={"center"}
    >
      <SideBarIconButton icon={<OfflineBoltRounded color="primary" />} />

      <Stack spacing={1}>
        <SideBarIconButton icon={<DashboardRounded />} />
        <SideBarIconButton icon={<MapRounded />} />
        <SideBarIconButton icon={<GridOnRounded />} />
        <SideBarIconButton icon={<ViewTimelineRounded />} />
        <SideBarIconButton icon={<ConfirmationNumberRounded />} />
      </Stack>
    </Stack>
  </Drawer>
)
