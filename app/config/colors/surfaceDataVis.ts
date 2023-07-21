import { surfaceGrey } from "../colors"
import surfacePurple from "./surfacePurple"

const surfaceDataVis = {
  purpleMain: surfacePurple.main,
  purpleDark: surfacePurple.dark,
  purpleLight: surfacePurple.light,

  greyMain: surfaceGrey[600],
  greyDark: surfaceGrey[900],
  greyLight: surfaceGrey[400],
} as const

export default surfaceDataVis
