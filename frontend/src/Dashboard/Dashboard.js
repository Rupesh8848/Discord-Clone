import styled from "@emotion/styled";
import React from "react";
import SideBar from "./SideBar";
import FriendsSideBar from "./FriendsSideBar";
import Messenger from "./Messenger";
import AppBar from "./AppBar";
import { setUser } from "../Slices/userSlice";
import { useDispatch } from "react-redux";

const Wrapper = styled("div")({
  width: "100%",
  height: "100vh",
  display: "flex",
});

export default function Dashboard() {
  const dispatch = useDispatch();
  React.useEffect(() => {
    const userDetails = localStorage.getItem("user");
    if (!userDetails) {
      window.location.pathname = "login";
    } else {
      dispatch(setUser(userDetails));
    }
  }, []);

  return (
    <Wrapper>
      <SideBar />
      <FriendsSideBar />
      <Messenger />
      <AppBar />
    </Wrapper>
  );
}
