import React from "react";
import ReuseablePrimaryButton from "../Components/ReuseablePrimaryButton";
import RedirectInfo from "../Components/RedirectInfo";
import { useNavigate } from "react-router-dom";
import Tooltip from "@mui/material/Tooltip";

export default function LoginPageFooter({ handleLogin, isFormValid }) {
  const navigate = useNavigate();

  const handleRedirectToRegister = () => {
    navigate("/register");
  };

  return (
    <>
      <Tooltip
        title={`${
          isFormValid ? "Click to login" : "Please check the credentials"
        }`}
      >
        <div>
          <ReuseablePrimaryButton
            label={"Login"}
            additionalStyles={{ marginTop: "30px" }}
            disabled={!isFormValid}
            onClick={handleLogin}
          />
        </div>
      </Tooltip>
      <RedirectInfo
        text={"Need an account?"}
        redirectText={"Create an Account"}
        additonalStyles={{ marginTop: "5px" }}
        redirectHandler={handleRedirectToRegister}
      />
    </>
  );
}
