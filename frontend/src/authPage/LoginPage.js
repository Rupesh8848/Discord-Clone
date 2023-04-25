import React from "react";
import AuthBox from "../Components/AuthBox";
import LoginPageHeader from "./LoginPageHeader";
import LoginPageInputs from "./LoginPageInputs";
import LoginPageFooter from "./LoginPageFooter";
import { validateLoginForm } from "../utils/formValidator";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../Slices/userSlice";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const [formData, setFormData] = React.useState({});
  const [isFormValid, setIsFormValid] = React.useState(false);

  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const navigate = useNavigate();

  React.useEffect(() => {
    setIsFormValid(validateLoginForm(formData));
  }, [formData, setIsFormValid]);

  const handleLogin = async () => {
    dispatch(loginUser(formData));
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
      <LoginPageHeader />
      <LoginPageInputs formData={formData} setFormData={setFormData} />
      <LoginPageFooter isFormValid={isFormValid} handleLogin={handleLogin} />
    </AuthBox>
  );
}
