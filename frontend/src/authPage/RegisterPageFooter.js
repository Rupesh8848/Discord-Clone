import React from "react";
import ReuseablePrimaryButton from "../Components/ReuseablePrimaryButton";
import RedirectInfo from "../Components/RedirectInfo";
import { useNavigate } from "react-router-dom";
import Tooltip from "@mui/material/Tooltip";

export default function RegisterPageFooter({ handleRegister, isFormValid }) {
  const navigate = useNavigate();

  const handleRedirectToRegister = () => {
    navigate("/login");
  };

  return (
    <>
      <Tooltip
        title={`${
          isFormValid ? "Click to Register" : "Please check the input fields"
        }`}
      >
        <div>
          <ReuseablePrimaryButton
            label={"Register"}
            additionalStyles={{ marginTop: "30px" }}
            disabled={!isFormValid}
            onClick={handleRegister}
          />
        </div>
      </Tooltip>
      <RedirectInfo
        text={"Already have an account?"}
        redirectText={"Login?"}
        additonalStyles={{ marginTop: "5px" }}
        redirectHandler={handleRedirectToRegister}
      />
    </>
  );
}
