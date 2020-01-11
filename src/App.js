import React, { Component } from 'react'
import Table from './Components/table';
import Modal from './Components/modal';


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
  render() {
    const { users } = this.state
  
    return (
      <div className="container">
        <button type="button" className="btn btn-primary mt-5 " onClick={this.AddNewUser}>Add new user</button>
        <Table usersData={users} removeUser={this.removeUser} />
        <Modal/>
      </div>
    )
  }

}

 export default App;
