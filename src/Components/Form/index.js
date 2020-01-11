  
import React, {Component} from 'react';

class Form extends Component {
    constructor(props) {
        super(props);
        
        this.initialState = {
            login: '',
            email: '',
            pass: '',
            role: '',
        };

        this.state = this.initialState;
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
            <form onSubmit={this.onFormSubmit}>
                <label htmlFor="name">Login</label>
                <input 
                    type="text" 
                    name="login" 
                    id="name"
                    value={login} 
                    onChange={this.handleChange} />
                <label htmlFor="job">Email</label>
                <input 
                    type="text" 
                    name="email" 
                    id="job"
                    value={email} 
                    onChange={this.handleChange} />
                    <label htmlFor="name">Password</label>
                <input 
                    type="text" 
                    name="pass" 
                    id="pass"
                    value={pass} 
                    onChange={this.handleChange} />
                    <label htmlFor="name">Role</label>
                <input 
                    type="text" 
                    name="role" 
                    id="role"
                    value={role} 
                    onChange={this.handleChange} />
               <input type="button" value="Submit" onClick={this.submitForm} />
            </form>
        );
    }
}

export default Form;