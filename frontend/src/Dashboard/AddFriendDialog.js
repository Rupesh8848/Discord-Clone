import React from "react";
import { validateMail } from "../utils/formValidator";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Typography,
} from "@mui/material";
import ReuseableInput from "../Components/ReuseableInput";
import ReuseablePrimaryButton from "../Components/ReuseablePrimaryButton";

export default function AddFriendDialog({
  isDialogOpen,
  closeDialogHandler,
  sendFriendInvitation = () => {},
}) {
  const [form, setForm] = React.useState({});
  const [isFormValid, setIsFormValid] = React.useState(false);

  const handleSendInvitation = () => {
    //send friend request to server
  };

  const handleCloseDialog = () => {
    closeDialogHandler();
    setForm({});
  };

  React.useEffect(() => {
    setIsFormValid(validateMail(form?.email));
  }, [form, setIsFormValid]);

  return (
    <div>
      <Dialog open={isDialogOpen} onClose={handleCloseDialog}>
        <DialogTitle>
          <Typography>Invite a friend</Typography>
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            <Typography>Enter e-mail address of a friend to invite:</Typography>
            <ReuseableInput
              placeholder={"Email"}
              label={"Mail"}
              value={form.mail}
              setValue={setForm}
              name={"email"}
            />
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <ReuseablePrimaryButton
            onClick={handleSendInvitation}
            disabled={!isFormValid}
            label="Send"
            additionalStyles={{
              marginLeft: "15px",
              marginRight: "15px",
              marginBottom: "10px",
            }}
          />
        </DialogActions>
      </Dialog>
    </div>
  );
}
