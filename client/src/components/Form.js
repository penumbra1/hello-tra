import React from "react";
import styled from "@emotion/styled/macro";
import { Formik } from "formik";
import Input from "./Input";
import Button from "./Button";
import Link from "./Link";

const Form = props => {
  return (
    <Formik
      initialValues={{ name: "", email: "", phone: "" }}
      validate={values => {
        let errors = {};
        if (!values.email) {
          errors.email = "Required";
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = "Invalid email address";
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        props.onSubmit(values);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting
      }) => (
        <form onSubmit={handleSubmit} {...props}>
          <h1>Make an impact. Join us.</h1>
          <Input
            type="text"
            name="name"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.name}
            label="Full name"
            feedback={errors.name && touched.name && <span>"!!!"</span>}
          />
          <Input
            type="email"
            name="email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
            label="Email"
          />
          {errors.email && touched.email && errors.email}
          <Input
            type="tel"
            name="phone"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.phone}
            label="Phone number"
          />
          {errors.phone && touched.phone && errors.phone}
          <Link as="label" htmlFor="cv">
            Attach your CV
          </Link>
          <input
            type="file"
            id="cv"
            name="cv"
            className="visually-hidden"
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.cv && touched.cv && errors.cv}
          <Button disabled={isSubmitting}>Submit</Button>
        </form>
      )}
    </Formik>
  );
};

export default styled(Form)`
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

  ${Button} {
    margin-top: 36px;
  }
`;
