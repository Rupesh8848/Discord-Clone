import styled from "@emotion/styled";
import React from "react";
const AvatarPreview = styled("div")({
  height: "42px",
  width: "42px",
  backgroundColor: "#5865f2",
  borderRadius: "42px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontsize: "20px",
  fontWeight: "700",
  marginLeft: "5px",
  color: "white",
});
export default function Avatar({ userName, large }) {
  return (
    <AvatarPreview style={large ? { height: "80px" } : {}}>
      {userName?.substring(0, 2)}
    </AvatarPreview>
  );
}
