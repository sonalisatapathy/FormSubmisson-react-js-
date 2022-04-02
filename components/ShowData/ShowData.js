import React from "react";

const ShowData = (props) => {
  return (
    <table>
      <tr>
        <th>Name</th>
        <th>Email</th>
        <th>D.O.B</th>
        <th>interests</th>
        <th>Phone number</th>
      </tr>

      <tr>
        <td>
          {props.datas.firstName} {props.datas.middleName}
          {props.datas.lastName}
        </td>
        <td>{props.datas.email}</td>
        <td>{props.datas.dob}</td>
        <td>{props.datas.interests}</td>
        {/* // <td>{props.phNums.phone}</td> */}
      </tr>
    </table>
  );
};

export default ShowData;
