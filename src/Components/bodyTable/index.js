import React, { Component } from 'react'



const BodyTable = (props) => {
  let state = props.usersPage;
  console.log("bodytable",props);

  let onDeleteUser = (e) => {
    let id = e.target.value;
    props.deleteUserItems(id);
  };

  let userElements = state.users
  .map(user=><tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.login}</td>
            <td>{user.email}</td>
            <td>{user.pass}</td>
            <td>{user.role}</td>
            <td><button onClick={onDeleteUser} className="btn btn-primary" value={user.id}>Delete</button></td>
          </tr>);
  return(
<tbody>{userElements}</tbody>
  )
}
export default BodyTable