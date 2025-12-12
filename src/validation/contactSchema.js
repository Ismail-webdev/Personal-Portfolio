import * as yup from "yup";

export const contactSchema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),
  subject: yup.string().nullable(),
  message: yup
    .string()
    .min(2, "Message must be at least 10 characters")
    .required("Message is required"),
});
