const initalState = {
    name: 'snackbar',
    message: 'demo',
    currentUser: ''
}

const ALL_STATE = {
    isRegister: false,
    isSigned: false,
    isLogin: false,
    SignupErr: false,
    snackBar: 'snackbar'

}
const Reducer = (state = ALL_STATE, action) => {
console.log(action)

    switch (action.type) {
        case "signupSucess":
            return { ...state }
            break;

        case "showSignupErr":
            state.SignupErr = action.payload
            state.snackBar = "show"
            return {
                ...state, snackBar: state.snackBar, SignupErr: state.SignupErr.concat()
            }
            break;

        case "hideSignupErr":
            state.SignupErr = ""
            state.snackBar = "snackbar"
            return {
                ...state, snackBar: state.snackBar, SignupErr: state.SignupErr.concat()
            }
            break;

        case "loginSucess":
            return {...state}
            break;

        case 'facebookUser':
            return { ...state }
            break;

        case 'logout':
            localStorage.removeItem('user')
            return { ...state }
            break;

        default: {
            return state
        }
    }
}



export default Reducer






// const Reducer = (state = initalState, action) => {
//     switch (action.type) {

//         case "addUser":
//             return state
//             break;


//         // user Login

//         case 'Login': state.currentUser = action.payload

//             return { ...state, currentUser: state.currentUser }
//             break;

//         case 'facebookUser':
//             return state
//             break;

//         case "logout":
//             localStorage.removeItem('user')
//             return state

//         default: return { ...state }
//     }


// }













// const AuthReducer = (state = initalState, action) => {
//     switch (action.type) {
//         // res signup


//         case "ShowalreadyName": state.message = 'Sorry Name Already Registerd'
//             state.name = 'show'
//             return { ...state, message: state.message, name: state.name.concat() }
//             break;

//         case "HidealreadyName": state.name = 'snackbar'
//             return { ...state, name: state.name.concat() }
//             break;

//         case "addResturant":
//             return state
//             break;

//         // user signup


//         case "addUser":
//             return state
//             break;


//         // user Login

//         case 'Login': state.currentUser = action.payload

//             return { ...state, currentUser: state.currentUser }
//             break;

//         case "logout":
//             localStorage.removeItem('user')
//             return state

//         default: return { ...state }
//     }


// }
