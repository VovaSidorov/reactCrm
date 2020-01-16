import React, { Component } from 'react'
import Table from './Components/table';
import Modal from './Components/modal';
import Form from './Components/Form';


class App extends Component {
  state = {
    users: [
      {
        id: '1',
        login: 'Andrey',
        email:'andrey@gmail.com',
        pass:'22Andrey',
        role:'Admin',
      },
        {
        id: '2',
        login: 'Sergey',
        email:'sergey@gmail.com',
        pass:'Sergey33',
        role:'Manager',
      },
      {
        id: '3',
        login: 'Anton',
        email:'anton@gmail.com',
        pass:'24Anton789',
        role:'Executor',
      },
      {
        id: '4',
        login: 'Leva',
        email:'leva@gmail.com',
        pass:'Privet',
        role:'Executor',
      }
    ],
  }
  


  AddNewUser = () => {
 const modal = document.getElementById('modal');
 modal.style.display = "block";

  }

  removeUser = index => {
    const { users } = this.state
    
    this.setState({
      users: users.filter((user, i) => {
        return i !== index
      }),
    })
  }

  handleSubmit = (user) => {
    console.log(user);
    let {login,email,pass,role} = user;
    let id=parseInt(this.state.users[this.state.users.length-1].id)+1;
    this.setState({ users: [...this.state.users, {id,login,email,pass,role}] })
  }

  render() {
    const { users } = this.state
  
    return (
      <div className="container">
        <button type="button" className="btn btn-primary mt-5 " onClick={this.AddNewUser}>Add new user</button>
        <Table usersData={users} removeUser={this.removeUser} />
        <Modal handleSubmit={this.handleSubmit}/>
        <Form handleSubmit={this.handleSubmit} usersData={users}/>
      </div>
    )
  }

}

 export default App;
