import React, {Component} from 'react'
import * as axios from 'axios';


const BodyTable = (props) => {
    console.log(props);
    let getUsers = () => {
        if (props.usersPage.users.length === 0) {
            axios.get("https://randomuser.me/api/")
                .then(response => {
                    props.setUsers(response.data.results);
                });

        }
    };


    let state = props.usersPage;
    console.log(state);


    let onDeleteUser = (e) => {
        let id = e.target.value;
        props.deleteUserItems(id);
    };
    let userElements = state.users
        .map(user => <tr key={user.id.value}>
            <td>{user.id.value}</td>
            <td><img src={user.picture.medium} alt="альтернативный текст"/></td>
            <td>{user.name.first}</td>
            <td>{user.email}</td>
            <td>{user.login.password}</td>
            <td>"Admin"</td>
            <td>
                <button onClick={onDeleteUser} className="btn btn-primary" value={user.id}>Delete</button>
            </td>
        </tr>);
    return (
        <React.Fragment>
            <button onClick={getUsers}>Get users</button>
            <tbody>
            {
                state.users
                    .map(user => <tr key={user.id.value}>
                        <td>{user.id.value}</td>
                        <td><img src={user.picture.medium} alt="альтернативный текст"/></td>
                        <td>{user.name.first}</td>
                        <td>{user.email}</td>
                        <td>{user.login.password}</td>
                        {/*<td>{user.role}</td>*/}
                        <td>
                            <button onClick={onDeleteUser} className="btn btn-primary" value={user.id}>Delete</button>
                        </td>
                    </tr>)
            }
            </tbody>
        </React.Fragment>
    )
}
export default BodyTable;