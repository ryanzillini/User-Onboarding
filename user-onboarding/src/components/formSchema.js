import * as yup from "yup";

const formSchema = yup.object().shape({
  firstname: yup
    .string()
    .required("first name is required")
    .min(4, "first name must have at least 4 letters"),
  lastname: yup
    .string()
    .required("last name is required")
    .min(4, "last name must have at least 4 letters"),
  email: yup.string().email("must be a valid email").required("need an email"),
  password: yup
    .string()
    .required("must use a password")
    .min(10, "Must use minimum 10 characters"),
  tos: yup.boolean(),
});

export default formSchema;
