import * as Yup from "yup";

export const formSchema = Yup.object({
  fname: Yup.string()
    .min(2, "Name must be more that 2 character")
    .max(25, "Name must be lesser than 25 character")
    .required("Please! Enter your name"),
  lname: Yup.string()
    .min(2, "Name must be more that 2 character")
    .max(25, "Name must be lesser than 25 character")
    .required("Please! Enter your name"),
  email: Yup.string()
    .email("Invalid Email Address")
    .required("Enter your email"),
  message: Yup.string()
    .min(10, "Message must be at least 10 characters")
    .max(500, "Message must be at most 500 characters")
    .required("Message is required"),
});
