import React from 'react';

const AddButton = (props) => {
    let newUserLogin = React.createRef();
    let newUserEmail = React.createRef();
    let newUserPass = React.createRef();
    let newUserRole = React.createRef();
 
    let onAddPost = () => {
        props.addPost();
    };
    let onPostChange = () => {
        let login = newUserLogin.current.value;
        console.log(login)
        let email = newUserEmail.current.value;
        let pass = newUserPass.current.value;
        let role = newUserRole.current.value;
        props.updateNewPostText(login,email,pass,role);
    };

    return (
     <div>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" 
                    onChange={onPostChange}  ref={newUserLogin}
                              value={props.newUserLogin}></input>
                              <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={onPostChange}  ref={newUserEmail}
                              value={props.newUserEmail}></input>
                              <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={onPostChange}  ref={newUserPass}
                              value={props.newUserPass}></input>
                              <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={onPostChange}  ref={newUserRole}
                              value={props.newUserRole}></input>
                    <button onClick={ onAddPost } type="button" className="btn btn-primary mt-5 ">Add new us</button>
                    </div>
    )
};

export default AddButton;