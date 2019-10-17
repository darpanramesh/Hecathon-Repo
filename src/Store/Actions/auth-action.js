import { firebaseApp, provider } from "../../Config/Firebase/firebase";
import swal from 'sweetalert'
//  User Signup


const Signup = (data, path) => {

    return dispatch => {
        console.log(data)
        firebaseApp.auth().createUserWithEmailAndPassword(data.email, data.password).then((res) => {
            firebaseApp.firestore().collection('users').doc(res.user.uid).set(data).then(
                firebaseApp.auth().currentUser.sendEmailVerification().then(function () {
                    swal("Sign Up!", "Sucessfully!", "success");
                    dispatch({
                        type: "Signup",
                    })
                    path.push('/')
                })
            )
        })
        .catch((error) => {
            var errorMessage = error.message;
            dispatch({
                type: "error",
                message : errorMessage
            })
            setTimeout(()=>{
                dispatch({
                    type: "errorerutn",
                })
            },3000)
        });
    }
}


//Loginwith Facebook

function loginWithFacebook(path) {
    return dispatch => {
        provider.setCustomParameters({
            'display': 'popup'
        });

        firebaseApp.auth().signInWithPopup(provider).then(function (result) {
            let user = result.user;
            firebaseApp.firestore().collection('users').doc(result.user.uid).set(user).then(function () {
                // firebaseApp.auth().currentUser.sendEmailVerification().then(function () {
                dispatch({ type: 'facebookUser' })
                // Email sent.
                path.push('/Home')
                // })
            }
            )
        }).catch(function (error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorMessage);
        });
    }
}



const LoginFunc = (data, path) => {

    return dispatch => {
        console.log(path)
        firebaseApp.auth().signInWithEmailAndPassword(data.email, data.password).then(resolve => {
            console.log(resolve.user)

            firebaseApp.firestore().collection('users').doc(resolve.user.uid).get().then(res => {
                let checkData = res.data()
                swal("Login!", "Sucessfully!", "success");
                path.push('/Home')
                localStorage.setItem('user', JSON.stringify(checkData))
                dispatch({
                    type: "Login",
                })
            })
    })
    .catch((error) => {
        var errorMessage = error.message;
        dispatch({
            type: "errormessage",
            message : errorMessage
        })
        setTimeout(()=>{
            dispatch({
                type: "returnmessae",
            })
        },3000)
    });
    }
}




// Logout

const Logout = (path) => {

    return dispatch => {
        firebaseApp.auth().signOut().then(function () {
            dispatch({ type: 'logout' })
            path.push('/')
        }, function (error) {
            console.error('Sign Out Error', error);
        });

    }

}

let resendEmail = ()=> {
    // alert("Re send Email")
        return dispatch => {
        var user = firebaseApp.auth().currentUser.sendEmailVerification().then(function () {
            swal("Re Send Email!", "Sucessfully!", "success");
            dispatch({
                type : "Resend"
                }) 
        });
        console.log(user)
   
    }
}


export {
    Signup,
    loginWithFacebook,
    // UserSignup,
    LoginFunc,
    Logout,
    resendEmail
}

















//  Resturant Signup

// const Signup = (data, path) => {

// console.log(data,8989)

//     return dispatch => {


//             navigator.geolocation.getCurrentPosition((position) => {
//                 data.location = {
//                     latitude: position.coords.latitude,
//                     longitude: position.coords.longitude
//                 }
//             });

//             console.log(data, 'check')

//             firebaseApp.auth().createUserWithEmailAndPassword(data.email, data.password).then((res) => {
//                 data.check = res.user.emailVerified
//                 data.account = 'resturant'
//                 firebaseApp.firestore().collection('users').doc(res.user.uid).set(data).then(

//                     firebaseApp.auth().currentUser.sendEmailVerification().then(function () {
//                         console.log(`Email Sent ==>`)
//                         dispatch({ type: 'addResturant' })
//                         // Email sent.
//                         path.push('/')
//                         dispatch({ type: 'addResturant' })

//                     })
//                 )
//             }).catch((err) => {
//                console.log(err)

//             })

//     }



// }