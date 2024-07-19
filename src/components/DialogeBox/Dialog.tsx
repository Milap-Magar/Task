import React from "react";
import "./Dialog.css";
import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  DialogActions,
  Stack,
  TextField,
} from "@mui/material";

interface MainProps {
  open: boolean;
  closeForm: () => void;
}

const DialogBox: React.FC<MainProps> = ({ open, closeForm }) => {
  const onSubmit = () => {
    console.log("Submitted");
  };

  return (
    <Dialog open={open} onClose={closeForm} fullWidth>
      <DialogTitle
        sx={{
          display: "flex",
          justifyContent: "center",
          fontFamily: "Quicksand, sans-serif",
        }}
      >
        Contact Form
      </DialogTitle>
      <DialogContent>
        <Stack spacing={2} margin={2}>
          <TextField variant="outlined" label="Name" />
          <TextField variant="outlined" label="Email" />
          <TextField variant="outlined" label="Message" multiline rows={4} />
        </Stack>
      </DialogContent>
      <DialogActions
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Button onSubmit={onSubmit} variant="contained" color="success">
          Submit
        </Button>
        <Button onClick={closeForm} variant="contained" color="error">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DialogBox;
