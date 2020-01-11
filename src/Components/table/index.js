import React, { Component } from 'react'
import HeaderTable from '../headerTable';
import BodyTable from '../bodyTable';


  class Table extends Component {
    render() {
        const { usersData, removeUser  } = this.props
      return (
        <table className="table mt-5">
          <HeaderTable />
          <BodyTable usersData={usersData} removeUser={removeUser}/>
        </table>
      )
    }
  }

export default Table