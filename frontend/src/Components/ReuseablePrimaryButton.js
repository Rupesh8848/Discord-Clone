import React from "react";
import { Button } from "@mui/material";
export default function ReuseablePrimaryButton({
  label,
  disabled,
  onClick,
  additionalStyles,
}) {
  return (
    <div>
      <Button
        variant="contained"
        sx={{
          bgcolor: "#5865f2",
          color: "white",
          textTransform: "none",
          fontSize: "16px",
          fontWeight: "500",
          width: "100%",
          height: "40px",
        }}
        style={additionalStyles ? additionalStyles : ""}
        disabled={disabled}
        onClick={onClick}
      >
        {label}
      </Button>
    </div>
  );
}
