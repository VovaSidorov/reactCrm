  const ADD_POST = "ADD-POST";
    const DELETE_POST = "DELETE-POST";
const UPDATE_NEW_POST_TEXT ='UPDATE-NEW-POST-TEXT';


let initialState =   {
    users: [
        {
          id: '1',
          login: 'Andrey',
          email:'andrey@gmail.com',
          pass:'22Andrey',
          role:'Admin',
        },
          {
          id: '2',
          login: 'Sergey',
          email:'sergey@gmail.com',
          pass:'Sergey33',
          role:'Manager',
        },
        {
          id: '3',
          login: 'Anton',
          email:'anton@gmail.com',
          pass:'24Anton789',
          role:'Executor',
        },
        {
          id: '4',
          login: 'Leva',
          email:'leva@gmail.com',
          pass:'Privet',
          role:'Executor',
        }
      ],
      newUserLogin: '',
      newUserEmail: '',
      newUserPass: '',
      newUserRole: '',
}


const userReducer = (state = initialState, action) => {
    switch(action.type) {
      case ADD_POST: {
        let newPost = {
            id: '4',
            login: state.newUserLogin,
            email: state.newUserEmail,
            pass: state.newUserPass,
            role: state.newUserRole,
        };
        return {
            ...state,
            users: [...state.users, newPost],
            newUserLogin: '',
            newUserEmail: '',
            newUserPass: '',
            newUserRole: '',
        };
    }
    case UPDATE_NEW_POST_TEXT: {
        return {
            ...state,
            newUserLogin: action.newLogin,
            newUserEmail:action.newEmail,
            newUserPass:action.newPass,
            newUserRole:action.newRole
        }
    }
    case DELETE_POST:
      return {
        users: [...state.users.filter(item => item.id !== action.userId)],
      }
    default:
        return state;
    }
}


export const addPostActionCreator = ()=>({  type: ADD_POST});
export const updateNewPostTextActionCreator = (login,email,pass,role)=>{
    return {
        type:UPDATE_NEW_POST_TEXT, newLogin: login, newEmail: email, newPass: pass, newRole: role
    }
}
export const deletePostActionCreator = (id)=>{
  return {
      type:DELETE_POST, userId: id
  }
}

export default userReducer;