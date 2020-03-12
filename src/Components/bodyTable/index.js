import React, { Component } from 'react'

// const BodyTable = props => {
//     const rows = props.usersData.map((row, index) => {
     
//       return (
//         <tr key={index}>
//           <td>{row.id}</td>
//           <td>{row.login}</td>
//           <td>{row.email}</td>
//           <td>{row.pass}</td>
//           <td>{row.role}</td>
//           <td><button className="btn btn-primary" onClick={() => props.removeUser(index)}>Delete</button></td>
//         </tr>
//       )
//     })
  
//     return <tbody>{rows}</tbody>
//   }
// export default BodyTable

const BodyTable = (props) => {
  let state = props.usersPage;
  let userElements = state.users
  .map(user=><tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.login}</td>
            <td>{user.email}</td>
            <td>{user.pass}</td>
            <td>{user.role}</td>
            <td><button className="btn btn-primary">Delete</button></td>
          </tr>);
  return(
<tbody>{userElements}</tbody>
  )
}
export default BodyTable