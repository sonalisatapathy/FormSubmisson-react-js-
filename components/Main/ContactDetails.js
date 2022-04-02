import React, { useState } from "react";
import classes from "./Main.module.css";
function ContactDetails() {
  const [inputList, setInputList] = useState([
    {
      phone: "",
    },
  ]);
  const phoneChaneHandeler = (event, index) => {
    const { name, value } = event.target;
    const list = [...inputList];
    list[index][name] = value;
    setInputList(list);
  };
  const addPhNo = () => {
    setInputList([...inputList, { phone: "" }]);
  };
  const removePhNo = (index) => {
    const list = [...inputList];
    list.splice(index, 1);
    setInputList(list);
  };
  return (
    <div className={classes.ipFields}>
      <label>Contact number:-</label>
      <small>Format: 123-456-7890</small>

      {inputList.map((item, i) => {
        return (
          <div
          // style={{
          // display: " grid",
          // columnGap: "30px",
          // gridTemplateColumns: "auto auto auto",
          // float: "right",
          // marginRight:'200px'
          // }}
          >
            <select
              key={i}
              style={{
                width: "76px",
                height: "37px",
                marginRight: "14px",
              }}
            >
              <option>Mobile</option>
              <option>Office</option>
              <option>Fax</option>
            </select>

            <input
              type="tel"
              id="phone"
              name="phone"
              pattern="[0-9]{3}-[0-9]{3}[0-9]{4}"
              required
              className={classes.phNum}
              value={item.phone}
              onChange={(event) => phoneChaneHandeler(event, i)}
            />

            {inputList.length !== 1 && (
              <input
                type="button"
                value="-"
                onClick={(event) => removePhNo(event, i)}
                className={classes.btnChange}
              />
            )}

            {inputList.length - 1 === i && (
              <input
                type="button"
                value="+"
                onClick={addPhNo}
                className={classes.btnChange}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}

export default ContactDetails;
