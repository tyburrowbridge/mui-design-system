import * as React from "react"
import { styled } from "@mui/system"
import { Stack } from "@mui/material"
import { SideBarIconButton } from "./SidebarIconButton"
import {
  DashboardRounded,
  ConfirmationNumberRounded,
  MapRounded,
  ViewTimelineRounded,
  GridOnRounded,
} from "@mui/icons-material"

const StyledStack = styled(Stack)({})

export const SideBar = () => (
  <StyledStack spacing={1} pt={1} pb={4}>
    <SideBarIconButton icon={<DashboardRounded />} />
    <SideBarIconButton icon={<MapRounded />} />
    <SideBarIconButton icon={<GridOnRounded />} />
    <SideBarIconButton icon={<ViewTimelineRounded />} />
    <SideBarIconButton icon={<ConfirmationNumberRounded />} />
  </StyledStack>
)
