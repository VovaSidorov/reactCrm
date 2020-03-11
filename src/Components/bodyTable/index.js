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
  console.log("state",state);
  return(
<div>Hello</div>
  )
}
export default BodyTable