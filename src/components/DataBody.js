import React from "react";

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
            </tr>
          );
        })
      ) : (
        <></>
      )}
    </tbody>
  );


export default DataBody;
