import React, { useState } from "react";
import "../styles/NewAcc.css";
import { Formik } from "formik";
import { useNavigate } from "react-router-dom";

export const NewAcc = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();
  const handleEnterClick = () => {
    navigate("/Enter");
  };
  return (
    <div className="MainNew">
      <h1 className="firstH1">შექმენი ახალი ანგარიში</h1>
      <Formik
        initialValues={{ email, password, confirmPassword }}
        validate={(values) => {
          const errors = {};
          if (!values.email) {
            errors.email = "Required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address";
          }
          if (!values.password) {
            errors.password = "Required";
          } else if (values.password.length < 6) {
            errors.password = "Password must be at least 6 characters long";
          }
          if (!values.confirmPassword) {
            errors.confirmPassword = "Required";
          } else if (values.password !== values.confirmPassword) {
            errors.confirmPassword = "Passwords do not match";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          handleEnterClick()
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              name="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            />
            {errors.email && touched.email && <div>{errors.email}</div>}

            <input
              type="password"
              name="password"
              onChange={(e) => {
                handleChange(e);
                setPassword(e.target.value);
              }}
              onBlur={handleBlur}
              value={values.password}
            />
            {errors.password && touched.password && <div>{errors.password}</div>}

            <input
              type="password"
              name="confirmPassword"
              onChange={(e) => {
                handleChange(e);
                setConfirmPassword(e.target.value);
              }}
              onBlur={handleBlur}
              value={values.confirmPassword}
            />
            {errors.confirmPassword && touched.confirmPassword && (
              <div>{errors.confirmPassword}</div>
            )}

            <button type="submit" disabled={isSubmitting}>
              დარეგისტრირება
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default NewAcc;
