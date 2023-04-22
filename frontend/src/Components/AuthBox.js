import React from "react";
import Box from "@mui/material/Box";
import { styled } from "@mui/system";
import { Paper } from "@mui/material";

const BoxWrapper = styled("div")({
  width: "100%",
  height: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: "#5865F2",
});

export default function AuthBox(props) {
  return (
    <BoxWrapper>
      <Paper
        elevation={5}
        sx={{
          width: 700,
          height: 400,
          bgcolor: "#36393f",
          borderRadius: "20px",
          //   boxShadow: "0 2px 0 rgb(0 0 0 / 20%)",
          display: "flex",
          flexDirection: "column",
          padding: "25px",
        }}
      >
        {props.children}
      </Paper>
    </BoxWrapper>
  );
}
