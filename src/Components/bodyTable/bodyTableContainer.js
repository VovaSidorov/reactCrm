import React, { Component } from 'react'
import {connect} from "react-redux";
import BodyTable from "./index"

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

let mapStateToProps = (state) => {
    console.log(state);                                                                                                                                                                                                                                                                                                                                                                                       
    return {
        usersPage: state.usersPage
    }
};
// let mapDispatchToProps = (dispatch) => {
//     return {
//         sendMessage: () => {
//             dispatch(sendMessageCreator())
//         },
//         updateNewMessageBody: (body) => {                                                          
//             dispatch(updateNewMessageBodyCreator(body));                                                                
//         }
//     }
// };

const bodyTableContainer = connect(mapStateToProps)(BodyTable);


export default bodyTableContainer;