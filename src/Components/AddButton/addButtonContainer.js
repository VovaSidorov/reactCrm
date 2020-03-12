import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../redux/userReducer";
import AddButton from "./addButton";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    
    return {
        posts: state.usersPage.users,
        newUserLogin:state.usersPage.newUserLogin,
        newUserEmail:state.usersPage.newUserEmail,
        newUserPass:state.usersPage.newUserPass,
        newUserRole:state.usersPage.newUserRole
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            dispatch(addPostActionCreator())
        },
        updateNewPostText: (login,email,pass,role) => {
            let action = updateNewPostTextActionCreator(login,email,pass,role);
            dispatch(action);
        }
    }
};

const AddButtonContainer = connect(mapStateToProps, mapDispatchToProps)(AddButton);


export default AddButtonContainer;