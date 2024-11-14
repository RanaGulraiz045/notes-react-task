import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { setRef, TextField } from "@mui/material";
import { createNote, updateNotes } from "../Service/Service";

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

export default function EditModal({ setRefresh, data }) {
  const [open, setOpen] = React.useState(false);
  const [title, setTitle] = React.useState(data.title);

  React.useEffect(() => {
    setTitle(data.title);
    setContent(data.content);
  }, [data]);
  const [content, setContent] = React.useState(data.content);
  const handleOpen = () => {
    updateNotes(data.id, { title: title, content: content })
      .then(() => {
        setTitle("");
        setContent("");
        setOpen(false);
        alert("Note successfully updated");
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
        Update
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
