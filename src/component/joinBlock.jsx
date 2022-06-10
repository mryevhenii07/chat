import React from "react";
import socket from "../socket";
const JoinBlock = () => {
  return (
    <div>
      <input type="text" name="" id="" placeholder="RoomId" />
      <br />
      <input
        type="text"
        name=""
        id=""
        placeholder="Your name"
        style={{ marginTop: "10px" }}
      />
      <br />
      <button style={{ marginTop: "10px" }}>send</button>
    </div>
  );
};

export default JoinBlock;
