import { Avatar } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import "../css/AABox.css";

export default function AABox() {
  const user = useSelector(selectUser);

  return (
    <div className="aabox">
      <div className="aabox__info">
        <Avatar
          src={
            user.photo
              ? user.photo
              : "https://images-platform.99static.com//_QXV_u2KU7-ihGjWZVHQb5d-yVM=/238x1326:821x1909/fit-in/500x500/99designs-contests-attachments/119/119362/attachment_119362573"
          }
          className="aabox__infoAvatar"
        />
        <h5>{user.displayName ? user.displayName : user.email}</h5>
      </div>
      <div className="aabox__aa">
        <p>What is your question?</p>
      </div>
    </div>
  );
}