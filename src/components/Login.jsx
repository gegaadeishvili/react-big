import React from "react";
import "../styles/Login.css";
import { useState } from "react";
import NewAcc from "./NewAcc";
import { Enter } from "./Enter";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import "../Post/Post.jsx";
import Post from "../Post/Post.jsx";

const Login = () => {
  const [newacc, setNewacc] = useState(false);
  const [newEnter, setNewEnter] = useState(false);
  const navigate = useNavigate();

  const validateForm = (values) => {
    const errors = {};
    if (!values.email) {
      errors.email = "Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = "Invalid email address";
    }
    if (!values.password) {
      errors.password = "Required";
    }
    return errors;
  };

  const handleEnterClick = () => {
    navigate("/Enter");
  };

  return (
    <>
      <div
        className="mainPage"
        style={{ display: newEnter ? "none" : "block" }}
        id="mainPage"
      >
        <div
          className={"mainCont"}
          style={{ display: newacc ? "none" : "block" }}
          id="mainCont"
        >
          <div className="leftSide">
            <h1>FACEBOOK</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Voluptatum quasi, sit impedit atque eveniet aperiam.
            </p>
          </div>
          <div className="inputSide">
            <Formik
              initialValues={{ email: "", password: "" }}
              validate={validateForm}
              onSubmit={(values, { setSubmitting }) => {
                handleEnterClick();
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
                <Form>
                  <Field
                    className="firstText"
                    type="email"
                    name="email"
                    placeholder="Email"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="error"
                  />
                  <Field
                    className="secondText"
                    type="password"
                    name="password"
                    placeholder="Password"
                  />
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="error"
                  />
                  <button className="new" onClick={() => setNewacc(true)}>
                    ახალი ანგარიშის შექმნა
                  </button>
                  <button type="submit" className="enter">
                    შესვლა
                  </button>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
      {newEnter && <Enter />}
      {newacc && <NewAcc />}
    </>
  );
};

export default Login;
