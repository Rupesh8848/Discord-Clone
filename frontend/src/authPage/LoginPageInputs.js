import { Box, Stack } from "@mui/material";
import React from "react";
import ReuseableInput from "../Components/ReuseableInput";

export default function LoginPageInputs({ formData, setFormData }) {
  return (
    <Stack>
      <ReuseableInput
        label={"Email"}
        value={formData?.email}
        setValue={setFormData}
        name={"email"}
        type="email"
        placeholder={"Enter your email"}
      />
      <ReuseableInput
        label={"Password"}
        value={formData?.password}
        setValue={setFormData}
        name={"password"}
        type={"password"}
        placeholder={"Enter your password"}
      />
    </Stack>
  );
}
