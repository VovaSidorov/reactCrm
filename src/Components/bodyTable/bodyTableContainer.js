import React, { Component } from 'react'
import {connect} from "react-redux";
import BodyTable from "./indexC";
import {deletePostActionCreator,setUsersAC} from "../../redux/userReducer";

let mapStateToProps = (state) => {                                                                                                                                                                                                                                                                                                                                                                                    
    return {
        usersPage: state.usersPage
    }
};
let mapDispatchToProps = (dispatch) => {
    return {
        deleteUserItems: (id) => {
            let action = deletePostActionCreator(id);
            dispatch(action);
        },
        setUsers:(users)=>{
            dispatch(setUsersAC(users))
        }
    }
};

const bodyTableContainer = connect(mapStateToProps,mapDispatchToProps)(BodyTable);


export default bodyTableContainer;