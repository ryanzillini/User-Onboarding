import React, { useState, useEffect } from "react";
import { ReactDOM } from "react";

export default function Form(props) {
  const { values, change, submit, disabled, errors } = props;

  const onChange = (evt) => {
    const { name, value, checked, type } = evt.target;
    const newVal = type === "checkbox" ? checked : value;
    change(name, newVal);
  };

  const onSubmit = (evt) => {
    evt.preventDefault();
    submit();
  };

  return (
    <form className="form-container" onSubmit={onSubmit}>
      <p>{errors.firstname}</p>
      <div className="name">
        <label>
          First Name&nbsp;
          <input
            type="text"
            name="firstname"
            placeholder="Enter First Name Here"
            value={values.firstname}
            onChange={onChange}
          />
        </label>
        <label>
          Last Name&nbsp;
          <input
            name="lastname"
            placeholder="Enter Last Name Here"
            value={values.lastname}
            type="text"
            onChange={onChange}
          />
        </label>
      </div>
      <div className="email">
        <label>
          Email&nbsp;
          <input
            name="email"
            placeholder="Enter Email Here"
            value={values.email}
            type="text"
            onChange={onChange}
          />
        </label>
      </div>
      <div className="password">
        <label>
          Password&nbsp;
          <input
            name="password"
            placeholder="Enter Password Here"
            value={values.password}
            type="password"
            onChange={onChange}
          />
        </label>
      </div>
      <label>
        Terms and Conditions&nbsp;
        <input
          name="tos"
          checked={values.tos}
          type="checkbox"
          onChange={onChange}
        />
      </label>
      <button disabled={disabled}>Submit</button>
    </form>
  );
}
