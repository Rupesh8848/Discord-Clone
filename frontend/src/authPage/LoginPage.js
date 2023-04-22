import React from "react";
import AuthBox from "../Components/AuthBox";
import LoginPageHeader from "./LoginPageHeader";
import LoginPageInputs from "./LoginPageInputs";
import LoginPageFooter from "./LoginPageFooter";
import { validateLoginForm } from "../utils/formValidator";

export default function LoginPage() {
  const [formData, setFormData] = React.useState({});

  const [isFormValid, setIsFormValid] = React.useState(false);

  React.useEffect(() => {
    setIsFormValid(validateLoginForm(formData));
  }, [formData, setIsFormValid]);

  const handleLogin = () => {
    console.log("Login");
  };

  return (
    <AuthBox>
      <LoginPageHeader />
      <LoginPageInputs formData={formData} setFormData={setFormData} />
      <LoginPageFooter isFormValid={isFormValid} handleLogin={handleLogin} />
    </AuthBox>
  );
}
