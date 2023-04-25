import { Button, Typography } from "@mui/material";
import React from "react";
import Avatar from "../Components/Avatar";
import OnlineIndicator from "./OnlineIndicator";

export default function FriendsListItem({ friend }) {
  const { userName, id, isOnline } = friend;
  return (
    <Button
      style={{
        width: "100%",
        height: "42px",
        marginTop: "10px",
        display: "flex",
        alignItems: "center",
        textTransform: "none",
        color: "black",
        position: "relative",
        justifyContent: "left",
      }}
    >
      <Avatar userName={userName} />
      <Typography
        style={{ marginLeft: "7px", fontWeight: "700", color: "#8e9297" }}
        variant="subtitle1"
        align="left"
      >
        {userName}
      </Typography>
      {isOnline && <OnlineIndicator />}
    </Button>
  );
}
