import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { setRef, TextField } from "@mui/material";
import { createNote } from "../Service/Service";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function BasicModal({ setRefresh }) {
  const [open, setOpen] = React.useState(false);
  const [title, setTitle] = React.useState("");
  const [content, setContent] = React.useState("");
  const handleOpen = () => {
    createNote({ title: title, content: content })
      .then(() => {
        setTitle("");
        setContent("");
        setOpen(false);
        alert("Note successfully added");
        setRefresh((prev) => prev + 1);
      })
      .catch(() => {
        alert("Something went wrong");
      });
  };
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={() => setOpen(true)} variant="contained">
        Create New Note
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Create new note
          </Typography>
          <div className="flex flex-col gap-y-[20px] mt-[20px]">
            <TextField
              id="outlined-basic"
              label="Title"
              variant="outlined"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <TextField
              id="outlined-basic"
              label="Content"
              variant="outlined"
              multiline
              rows={4}
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </div>
          <div className="mt-[20px] flex justify-end">
            {" "}
            <Button onClick={handleOpen} variant="contained">
              Submit
            </Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
