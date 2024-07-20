import React from "react";
import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  DialogActions,
  Stack,
  TextField,
} from "@mui/material";

import { useFormik } from "formik";
import { formSchema } from "../../schemas";

interface MainProps {
  open: boolean;
  closeForm: () => void;
}

interface FormValues {
  fname: string;
  lname: string;
  email: string;
  message: string;
}

const initialValues: FormValues = {
  fname: "",
  lname: "",
  email: "",
  message: "",
};

const DialogBox: React.FC<MainProps> = ({ open, closeForm }) => {
  const formik = useFormik<FormValues>({
    initialValues: initialValues,
    validationSchema: formSchema,
    onSubmit: (values, action) => {
      console.log("🚀 ~ values:", values);
      alert("Submitted");
      action.resetForm();
    },
  });

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
      <form onSubmit={formik.handleSubmit}>
        <DialogContent>
          <Stack spacing={2} margin={2}>
            <TextField
              variant="outlined"
              label="First Name"
              name="fname"
              value={formik.values.fname}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.fname && Boolean(formik.errors.fname)}
              helperText={formik.touched.fname && formik.errors.fname}
            />
            <TextField
              variant="outlined"
              label="Last Name"
              name="lname"
              value={formik.values.lname}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.lname && Boolean(formik.errors.lname)}
              helperText={formik.touched.lname && formik.errors.lname}
            />
            <TextField
              variant="outlined"
              label="Email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
            <TextField
              variant="outlined"
              label="Message"
              multiline
              rows={4}
              name="message"
              value={formik.values.message}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.message && Boolean(formik.errors.message)}
              helperText={formik.touched.message && formik.errors.message}
            />
          </Stack>
        </DialogContent>
        <DialogActions
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Button type="submit" variant="contained" color="success">
            Submit
          </Button>
          <Button onClick={closeForm} variant="contained" color="error">
            Close
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default DialogBox;
