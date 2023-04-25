import React from "react";
import { styled } from "@mui/material";
import AddFirendButton from "./AddFirendButton";
import FriendsTitle from "./FriendsTitle";
import PendingInvitationsList from "./PendingInvitationsList";
import FriendsList from "./FriendsList";
const MainContainer = styled("div")({
  width: "224px",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  backgroundColor: "#2f3136",
  overflowY: "hidden",
  //   msOverflowStyle: "none",
  //   padding: 0,
});

export default function FriendsSideBar() {
  return (
    <MainContainer>
      <AddFirendButton />
      <FriendsTitle title="Private Messages" />
      <FriendsList />
      <FriendsTitle title={"Invitations"} />
      <PendingInvitationsList />
    </MainContainer>
  );
}
