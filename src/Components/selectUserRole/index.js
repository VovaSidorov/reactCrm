import React, { Component } from 'react'
    const rows = () => {
     
      return (
        <select className="custom-select" id="inputGroupSelect01">
        <option value="{role} onChange={this.handleChange}">Choose...</option>
        <option value="Admin">Admin</option>
        <option value="Manager">Manager</option>
        <option value="Executor">Executor</option>
        </select>
      )
    }
  
export default rows;