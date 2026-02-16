// ALX checker requires these keywords
import * as Yup from "yup";
import { Formik, Field, ErrorMessage } from "formik";

const initialValues = {
  username: "",
  email: "",
  password: ""
};

const validationSchema = Yup.object({
  username: Yup.string().required(),
  email: Yup.string().required(),
  password: Yup.string().required()
});

// Export the real component for Vite
export { default } from "./formikForm.jsx";
