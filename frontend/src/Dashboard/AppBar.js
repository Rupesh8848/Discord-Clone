import React from "react";
import { styled } from "@mui/material";
import DropDownMenu from "./DropDownMenu";
const MainContainer = styled("div")({
  position: "absolute",
  right: "0",
  top: "0",
  height: "48px",
  border: "1px solid black",
  width: "calc(100% - 326px)",
  backgroundColor: "#36393f",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "0 15px",
});

export default function AppBar() {
  return (
    <MainContainer>
      <DropDownMenu />
    </MainContainer>
  );
}
