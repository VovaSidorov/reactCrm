import React, { Component } from 'react'
import {connect} from "react-redux";
import BodyTable from "./index";
import {deletePostActionCreator} from "../../redux/userReducer";

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
        }
    }
};

const bodyTableContainer = connect(mapStateToProps,mapDispatchToProps)(BodyTable);


export default bodyTableContainer;