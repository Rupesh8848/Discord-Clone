import React from "react";
import AuthBox from "../Components/AuthBox";
import { Typography } from "@mui/material";
import RegisterPageInput from "./RegisterPageInput";
import RegisterPageFooter from "./RegisterPageFooter";
import { validateRegisterForm } from "../utils/formValidator";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../Slices/userSlice";
import { useNavigate } from "react-router-dom";

export default function RegisterPage() {
  const [formData, setFormData] = React.useState({});
  const [isFormValid, setIsFormValid] = React.useState(false);

  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const navigate = useNavigate();

  React.useEffect(() => {
    setIsFormValid(validateRegisterForm(formData));
  }, [formData, setIsFormValid]);

  const handleRegister = async (event) => {
    event.preventDefault();
    try {
      dispatch(registerUser(formData));
    } catch (error) {
      console.log("error loggin in.");
    }
  };

  React.useEffect(() => {
    const userDetails = localStorage.getItem("user");
    if (userDetails) {
      // navigate("/dashboard");
      window.location.pathname = "dashboard";
    }
  }, []);

  if (user) {
    navigate("/dashboard");
  }

  return (
    <AuthBox>
      <Typography variant="h5" color={"white"}>
        Create an Account
      </Typography>
      <RegisterPageInput formData={formData} setFormData={setFormData} />
      <RegisterPageFooter
        isFormValid={isFormValid}
        handleRegister={handleRegister}
      />
    </AuthBox>
  );
}
