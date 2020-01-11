import React, { Component } from 'react'

  class Modal extends Component {
     
    constructor(props) {
      super(props)
  
      this.initialState = {
        id: '',
        login: '',
        email: '',
        pass: '',
        role: ''
      }
  
      this.state = this.initialState
    }

    handleChange = event => {
      const { name, value } = event.target
    
      this.setState({
        [name]: value,
      })
    }

    CloseModal = () => {
      const modal = document.getElementById('modal');
      const inputName = document.getElementById('inputName');
      const inputEmail = document.getElementById('inputEmail');
      const inputPassword = document.getElementById('inputPassword');
      inputName.value = "";
      inputEmail.value = "";
      inputPassword.value = "";
      modal.style.display = "";
       }

       handleChange = event => {
        const { name, value } = event.target;

        this.setState({
            [name] : value
        });
    }

    onFormSubmit = (event) => {
        event.preventDefault();
        
        this.props.handleSubmit(this.state);
        this.setState(this.initialState);
    }

    submitForm = () => {
        this.props.handleSubmit(this.state)
        this.setState(this.initialState)
      }
      
    render() {

       const { login, email, pass, role } = this.state;
  
      return (
        <div className="modal" tabIndex="-1" role="dialog" id="modal">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Add new user</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true" onClick={this.CloseModal}>&times;</span>
              </button>
            </div>
            <div className="modal-body">
            <form onSubmit={this.onFormSubmit}>
            <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text" id="basic-addon1">Name</span>
                </div>
                <input type="text" className="form-control" placeholder="Name" id="inputName" value={login} onChange={this.handleChange}/>
            </div>
            <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text" id="basic-addon1">Email</span>
                </div>
                <input type="text" className="form-control" placeholder="Email" aria-label="Username" aria-describedby="basic-addon1" id="inputEmail" value={email} onChange={this.handleChange}/>
            </div>
            <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text" id="basic-addon1">Password</span>
                </div>
                <input type="text" className="form-control" placeholder="Password" aria-label="Username" aria-describedby="basic-addon1" id="inputPassword" value={pass} onChange={this.handleChange}/>
            </div>
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <label className="input-group-text" htmlFor="inputGroupSelect01">Role</label>
              </div>
              <select className="custom-select" id="inputGroupSelect01">
                <option defaultValue>Choose...</option>
                <option value={role} onChange={this.handleChange}>Admin</option>
                <option value="Manager">Manager</option>
                <option value="Executor">Executor</option>
                </select>
              </div>
              </form>
            </div>
          
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={this.CloseModal}>Close</button>
              <button type="button" className="btn btn-primary" value="Submit" onClick={this.submitForm}>Save changes</button>
            </div>
          </div>
        </div>
      </div>
      )
    }
  }

export default Modal