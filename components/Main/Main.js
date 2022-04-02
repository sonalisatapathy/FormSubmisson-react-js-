import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ShowData from "../ShowData/ShowData";

import ContactDetails from "./ContactDetails";
import Interests from "./Interests";
import classes from "./Main.module.css";

const Main = (props) => {
  const navigate = useNavigate();
  const intialValues = {
    firstName: "",
    middleName: "",
    lastName: "",
    email: "",
    password: "",
    reEnterPwd: "",
    dob: "",
    gender: "",
    interests: "",
    // city: "",
  };
  const [formValues, setFormValues] = useState(intialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const changeValHandler = (event) => {
    // console.log(event.target.value);
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
    console.log(formValues);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
    // const userData = {
    //   firstName: formValues.firstName,
    //   middle: formValues.middleName,
    //   lastName: formValues.lastName,
    //   email: formValues.email,
    //   password: formValues.password,
    //   dob: formValues.dob,
    //   address: formValues.address,
    //   city: formValues.city,
    //   state: formValues.state,
    //   country: formValues.country,
    //   gender: formValues.gender,
    //   interests: formValues.interests,
    // };
    // console.log(userData);
  };

  const validate = (values) => {
    const errors = {};
    const regExpForEmail = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/i;
    const regExpForPwd = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,32}$/;
    const regExpForName = /^(?=.*[a-z])(?=.*[A-Z])/;
    if (!values.firstName) {
      errors.firstName = "First name is required!";
    } else if (!regExpForName.test(values.firstName)) {
      errors.firstName = "Only characters are allowed";
    }
    if (values.middleName.length > 0) {
      if (!regExpForName.test(values.middleName)) {
        errors.middleName = "Only characters are allowed";
      }
    }
    if (!values.lastName) {
      errors.lastName = "Last name is required!";
    } else if (!regExpForName.test(values.lastName)) {
      errors.lastName = "Only characters are allowed";
    }

    if (!values.email) {
      errors.email = "email is required!";
    } else if (!regExpForEmail.test(values.email)) {
      errors.email = "plz enter correct email id";
    }
    if (!values.password) {
      errors.password = "password is required!";
    } else if (values.password.length < 8) {
      errors.password = "Min 8 characters are required";
    } else if (values.password.length >= 10) {
      errors.password = "pwd val con't be more than 10 charcters";
    } else if (!regExpForPwd.test(values.password)) {
      errors.password = "plz enter ur correct pwd";
    }

    if (!values.reEnterPwd) {
      errors.reEnterPwd = "This field can't be empty";
    } else if (values.password != values.reEnterPwd) {
      errors.reEnterPwd = "plz enter correct pwd";
    }
    if (!values.dob) {
      errors.dob = "plz enter dob";
    }
    if (!values.gender) {
      errors.gender = "plz enter dob";
    }

    return errors;
  };

  return (
    <>
      <h2 style={{ color: "blue", textAlign: "center", marginTop: "-16px" }}>
        Form Validation
      </h2>
      <div className={classes.mainContainer}>
        <form className={classes.formContainer} onSubmit={submitHandler}>
          <div className={classes.ipFields}>
            <label for="name">First Name:-</label>

            <input
              type="text"
              id="name"
              name="firstName"
              placeholder="ex:-Jonar"
              value={formValues.firstName}
              onChange={changeValHandler}
            />
          </div>
          <span className={classes.err}>{formErrors.firstName}</span>
          <div className={classes.ipFields}>
            <label for="mName">Middle Name:-</label>
            <input
              type="text"
              id="mName"
              name="middleName"
              placeholder="ex:-Forilan"
              value={formValues.middleName}
              onChange={changeValHandler}
            />
          </div>
          <span className={classes.err}>{formErrors.middleName}</span>
          <div className={classes.ipFields}>
            <label for="lName">Last Name:-</label>
            <input
              type="text"
              id="lName"
              name="lastName"
              placeholder="ex:-Kentaro"
              value={formValues.lastName}
              onChange={changeValHandler}
            />
          </div>
          <span className={classes.err}>{formErrors.lastName}</span>
          <div className={classes.ipFields}>
            <label for="gmail">Mail id:-</label>
            <input
              type="mail"
              id="gmail"
              name="email"
              placeholder="ex:-kentaro@gmail.com"
              value={formValues.email}
              onChange={changeValHandler}
            />
          </div>
          <span className={classes.err}>{formErrors.email}</span>
          <div className={classes.ipFields}>
            <label for="password">Password:-</label>
            <input
              type="password"
              name="password"
              value={formValues.password}
              onChange={changeValHandler}
            />
          </div>
          <span className={classes.err}>{formErrors.password}</span>
          <div className={classes.ipFields}>
            <label for="repwd">Re-Password:-</label>
            <input
              type="password"
              id="repwd"
              name="reEnterPwd"
              value={formValues.reEnterPwd}
              onChange={changeValHandler}
            />
          </div>
          <span className={classes.err}>{formErrors.reEnterPwd}</span>
          <div className={classes.ipFields}>
            <label for="dob">Date of Birth:-</label>
            <input
              type="date"
              id="dob"
              name="dob"
              value={formValues.dob}
              onChange={changeValHandler}
            />
          </div>
          <span className={classes.err}>{formErrors.dob}</span>
          <div className={classes.ipFields}>
            <label for="gender">Gender:-</label>
            <div className={classes.radiobtn}>
              <input
                type="radio"
                name="gender"
                required
                style={{ width: "20px", height: "18px" }}
                value={formValues.gender}
                onChange={changeValHandler}
              />
              <label for="radio">Male</label>
            </div>
            <div className={classes.radiobtn}>
              <input
                type="radio"
                name="gender"
                required
                style={{ width: "20px", height: "18px" }}
              />
              <label for="radio">Female</label>
            </div>
            <div className={classes.radiobtn}>
              <input
                type="radio"
                name="gender"
                required
                style={{ width: "20px", height: "18px" }}
              />
              <label for="radio">Transgender</label>
            </div>
          </div>
          <div className={classes.ipFields}>
            <label>interests:-</label>
            <div id={classes.checkboxContainer}>
              <Interests
                changeValHandler={changeValHandler}
                formValues={formValues}
                interests={props.interests}
              />
            </div>
          </div>

          <div className={classes.ipFields}>
            <label for="address">Address:-</label>
            <textarea
              rows="4"
              cols="30"
              required
              value={formValues.address}
              onChange={changeValHandler}
            />
          </div>

          <div className={classes.ipFields}>
            <label for="city">City:-</label>
            <input
              type="text"
              id="city"
              required
              value={formValues.city}
              onChange={changeValHandler}
            />
          </div>

          <div className={classes.ipFields}>
            <label>County:-</label>

            <select>
              {props.countries.map((item) => {
                return (
                  <option key={item} value={item}>
                    {item}
                  </option>
                );
              })}
            </select>
          </div>
          <div className={classes.ipFields}>
            <label for="state">State:-</label>
            <input
              type="text"
              id="state"
              required
              value={formValues.state}
              onChange={changeValHandler}
            />
          </div>

          <ContactDetails />
          <button
            type="submit"
            className={classes.btnSubmit}
            onClick={() => {
              navigate("showdata-to-user");
            }}
          >
            Submit
          </button>
        </form>
        {/* <SU datas={formValues} /> */}
      </div>
    </>
  );
};

export default Main;
