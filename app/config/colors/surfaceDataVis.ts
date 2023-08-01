import { surfaceGrey } from "../colors"
import surfacePurple from "./surfacePurple"

const surfaceDataVis = {
  purple: {
    light: surfacePurple.light,
    main: surfacePurple.main,
    dark: surfacePurple.dark,
  },
  grey: {
    light: surfaceGrey[400],
    main: surfaceGrey[600],
    dark: surfaceGrey[900],
  },
} as const

export default surfaceDataVis
