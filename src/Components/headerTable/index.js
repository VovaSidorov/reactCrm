import React, { Component } from 'react'

  class HeaderTable extends Component {
    render() {
    
      return (
        <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Email</th>
          <th scope="col">Password</th>
          <th scope="col">Role</th>
          <th scope="col"></th>
        </tr>
      </thead>
      )
    }
  }

export default HeaderTable