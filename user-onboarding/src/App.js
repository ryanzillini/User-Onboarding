import logo from "./logo.svg";
import "./App.css";
import Form from "./components/Form";
import React, { useState, useEffect } from "react";
import * as yup from "yup";

function App() {
  const initalFormValues = {
    fName: "",
    lName: "",
    password: "",
    email: "",
    agree: false,
  };
  const [formValues, setFormValues] = useState(initalFormValues);

  const inputChange = (name, value) => {
    setFormValues({ ...formValues, [name]: value });
  };
  const schema = yup.object().shape({
    fName: yup
      .string()
      .required("user is required")
      .min(4, "firstname must have at least 4 letters"),
  });

  return (
    <div className="App">
      <h1>Anon Form</h1>

      <Form values={formValues} change={inputChange} />
    </div>
  );
}

export default App;
