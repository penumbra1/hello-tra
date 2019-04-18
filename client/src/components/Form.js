import React from "react";
import styled from "@emotion/styled/macro";
import { Formik, withFormik } from "formik";
import Input from "./Input";
import Dropdown from "./Dropdown";
import Button from "./Button";
import Link from "./Link";
import { useQuery } from "react-apollo-hooks";
import { GET_CITIES, GET_JOBS } from "../graphql";

const Form = ({
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
    variables: { city: values.city }
  });
  return (
    <FormWrapper onSubmit={handleSubmit}>
      <h1>Make an impact. Join us.</h1>
      <Dropdown
        name="city"
        items={cities.data.cities || []}
        getItemValue={item => (item ? item.title : "")}
        onChange={e => setFieldValue("city", e)}
        onBlur={handleBlur}
      />
      <Dropdown
        name="job"
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
      <Input
        type="text"
        name="comment"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.comment}
        label="Comment"
        error={errors.comment && touched.comment}
      />
      <Link as="label" htmlFor="cv">
        Attach your CV
      </Link>
      <input
        type="file"
        id="cv"
        name="cv"
        className="visually-hidden"
        onChange={e => setFieldValue("file", e.currentTarget.files[0])}
        onBlur={handleBlur}
      />
      {errors.cv && touched.cv && errors.cv}
      <Button type="submit" disabled={isSubmitting}>
        Submit
      </Button>
    </FormWrapper>
  );
};

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  & > * {
    flex: 100% 1 1;
    margin: 10px 0;
  }

  h1 {
    font-family: "Roobert";
    font-size: 28px;
    letter-spacing: normal;
    text-align: center;
    margin-bottom: 36px;
  }

  [type="submit"] {
    margin-top: 36px;
  }
`;

const formikOptions = {
  validate: values => {
    let errors = {};
    if (!values.name) {
      errors.name = "Required";
    } else if (!values.email) {
      errors.email = "Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = "Invalid email address";
    }
    return errors;
  },
  handleSubmit: (values, { props }) => props.onSubmit(values)
};

export default props => (
  <Formik {...formikOptions} component={Form} {...props} />
);
