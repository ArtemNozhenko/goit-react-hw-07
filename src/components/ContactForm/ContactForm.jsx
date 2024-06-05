import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsOps.js";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useId } from "react";
import * as Yup from "yup";
import css from "./ContactForm.module.css";

const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  number: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});

export default function ContactForm() {
  const nameFieldId = useId();
  const numberFieldId = useId();

  const dispatch = useDispatch();

  const handleSubmit = (value, actions) => {
    dispatch(addContact(value));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{ name: "", number: "" }}
      onSubmit={handleSubmit}
      validationSchema={ContactSchema}
    >
      <Form className={css.form}>
        <div className={css.formGroup}>
          <label htmlFor={nameFieldId}>Name</label>
          <Field
            className={css.input}
            name="name"
            type="text"
            id={nameFieldId}
          />
          <ErrorMessage name="name" component="span" />
        </div>
        <div className={css.formGroup}>
          <label htmlFor={numberFieldId}>Number</label>
          <Field
            className={css.input}
            name="number"
            type="tel"
            id={numberFieldId}
          />
          <ErrorMessage name="number" component="span" />
        </div>

        <button className={css.button} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
}
