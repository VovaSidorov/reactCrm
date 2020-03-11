const ADD_USER = "ADD-USER";
const UPDATE_NEW_USER_TEXT ='UPDATE-NEW-USER-TEXT';


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
        newPostText: ''
}


const profileReducer = (state = initialState, action) => {

    switch(action.type) {
        case ADD_USER: {
            let newUser = {
                // id: 5,
                // message: state.newPostText,
                // likesCount: 0
                id: '5',
                login: state.newLoginText,
                email: state.newEmailText,
                pass:state.newPassText,
                role:state.newRoleText
            };
            return {
                ...state,
                posts: [...state.users, newUser],
                newLoginText: '',
                newEmailText: '',
                newPassText: '',
                newRoleText: ''
            };
        }
        case UPDATE_NEW_USER_TEXT: {
            return {
                ...state,
                newLoginText: action.newLogin,
                newEmailText: action.newPass,
                newPassText: action.newPass,
                newRoleText: action.newRole
            }
        }
        default:
            return state;
    }
}


export const addPostActionCreator = ()=>({  type: ADD_USER});
export const updateNewPostTextActionCreator = (login,email,pass,role)=>{
    return {
        type:UPDATE_NEW_USER_TEXT, newLogin: login, newEmail: email, newPass: pass, newRole: role
    }
}

export default profileReducer;