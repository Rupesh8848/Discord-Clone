import React from "react";
import { Typography } from "@mui/material";
export default function LoginPageHeader() {
  return (
    <>
      <Typography variant="h5" color={"white"}>
        Welcome Back!
      </Typography>
      <Typography color={"#b9bbbe"} component={"h6"}>
        We are happy that you're with us!
      </Typography>
    </>
  );
}
