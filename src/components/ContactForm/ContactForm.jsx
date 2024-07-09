import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useId } from "react";
import css from "./ContactForm.module.css";

const validationSchema = Yup.object().shape({
  id: Yup.string(),

  name: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),

  number: Yup.string()

    .min(7, "Too Short!")
    .max(10, "Too Long!")
    .required("Required"),
});

const ContactForm = ({ onAdd }) => {
  const nameFieldId = useId();
  const numberFieldId = useId();

  const handleSubmit = (values, { resetForm }) => {
    const newContact = {
      id: Date.now(),
      name: values.name,
      number: values.number,
    };

    onAdd(newContact);
    resetForm();
    console.log("ID нового контакта:", newContact.id);
  };

  return (
    <div>
      <Formik
        initialValues={{
          name: "",
          number: "",
        }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <Form className={css.form}>
          <br />
          <div className={css.field}>
            <label htmlFor={nameFieldId}>Name</label>
            <Field type="text" name="name" id={nameFieldId} />
            <ErrorMessage name="name" component="span" />
          </div>

          <br />
          <div className={css.field}>
            <label htmlFor={numberFieldId}>Number </label>
            <Field type="text" name="number" id={numberFieldId} />
            <ErrorMessage name="number" component="span" />
          </div>

          <br />
          <button type="submit">Add contact</button>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;
