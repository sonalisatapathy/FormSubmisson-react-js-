import React from "react";
import classes from "./Main.module.css";
function Interests(props) {
  return (
    <>
      {props.interests.map((item) => {
        return (
          <span className={classes.ipForCheckbox}>
            <input
              type="checkbox"
              key={item}
              id={item}
              name={item}
              value={props.formValues.interests}
              // required

              onChange={props.changeValHandler}
              style={{ width: "20px", height: "18px" }}
            />
            {item}
          </span>
        );
      })}
    </>
  );
}

export default Interests;
