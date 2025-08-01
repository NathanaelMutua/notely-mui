import { createTheme } from "@mui/material/styles";
import { blue, grey } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: { main: blue[700] },
    secondary: { main: "#83EEFF" },
    background: { default: "#fafafa", paper: "#ffffff" },
    text: { primary: grey[50], secondary: grey[600] },
  },
  typography: {
    fontFamily: '"Roboto", sans-serif',
  },
  components: {
    MuiCard: {
      defaultProps: {
        elevation: 5,
      },
      styleOverrides: {
        root: {
          backgroundColor: "rgba(0,0,0,0.5)",
          backdropFilter: "blur(10px)",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        contained: {
          boxShadow: "0 4px 14px 0 rgba(60, 60, 60, 0.25)",
          background: "#1976d2ff",
          color: "#fff",
          fontWeight: "bold",
          fontSize: "1.1rem",
          borderRadius: "5px",
          textTransform: "capitalize",
          transition: "transform 0.15s, box-shadow 0.2s, background 0.3s",
          "&:hover": {
            boxShadow: "0 2px 8px 0 rgba(60, 60, 60, 0.35)",
            transform: "translateY(-1.5px) scale(1.02)",
            background: "rgba(0, 0, 0, 0.4)",
          },
          "&:active": {
            boxShadow: "0 1px 2px 0 rgba(60, 60, 60, 0.20)",
            transform: "translateY(1px) scale(0.98)",
          },
        },
        outlined: {
          color: "#fff",
          border: "1px solid rgba(255,255,255,0.5)",
          textTransform: "capitalize",
          fontSize: "1.1rem",
          transition: "transform 0.15s, box-shadow 0.2s, background 0.3s",
          "&:hover": {
            boxShadow: "0 2px 8px 0 rgba(60, 60, 60, 0.35)",
            transform: "translateY(-1.5px) scale(1.02)",
            background: "rgba(255, 255, 255, 0.2)",
          },
          "&:active": {
            boxShadow: "0 1px 2px 0 rgba(60, 60, 60, 0.20)",
            transform: "translateY(1px) scale(0.98)",
          },
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          transition: "background-color 0.3s ease, transform 0.2s ease",
          borderRadius: "5px",
          "&:hover": {
            backgroundColor: "rgba(255, 255, 255, 0.05)",
            transform: "scale(1.1)",
          },
          "&:active": {
            transform: "scale(0.98)",
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          outline: "1px solid rgba(255,255,255,0.4)",
          borderRadius: "5px",
          "&:hover": {
            outline: "1px solid rgba(255,255,255,1)",
          },
        },
      },
    },
  },
});

export default theme;
