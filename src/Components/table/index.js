import React, { Component } from 'react'
import HeaderTable from '../headerTable';
import BodyTableContainet from '../bodyTable/bodyTableContainer';


  class Table extends Component {
    render() {
        // const { usersData, removeUser  } = this.props
      return (
        <table className="table mt-5">
          <HeaderTable />
          <BodyTableContainet/>
        </table>
      )
    }
  }

export default Table