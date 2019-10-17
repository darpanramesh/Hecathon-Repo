
let Initial_State = {
    user: "",
    errormessage: "",
    message: "hidden"
}


let Reducer = (state = Initial_State, action) => {
    switch (action.type) {
        case "error": {
            state.errormessage = action.message
            state.message = "show"
            return {
                ...state, errormessage: state.errormessage, message: state.message.concat()
            }
        }
        case "errorerutn": {
            state.message = "hidden"
            return {
                ...state, message: state.message.concat()
            }
        }

        case "errormessage" : {
        state.errormessage = action.message
        state.message = "show"
        return {
            ...state,errormessage : state.errormessage,message: state.message.concat()
        }
        }

        case "returnmessae" : {
            state.message = "xyz"
            return {
            ...state,message: state.message.concat()
            }
        }
        default: return {
            state
        }
    }
}
export default Reducer