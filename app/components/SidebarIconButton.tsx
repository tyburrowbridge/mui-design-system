import { IconButton } from "@mui/material"

interface SideBarIconButtonProps {
  icon: React.ReactElement
}

export const SideBarIconButton = ({ icon }: SideBarIconButtonProps) => (
  <IconButton size="medium" color="secondary">
    {icon}
  </IconButton>
)
