import { Box, CircularProgress } from "@mui/material";
import React from "react";

function LoadingComponent() {
  return (
    <Box
      sx={{
        width: "60%",
        marginLeft: "auto",
        marginRight: "auto",
        textAlign: "center",
        padding: "3rem",
      }}
    >
      <React.Fragment>
        <svg width={0} height={0}>
          <defs>
            <linearGradient id="my_gradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#edededff" />
              <stop offset="100%" stopColor="#1CB5E0" />
            </linearGradient>
          </defs>
        </svg>
        <CircularProgress
          size={100}
          sx={{ "svg circle": { stroke: "url(#my_gradient)" } }}
        />
      </React.Fragment>
    </Box>
  );
}

export default LoadingComponent;
