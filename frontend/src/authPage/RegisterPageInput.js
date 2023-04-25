import React from "react";
import ReuseableInput from "../Components/ReuseableInput";

export default function RegisterPageInput({ formData, setFormData }) {
  return (
    <>
      <ReuseableInput
        value={formData.email}
        label={"Email Address"}
        type="text"
        placeholder={"Enter your email address"}
        setValue={setFormData}
        name={"email"}
      />
      <ReuseableInput
        value={formData.userName}
        label={"userName"}
        type="text"
        placeholder={"Enter user name"}
        setValue={setFormData}
        name={"userName"}
      />
      <ReuseableInput
        value={formData.password}
        label={"Password"}
        type="password"
        placeholder={"Enter your password"}
        setValue={setFormData}
        name={"password"}
      />
    </>
  );
}
