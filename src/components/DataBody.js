// dataBody.js is within dataTable.js
import React from "react";

// ensures date of birth is ordered MM-DD-YYY
function DataBody({ users }) {
  function formatDate(date) {
    const dateArray = date.split("-");
    const year = dateArray[0];
    const month = dateArray[1];
    const dayArray = dateArray[2].split("T");
    const day = dayArray[0];
    const formattedDate = [month, day, year].join("-");
    return formattedDate;
  }

  // this function formats employee objects
  return (
    <tbody>
      {users[0] !== undefined && users[0].name !== undefined ? (
        users.map(({ login, name, picture, phone, email, dob }) => {
          return (
            <tr key={login.uuid}>
              <td data-th="IMAGE" className="align-middle">
                <img
                  src={picture.medium}
                  alt={"profile image for " + name.first + " " + name.last}
                  className="img-responsive"
                />
              </td>
              <td data-th="NAME" className="name-cell align-middle">
                {name.first} {name.last}
              </td>
              <td data-th="PHONE" className="align-middle">
                {phone}
              </td>
              <td data-th="EMAIL" className="align-middle">
                <a href={"mailto:" + email} target="__blank">
                  {email}
                </a>
              </td>
              <td data-th="D.O.B." className="align-middle">
                {formatDate(dob.date)}
              </td>
            </tr>
          );
        })
      ) : (
        <></>
      )}
    </tbody>
  );
}

export default DataBody;