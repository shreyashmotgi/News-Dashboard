import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";

export default function Navbar({ updateSearch }) {
  const [text, setText] = useState("");

  let handleChange = (event) => {
    setText(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateSearch(text);
    setText("");
  };

  return (
    <AppBar position="sticky" color="default" sx={{ width: "100%" }}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          News Dashboard
        </Typography>

        <form onSubmit={handleSubmit}>
          <InputBase
            placeholder="Search..."
            value={text}
            onChange={handleChange}
            sx={{
              border: "1px solid gray",
              padding: "5px",
              borderRadius: "5px",
            }}
          />
        </form>
      </Toolbar>
    </AppBar>
  );
}
