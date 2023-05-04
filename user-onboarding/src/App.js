import "./App.css";
import Form from "./components/Form";
import React, { useState, useEffect } from "react";
import formSchema from "./components/formSchema";
import * as yup from "yup";
import axios from "axios";

function App() {
  const initalFormValues = {
    firstname: "",
    lastname: "",
    password: "",
    email: "",
    tos: false,
  };

  const initalFormErrors = {
    firstname: "",
    lastname: "",
    password: "",
    email: "",
    tos: "",
  };

  const initialDisabled = true;

  const [formValues, setFormValues] = useState(initalFormValues);
  const [disabled, setDisabled] = useState(initialDisabled);
  const [formErrors, setFormErrors] = useState(initalFormErrors);
  const [users, setUsers] = useState([]);

  const inputChange = (name, value) => {
    validate(name, value);
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = () => {
    axios
      .post("https://regres.in/api/users", formValues)
      .then((res) => setUsers([res.data, ...users]))
      .catch((err) => console.error(err))
      .finally(() => setFormValues(initalFormValues));
  };

  const validate = (name, value) => {
    yup
      .reach(formSchema, name)
      .validate(value)
      .then(() => setFormErrors({ ...formErrors, [name]: "" }))
      .catch((err) => setFormErrors({ ...formErrors, [name]: err.error[0] }));
  };

  useEffect(() => {
    formSchema.isValid(formValues).then((valid) => setDisabled(!valid));
  }, [formValues]);

  return (
    <div className="App">
      <h1>User Onboarding Form</h1>

      <Form
        values={formValues}
        change={inputChange}
        disabled={disabled}
        submit={handleSubmit}
        errors={formErrors}
      />
      {users.map((user) => (
        <div key={user.id}>
          <p>{user.createdAt}</p>
          <p>{user.email}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
