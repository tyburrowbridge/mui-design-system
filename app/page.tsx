"use client"
import * as React from "react"
import theme from "./config/theme"
import { ThemeProvider } from "@mui/material/styles"
import CssBaseline from "@mui/material/CssBaseline"
import { MockPage } from "./pages/MockPage"

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <MockPage />
    </ThemeProvider>
  )
}
