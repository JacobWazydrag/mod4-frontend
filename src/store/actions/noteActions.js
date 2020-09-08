//import axios from "axios";

export const createNote = (note) => {
  return (dispatch, getState) => {
      console.log(note)
    fetch("http://localhost:3001/notes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(note),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
};
