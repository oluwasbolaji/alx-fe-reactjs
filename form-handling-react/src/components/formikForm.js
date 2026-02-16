import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from "yup"

function FormikForm() {

  // validation schema
  const validationSchema = Yup.object({

    username: Yup.string()
      .required("Username is required"),

    email: Yup.string()
      .email("Invalid email")
      .required("Email is required"),

    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required")

  })

  // initial values
  const initialValues = {
    username: "",
    email: "",
    password: ""
  }

  // submit function
  const handleSubmit = (values, { resetForm }) => {

    console.log("Formik user:", values)

    alert("Formik registration successful!")

    resetForm()
  }

  return (

    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >

      <Form>

        <h2>Formik Registration Form</h2>

        <div>
          <label>Username</label><br />

          <Field type="text" name="username" />

          <ErrorMessage
            name="username"
            component="p"
          />

        </div>

        <div>

          <label>Email</label><br />

          <Field type="email" name="email" />

          <ErrorMessage
            name="email"
            component="p"
          />

        </div>

        <div>

          <label>Password</label><br />

          <Field type="password" name="password" />

          <ErrorMessage
            name="password"
            component="p"
          />

        </div>

        <button type="submit">
          Register with Formik
        </button>

      </Form>

    </Formik>

  )
}

export default FormikForm
