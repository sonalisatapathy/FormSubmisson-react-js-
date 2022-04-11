import React from "react";
import showData from "./ShowData.module.css";
const ShowData = (props) => {
  const { datas, userInterest, selectGender, selectCountry, inputList, phNo } =
    props;
  const headings = [
    "Name",
    "Email",
    "D.O.B",
    "Gender",
    "Interests",
    "Address",
    "City",
    "Country",
    "State",
    "Phone Number",
  ];
  return (
    <table>
      <caption>User Details:-</caption>
      <tr>
        {headings.map((item, i) => (
          <th>{item}</th>
        ))}
      </tr>

      <tr>
        <td>{` ${datas.firstName} ${datas.middleName} ${datas.lastName}`}</td>
        <td>{datas.email}</td>
        <td>{datas.dob}</td>
        <td>{selectGender}</td>
        <td>
          {userInterest.interests.map((info, i) => (
            <div key={i}>{info}</div>
          ))}
        </td>
        <td>{datas.address}</td>
        <td>{datas.city}</td>
        <td>{selectCountry}</td>
        <td>{datas.state}</td>
        <td>
          <tr>
            {phNo.map((item, i) => (
              <td>{item}</td>
            ))}
          </tr>
          <tr>
            {inputList.map((item, i) => (
              <td>{item.phone}</td>
            ))}
          </tr>
        </td>
      </tr>
    </table>
  );
};

export default ShowData;
