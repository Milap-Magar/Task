// src/features/formSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface FormValue {
  fname: string;
  lname: string;
  email: string;
  message: string;
}

const initialState: FormValue = {
  fname: "",
  lname: "",
  email: "",
  message: "",
};

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    setFormValues: (state, action: PayloadAction<FormValue>) => {
      return { ...state, ...action.payload };
    },
    resetFormValues: () => initialState,
  },
});

export const { setFormValues, resetFormValues } = formSlice.actions;
export default formSlice.reducer;
