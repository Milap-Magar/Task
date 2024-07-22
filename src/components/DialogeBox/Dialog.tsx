// src/components/DialogBox.tsx
import React from "react";
import { useSelector, useDispatch } from "react-redux";
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
import { AppDispatch, RootState } from "../../store/store";
import { resetFormValues, setFormValues } from "../../store/slices/formSlice";

interface MainProps {
  open: boolean;
  closeForm: () => void;
}

const DialogBox: React.FC<MainProps> = ({ open, closeForm }) => {
  const dispatch = useDispatch<AppDispatch>();
  const formValues = useSelector((state: RootState) => state.form);

  const formik = useFormik({
    initialValues: formValues,
    validationSchema: formSchema,
    onSubmit: (values, action) => {
      dispatch(setFormValues(values));
      console.log("🚀 ~ values:", values);
      alert("Submitted");
      action.resetForm();
      dispatch(resetFormValues());
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
