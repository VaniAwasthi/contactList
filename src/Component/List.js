import React from "react";
import Paper from "@material-ui/core/Paper";
import { LinearProgress } from "@material-ui/core";

function list({ loading, contacts }) {
  console.log(contacts);
  return (
    <Paper
      style={{
        margin: "20px auto",
        padding: "20px",
        maxwidth: "350px",
        position: "relative",
        backgroundColor: "pink",
      }}
    >
      {loading ? (
        <LinearProgress />
      ) : (
        contacts.data.map((contact) => {
          return (
            <div style={{ display: "flex" }}>
              <img
                style={{
                  width: "75px",
                  borderRadius: "50%",
                  margin: "10px 10px 0 0",
                }}
                src={contact.picture}
                alt={contact.firstName}
              ></img>
              <div>
                <h4>
                  {contact.firstName}
                  {contact.lastName}
                </h4>
                <p style={{ fontSize: "10px" }}>{contact.email}</p>
              </div>
            </div>
          );
        })
      )}
    </Paper>
  );
}
export default list;
