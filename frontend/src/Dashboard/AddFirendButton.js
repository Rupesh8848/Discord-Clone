import React from "react";
import ReuseablePrimaryButton from "../Components/ReuseablePrimaryButton";
import AddFriendDialog from "./AddFriendDialog";

const additionalStyles = {
  marginTop: "10px",
  marginLeft: "5px",
  width: "100%",
  height: "30px",
  background: "#3ba55d",
};

export default function AddFirendButton() {
  const [isDialogOpen, setIsDialogOpen] = React.useState(false);

  const handleOpenAddFriendDialog = () => {
    setIsDialogOpen(true);
  };

  const handleCloseAddFriendDialog = () => {
    setIsDialogOpen(false);
  };

  return (
    <>
      <ReuseablePrimaryButton
        additionalStyles={additionalStyles}
        label={"Add Friend"}
        onClick={handleOpenAddFriendDialog}
      />

      <AddFriendDialog
        isDialogOpen={isDialogOpen}
        closeDialogHandler={handleCloseAddFriendDialog}
      />
    </>
  );
}
