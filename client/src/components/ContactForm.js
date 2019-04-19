import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import Form from "./Form";
import Input from "./Input";
import Dropdown from "./Dropdown";
import Button from "./Button";
import FileInput from "./FileInput";
import { useQuery } from "react-apollo-hooks";
import { GET_CITIES, GET_JOBS } from "../graphql";

const ContactForm = ({
  values,
  errors,
  touched,
  handleChange,
  handleBlur,
  handleSubmit,
  setFieldValue,
  isSubmitting
}) => {
  const cities = useQuery(GET_CITIES);
  const jobs = useQuery(GET_JOBS, {
    variables: { city: values.city || { id: "", title: "" } }
  });

  return (
    <Form onSubmit={handleSubmit}>
      <h1>Make an impact. Join us.</h1>
      <Dropdown
        name="city"
        label="Select a location"
        items={cities.data.cities || []}
        getItemValue={item => (item ? item.title : "")}
        onChange={e => setFieldValue("city", e)}
        onBlur={handleBlur}
      />
      <Dropdown
        name="job"
        label="Select a position"
        items={jobs.data.jobs || []}
        onChange={e => setFieldValue("job", e)}
        onBlur={handleBlur}
      />
      <Input
        type="text"
        name="name"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.name}
        label="Full name"
        error={errors.name && touched.name}
      />
      <Input
        type="email"
        name="email"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.email}
        label="Email"
        error={errors.email && touched.email}
      />
      <Input
        type="tel"
        name="phone"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.phone}
        label="Phone number"
        error={errors.phone && touched.phone}
      />
      <textarea
        rows="5"
        name="textComment"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.comment}
        aria-label="Comment"
        placeholder="Comment"
        error={errors.comment && touched.comment}
      />
      <FileInput
        hasFile={!errors.attachment && values.attachment}
        name="attachment"
        onChange={({
          currentTarget: {
            files: [file]
          }
        }) => setFieldValue("attachment", file)}
        onBlur={handleBlur}
      />
      <Button
        type="submit"
        disabled={
          isSubmitting ||
          Object.keys(errors).length > 0 ||
          Object.keys(values).length === 0
        }
      >
        Submit
      </Button>
    </Form>
  );
};

const formikProps = {
  validationSchema: Yup.object().shape({
    city: Yup.string().required("Required"),
    job: Yup.string().required("Required"),
    name: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    email: Yup.string()
      .email("Invalid email")
      .required("Required"),
    phone: Yup.number().min(1000, "Invalid phone"),
    textComment: Yup.string().max(800, "Too Long!")
  }),
  onSubmit: (values, { handleSubmit, setSubmitting, resetForm, props }) => {
    props.onSubmit(values);
    setSubmitting(false);
    resetForm();
  }
};

export default props => (
  <Formik {...formikProps} component={ContactForm} {...props} />
);
