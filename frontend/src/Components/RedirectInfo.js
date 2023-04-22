import styled from "@emotion/styled";
import { Typography } from "@mui/material";
import React from "react";

const RedirectText = styled("span")({
  color: "#00Aff4",
  fontWeight: 500,
  cursor: "pointer",
});

export default function RedirectInfo({
  text,
  redirectText,
  additonalStyles,
  redirectHandler,
}) {
  return (
    <Typography
      sx={{ color: "#72767d" }}
      style={additonalStyles ? additonalStyles : ""}
      variant="subtitle2"
    >
      {text}
      <RedirectText onClick={redirectHandler}> {redirectText}</RedirectText>
    </Typography>
  );
}
