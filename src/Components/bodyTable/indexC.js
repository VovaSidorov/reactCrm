import React, {Component} from 'react'
import * as axios from 'axios';

class BodyTable extends React.Component {

    componentDidMount() {
        axios.get("https://randomuser.me/api/?gender=female")
            .then(response => {
                this.props.setUsers(response.data.results);
            });
    }

    // getUsers = () => {
    //     if (this.props.usersPage.users.length === 0) {
    //         axios.get("https://randomuser.me/api/")
    //             .then(response => {
    //                 this.props.setUsers(response.data.results);
    //
    //             });
    //     }
    // };

    render() {
        console.log(this.props.usersPage.users);
        return (
            <React.Fragment>
                {/*<button onClick={this.getUsers}>Get users</button>*/}
                <tbody>
                {
                    this.props.usersPage.users
                        .map(user => <tr key={user.id.value}>
                            <td>{user.id.value}</td>
                            {/*<td><img src={user.picture.medium} alt="альтернативный текст"/></td>*/}
                            <td>{user.name.first}</td>
                            <td>{user.email}</td>
                            <td>{user.login.password}</td>
                            <td>{"user.role"}</td>
                            <td>
                                <button className="btn btn-primary" value={user.id}>Delete</button>
                            </td>
                        </tr>)
                }
                </tbody>
            </React.Fragment>
        )
    }
}

export default BodyTable;

