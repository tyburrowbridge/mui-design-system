import * as React from "react"
import { Stack, Box } from "@mui/material"
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

export const SideBar = () => (
  <Box
    zIndex={(theme) => theme.zIndex.appBar + 1}
    display={{ xs: "none", sm: "block" }}
    position={"fixed"}
  >
    <Stack
      spacing={2}
      pt={2.75}
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
  </Box>
)
