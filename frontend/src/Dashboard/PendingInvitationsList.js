import styled from "@emotion/styled";
import React from "react";
import PendingInvitationsListItem from "./PendingInvitationsListItem";

const DUMMY_INVITATIONS = [
  {
    _id: "1",
    senderId: {
      userName: "Mark",
      mail: "dummy@ad.com",
    },
  },
  {
    _id: "2",
    senderId: {
      userName: "Henry",
      mail: "henry@ad.com",
    },
  },
  {
    _id: "3",
    senderId: {
      userName: "Rey",
      mail: "rey@ad.com",
    },
  },
];

const MainContainer = styled("div")({
  width: "100%",
  height: "22%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  overflow: "auto",
});

export default function PendingInvitationsList() {
  return (
    <MainContainer>
      {DUMMY_INVITATIONS.map((invitations) => (
        <PendingInvitationsListItem
          key={invitations._id}
          id={invitations._id}
          userName={invitations.senderId.userName}
          mail={invitations.senderId.mail}
        />
      ))}
    </MainContainer>
  );
}
