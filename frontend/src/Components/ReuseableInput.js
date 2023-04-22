import styled from "@emotion/styled";
import React from "react";

const Wrapper = styled("div")({
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  width: "100%",
});

const Label = styled("p")({
  color: "#b9bbb3",
  textTransform: "uppercase",
  fontWeight: "600",
  fontSize: "16px",
});

const Input = styled("input")({
  flexGrow: 1,
  height: "40px",
  border: "1px solid black",
  borderRadius: "5px",
  color: "#dcddde",
  background: "#35393f",
  margin: 0,
  fontsize: "16px",
  padding: "0 5px",
});

export default function ReuseableInput({
  label,
  value,
  setValue,
  name,
  type = "",
  placeholder,
}) {
  return (
    <Wrapper>
      <Label>{label}</Label>
      <Input
        value={value}
        type={type}
        name={name}
        placeholder={placeholder}
        onChange={(event) => {
          setValue((oldValue) => ({
            ...oldValue,
            [event.target.name]: event.target.value,
          }));
        }}
      />
    </Wrapper>
  );
}
