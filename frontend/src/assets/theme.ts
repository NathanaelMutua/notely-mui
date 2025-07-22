import { createTheme } from "@mui/material/styles";
import { blue, grey, orange } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: { main: blue[700] },
    secondary: { main: orange[600] },
    background: { default: "#fafafa", paper: "#ffffff" },
    text: { primary: grey[50], secondary: grey[600] },
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
          background: "#1976d2",
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
            boxShadow: "0 1px 2px 0 rgba(60, 60, 60, 0.20)", // wanna make it come closer
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
        },
      },
    },
  },
});

export default theme;
