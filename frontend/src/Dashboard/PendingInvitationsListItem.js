import { Box, Tooltip, Typography } from "@mui/material";
import React from "react";
import Avatar from "../Components/Avatar";
import InvitationDecisionButtons from "./InvitationDecisionButtons";

export default function PendingInvitationsListItem({
  id,
  userName,
  mail,
  accpetFriendInvitation = () => {},
  rejectFriendInvitation = () => {},
}) {
  const [buttonDisabled, setButtonDisabled] = React.useState(false);

  const handleAcceptInvitation = () => {
    accpetFriendInvitation({ id });
    setButtonDisabled(true);
  };

  const handleRejectInvitation = () => {
    rejectFriendInvitation();
    setButtonDisabled(true);
  };

  return (
    <Tooltip title={mail}>
      <div style={{ width: "100%" }}>
        <Box
          sx={{
            width: "100%",
            height: "42px",
            marginTop: "10px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Avatar userName={userName} />
          <Typography
            sx={{
              marginLeft: "7px",
              fontWeight: "700",
              color: "#8e9297",
              flexGrow: 1,
            }}
            variant="subtitle1"
          >
            {userName}
          </Typography>
          <InvitationDecisionButtons
            disabled={buttonDisabled}
            acceptInvitationHandler={handleAcceptInvitation}
            rejectInvitationHandler={rejectFriendInvitation}
          />
        </Box>
      </div>
    </Tooltip>
  );
}
