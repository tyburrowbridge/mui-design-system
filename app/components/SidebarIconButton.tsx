import { IconButton } from "@mui/material"
import theme from "../config/theme"

type SideBarIconButtonProps = {
  icon: React.ReactElement
}

export const SideBarIconButton = (props: SideBarIconButtonProps) => (
  <IconButton size="medium" color="secondary">
    {props.icon}
  </IconButton>
)
