import { createTheme, responsiveFontSizes } from "@mui/material/styles"
import { surfaceGrey, surfaceRed } from "./colors"
import { Uni, SourceSans } from "../assets/fonts"
import type {} from "@mui/x-data-grid/themeAugmentation"
import { KeyboardArrowDownRounded } from "@mui/icons-material"

declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    myAwesomeColor: true
  }
}

const theme = createTheme({
  // PALETTE
  palette: {
    background: {
      default: surfaceGrey[100],
    },
    primary: {
      main: surfaceGrey.primary.main,
    },
    secondary: {
      main: surfaceGrey.secondary.main,
    },
    error: {
      main: surfaceRed.main,
    },
  },

  // TYPOGRAPHY
  typography: {
    allVariants: {
      color: surfaceGrey[900],
    },
    h1: {
      fontFamily: Uni.style.fontFamily,
      fontWeight: "100",
    },
    h2: {
      fontFamily: Uni.style.fontFamily,
      fontWeight: "100",
    },
    h3: {
      fontFamily: Uni.style.fontFamily,
      fontWeight: "100",
    },
    h4: {
      fontFamily: Uni.style.fontFamily,
      fontWeight: "100",
    },
    h5: {
      fontFamily: Uni.style.fontFamily,
      fontWeight: "bold",
    },
    h6: {
      fontFamily: Uni.style.fontFamily,
      fontWeight: "bold",
    },
    body1: {
      fontFamily: SourceSans.style.fontFamily,
      fontWeight: "normal",
    },
    body2: {
      fontFamily: SourceSans.style.fontFamily,
      fontWeight: "normal",
    },
    overline: {
      fontFamily: SourceSans.style.fontFamily,
      fontWeight: "bold",
    },
    caption: {
      fontFamily: SourceSans.style.fontFamily,
      fontWeight: "normal",
    },
  },

  // COMPONENTS
  components: {
    // MUI AppBar
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: surfaceGrey[100],
          color: surfaceGrey[900],
        },
      },
      defaultProps: {
        elevation: 0,
      },
    },

    // MUI Button Base
    MuiButtonBase: {
      styleOverrides: {
        root: {
          textTransform: "none",
        },
      },
    },

    // MUI Icon
    MuiSvgIcon: {
      styleOverrides: {
        root: {},
      },
    },

    // MUI Button
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 3000,
          textTransform: "none",
          fontFamily: SourceSans.style.fontFamily,
        },
        // Button: Large
        sizeLarge: {
          maxHeight: 40,
          fontSize: 16,
        },

        // Button: Medium
        sizeMedium: {
          maxHeight: 32,
          fontSize: 14,
        },

        // Button: Small
        sizeSmall: {
          maxHeight: 28,
          fontSize: 14,
        },
      },

      defaultProps: {
        disableElevation: true,
        disableRipple: true,
        size: "medium",
        color: "primary",
      },
    },

    // MUI Card
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 6,
          paddingTop: 8,
          paddingBottom: 10,
          paddingLeft: 8,
          paddingRight: 8,
        },
      },
    },

    // MUI Avatar
    MuiAvatar: {
      styleOverrides: {
        root: {
          backgroundColor: surfaceGrey[200],
          color: surfaceGrey[900],
        },
      },
    },

    // MUI Stack
    MuiStack: {
      defaultProps: {
        spacing: 2,
      },
    },

    // MUI Paper
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          padding: 8,
        },
      },
      defaultProps: {
        elevation: 0,
      },
    },

    // Mui Drawer
    MuiDrawer: {
      defaultProps: {
        elevation: 0,
      },
      styleOverrides: {
        paper: {
          border: 0,
        },
      },
    },

    // MUI Tooltip
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          backgroundColor: surfaceGrey[600],
          fontFamily: SourceSans.style.fontFamily,
          fontWeight: 400,
          fontSize: 14,
        },
      },
    },

    // MUI Icon Button
    MuiIconButton: {
      styleOverrides: {
        root: {
          backgroundColor: "transparent",
          color: surfaceGrey[400],
          ":hover": {
            backgroundColor: "transparent",
            color: surfaceGrey[600],
          },
          ":active": {
            color: surfaceGrey[600],
          },
        },
      },
    },

    // MUI DATA GRID
    MuiDataGrid: {
      styleOverrides: {
        root: {
          border: "none",
          borderRadius: 8,
          backgroundColor: "white",
          paddingTop: 16,
          paddingBottom: 24,
        },

        // Column Seperator
        columnSeparator: {
          display: "none",
        },

        // Column Headers
        columnHeaders: {
          backgroundColor: "white",
          borderTopLeftRadius: 8,
          borderTopRightRadius: 8,
        },

        // Column Header
        columnHeader: {
          ":first-child": {
            paddingLeft: 24,
          },
          ":focus": {
            outline: "none",
          },
          ":focus-within": {
            outline: "none",
          },
          ":active": {
            outline: "none",
          },
        },
        // Column Header Title
        columnHeaderTitle: {
          fontWeight: 700,
        },

        // Row
        row: {
          ":hover": {
            backgroundColor: "transparent",
          },
          ":nth-child(odd)": {
            backgroundColor: surfaceGrey[100],
          },
          border: "none",
        },
        withBorderColor: {
          border: "none",
        },

        // Cell
        cell: {
          ":focus": {
            outline: "none",
          },
          ":active": {
            outline: "none",
          },
          ":first-child": {
            paddingLeft: 28,
          },
        },
      },

      defaultProps: {
        disableColumnFilter: true,
        disableColumnMenu: true,
        disableColumnSelector: true,
        disableRowSelectionOnClick: true,
        hideFooter: true,
        rowSelection: false,
      },
    },

    // MUI Input
    MuiInput: {
      styleOverrides: {
        root: {
          backgroundColor: "white",
          borderRadius: 3000,
          borderWidth: 1,
          borderColor: "red",
          paddingLeft: 16,
          paddingRight: 16,
        },
      },
      defaultProps: {
        disableUnderline: true,
      },
    },

    // MUI Input Label
    MuiInputLabel: {
      styleOverrides: {
        root: {
          fontSize: 14,
          color: surfaceGrey[600],
          paddingLeft: 8,
          paddingBottom: 2,
        },
      },
      defaultProps: {},
    },

    // MUI Select
    MuiSelect: {
      styleOverrides: {
        icon: {
          right: 8,
          color: surfaceGrey[400],
        },
      },
      defaultProps: {
        fullWidth: true,
        variant: "standard",
        IconComponent: KeyboardArrowDownRounded,
        color: "primary",
        placeholder: "Select",
        label: "Label",
      },
    },
  },
})
export default responsiveFontSizes(theme)
