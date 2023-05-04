import React, { useState, useEffect } from "react";
import { ReactDOM } from "react";

export default function Form(props) {
  const { values, change } = props;

  const onChange = (evt) => {
    const { name, value } = evt.target;
    change(name, value);
  };

  return (
    <form>
      <label>
        First Name
        <input
          name="firstname"
          placeholder="Enter First Name Here"
          value={values.fName}
          type="text"
          onChange={onChange}
        />
      </label>
      <label>
        Last Name
        <input
          name="lastname"
          placeholder="Enter Last Name Here"
          value={values.lName}
          type="text"
          onChange={onChange}
        />
      </label>
      <label>
        Email
        <input
          name="email"
          placeholder="Enter Email Here"
          value={values.email}
          type="text"
          onChange={onChange}
        />
      </label>
      <label>
        Password
        <input
          name="firstname"
          placeholder="Enter Password Here"
          value={values.password}
          type="text"
          onChange={onChange}
        />
      </label>
      <label>
        Terms and Conditions
        <input
          name="firstname"
          value={values.checked}
          type="checkbox"
          onChange={onChange}
        />
      </label>
      <button>Submit</button>
    </form>
  );
}
