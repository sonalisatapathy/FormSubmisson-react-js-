import React, { useState } from "react";
import classes from "./Main.module.css";
const Interest = (props) => {
  const { userInterest, setUserInterest } = props;
  console.log(userInterest);
  const handleChange = (e) => {
    const { value, checked } = e.target;
    const { interests } = userInterest;
    console.log(value);

    if (checked) {
      setUserInterest({
        interests: [...interests, value],
      });
    } else {
      setUserInterest({
        interests: interests.filter((e) => e !== value),
      });
    }
  };
  return (
    <>
      <div className={classes.ipFields}>
        <label>interests:-</label>
        <div id={classes.checkboxContainer}>
          {props.interests.map((item) => {
            return (
              <span className={classes.ipForCheckbox}>
                <input
                  type="checkbox"
                  key={item}
                  id={item}
                  name="interests"
                  value={item}
                  onChange={handleChange}
                  style={{ width: "20px", height: "18px" }}
                />
                {item}
              </span>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Interest;
