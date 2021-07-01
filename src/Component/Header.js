import React from "react";
import Paper from "@material-ui/core/Paper";

function Header() {
  return (
    <Paper style={{ padding: "5px", display: "flex" }} square elevation={3}>
      <img
        style={{ width: "50px" }}
        src="https://files.readme.io/320345b-React_Logo_256x256.png"
      ></img>
      <h1 style={{ margin: "0", fontFamily: "cursive", fontWeight: "100px" }}>
        React App
      </h1>
    </Paper>
  );
}

export default Header;
