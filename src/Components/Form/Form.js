/* eslint-disable no-unused-vars */
import { useState } from "react";
import FormInput from "./FormInput";
import Alert from "../Alert/Alert";

import styles from "./Form.module.css";

const Form = ({ data, setData, setUserSignedUp }) => {
  //   Stores the error status
  const [error, setError] = useState({
    errorMessage: "",
    errorStatus: false,
  });

  //   RE to validate email address
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  function formValidation() {
    // Validates the form values to be non-empty except for newsletter subscription
    for (let key in data) {
      if (!data[key] && key !== "newsletter") {
        setError({
          errorMessage: `${key} is required`,
          errorStatus: true,
        });
        return false;
      }
    }

    // Validates the email address
    if (!String(data.email).toLowerCase().match(re)) {
      setError({
        errorMessage: "Email is not valid",
        errorStatus: true,
      });
      return false;
    }

    return true;
  }

  //   On form-submit
  function submitForm(e) {
    e.preventDefault();

    // Checks if the form input is valid.
    if (!formValidation()) return;

    // Submits the form data to the server.
    setUserSignedUp(true);
  }

  return (
    <form action={submitForm} className={styles.form}>
      {error.errorStatus ? <Alert error={error} setError={setError} /> : <></>}
      <div>
        <FormInput
          type="text"
          placeholder="First Name"
          name="firstName"
          value={data.firstName}
          onChange={(e) => setData({ ...data, firstName: e.target.value })}
        />

        <FormInput
          type="text"
          placeholder="Last Name"
          name="lastName"
          value={data.lastName}
          onChange={(e) => setData({ ...data, lastName: e.target.value })}
        />
      </div>

      <FormInput
        type="email"
        placeholder="Email"
        name="email"
        value={data.email}
        onChange={(e) => setData({ ...data, email: e.target.value })}
      />
      <FormInput
        type="password"
        placeholder="Password"
        name="password"
        value={data.password}
        onChange={(e) => setData({ ...data, password: e.target.value })}
      />

      <label className={styles.form__checkbox}>
        <input
          type="checkbox"
          name="newsletter"
          onChange={() => {
            setData({ ...data, newsletter: !data.newsletter });
          }}
        />
        Subscribe to our newsletter
      </label>

      <input
        className={styles.form__submitBtn}
        type="submit"
        onClick={submitForm}
      />
    </form>
  );
};

export default Form;
