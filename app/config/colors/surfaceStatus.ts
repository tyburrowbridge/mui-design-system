import { green, orange, pink } from "@mui/material/colors"

const surfaceStatus = {
  green: {
    main: green.A400,
    dark: green.A700,
    light: green.A200,
  },
  amber: {
    main: orange.A400,
    dark: orange.A700,
    light: orange.A200,
  },
  red: {
    main: pink.A400,
    dark: pink.A700,
    light: pink.A200,
  },
} as const

export default surfaceStatus
