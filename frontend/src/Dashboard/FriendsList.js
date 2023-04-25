import styled from "@emotion/styled";
import React from "react";
import FriendsListItem from "./FriendsListItem";

const DUMMY_FRIENDS = [
  {
    id: 1,
    userName: "Gregorio",
    isOnline: true,
  },
  {
    id: 2,
    userName: "Gordon",
    isOnline: true,
  },
  {
    id: 3,
    userName: "Wolfie",
    isOnline: false,
  },
  {
    id: 4,
    userName: "Anthe",
    isOnline: true,
  },
  {
    id: 5,
    userName: "Alvy",
    isOnline: false,
  },
  {
    id: 6,
    userName: "Brietta",
    isOnline: true,
  },
  {
    id: 7,
    userName: "Gayelord",
    isOnline: false,
  },
  {
    id: 8,
    userName: "Sioux",
    isOnline: true,
  },
  {
    id: 9,
    userName: "Hirsch",
    isOnline: true,
  },
  {
    id: 10,
    userName: "Keir",
    isOnline: false,
  },
  {
    id: 11,
    userName: "Stacey",
    isOnline: true,
  },
  {
    id: 12,
    userName: "Clarinda",
    isOnline: false,
  },
  {
    id: 13,
    userName: "Ruthy",
    isOnline: false,
  },
  {
    id: 14,
    userName: "Wanids",
    isOnline: true,
  },
  {
    id: 15,
    userName: "Corene",
    isOnline: false,
  },
  {
    id: 16,
    userName: "Candis",
    isOnline: true,
  },
  {
    id: 17,
    userName: "Clarette",
    isOnline: false,
  },
  {
    id: 18,
    userName: "Dorris",
    isOnline: true,
  },
  {
    id: 19,
    userName: "Tanny",
    isOnline: true,
  },
  {
    id: 20,
    userName: "Benetta",
    isOnline: false,
  },
  {
    id: 21,
    userName: "Robinet",
    isOnline: true,
  },
  {
    id: 22,
    userName: "Missie",
    isOnline: false,
  },
  {
    id: 23,
    userName: "Eleonora",
    isOnline: true,
  },
  {
    id: 24,
    userName: "Berti",
    isOnline: true,
  },
  {
    id: 25,
    userName: "Ulises",
    isOnline: false,
  },
  {
    id: 26,
    userName: "Fayre",
    isOnline: false,
  },
  {
    id: 27,
    userName: "Cristine",
    isOnline: false,
  },
  {
    id: 28,
    userName: "Gert",
    isOnline: true,
  },
  {
    id: 29,
    userName: "Anita",
    isOnline: true,
  },
  {
    id: 30,
    userName: "Cristobal",
    isOnline: false,
  },
  {
    id: 31,
    userName: "Valery",
    isOnline: false,
  },
  {
    id: 32,
    userName: "Fleming",
    isOnline: true,
  },
  {
    id: 33,
    userName: "Tonie",
    isOnline: true,
  },
  {
    id: 34,
    userName: "Mellicent",
    isOnline: false,
  },
  {
    id: 35,
    userName: "Lauritz",
    isOnline: true,
  },
  {
    id: 36,
    userName: "Debby",
    isOnline: false,
  },
  {
    id: 37,
    userName: "Pippy",
    isOnline: false,
  },
  {
    id: 38,
    userName: "Kristy",
    isOnline: false,
  },
  {
    id: 39,
    userName: "Pascal",
    isOnline: false,
  },
  {
    id: 40,
    userName: "Amaleta",
    isOnline: true,
  },
  {
    id: 41,
    userName: "Nils",
    isOnline: false,
  },
  {
    id: 42,
    userName: "Gussi",
    isOnline: true,
  },
  {
    id: 43,
    userName: "Ansley",
    isOnline: true,
  },
  {
    id: 44,
    userName: "Dorie",
    isOnline: true,
  },
  {
    id: 45,
    userName: "Lanni",
    isOnline: true,
  },
  {
    id: 46,
    userName: "Gillan",
    isOnline: true,
  },
  {
    id: 47,
    userName: "Elane",
    isOnline: true,
  },
  {
    id: 48,
    userName: "Sibeal",
    isOnline: true,
  },
  {
    id: 49,
    userName: "Shea",
    isOnline: false,
  },
  {
    id: 50,
    userName: "Jade",
    isOnline: true,
  },
];

const MainContainer = styled("div")({
  flexGrow: 1,
  width: "100%",
  overflowY: "scroll",
  msOverflowStyle: "none",
  scrollbarWidth: "none",
  height: "50%",
});

export default function FriendsList() {
  return (
    <MainContainer>
      {DUMMY_FRIENDS.map((friend) => (
        <FriendsListItem friend={friend} key={friend.id} />
      ))}
    </MainContainer>
  );
}
