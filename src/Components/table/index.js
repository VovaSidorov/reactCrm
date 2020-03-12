import React, { Component } from 'react'
import HeaderTable from '../headerTable';
import BodyTableContainer from '../bodyTable/bodyTableContainer';


  class Table extends Component {
    render() {
        // const { usersData, removeUser  } = this.props
      return (
        <table className="table mt-5">
          <HeaderTable />
          <BodyTableContainer/>
        </table>
      )
    }
  }

export default Table