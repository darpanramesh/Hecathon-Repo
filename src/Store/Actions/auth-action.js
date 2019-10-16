import { firebaseApp, provider } from "../../Config/Firebase/firebase";






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




//  User Signup


const Signup = (data, path) => {

    return dispatch => {
        console.log(data)
        firebaseApp.auth().createUserWithEmailAndPassword(data.email, data.password).then((res) => {
            firebaseApp.firestore().collection('users').doc(res.user.uid).set(data).then(
                firebaseApp.auth().currentUser.sendEmailVerification().then(function () {
                    dispatch({
                        type: "signupSucess",
                    })
                    path.push('/')
                })
                    .catch((err) => {
                        console.log(err)
                        dispatch({ type: "hideSignupErr", payload: err.code });
                        setTimeout(() => { dispatch({ type: "showSignupErr " }) }, 3000)
                    })
            )
        })
            .catch((err) => {
                dispatch({ type: "showSignupErr", payload: err.code });
                setTimeout(() => { dispatch({ type: "hideSignupErr" }) }, 3000)
            })
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
                path.push('/')
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
                path.push('/Home')
                localStorage.setItem('user', JSON.stringify(checkData))
                dispatch({
                    type: "loginSucess",

                })
            })
                .catch((err) => {
                    console.log(err)
                    dispatch({ type: "showloginErr", payload: err.code });
                    setTimeout(() => { dispatch({ type: "hideloginErr" }) }, 3000)
                })
        })
            .catch((err) => {
                dispatch({ type: "showloginErr", payload: err.code });
                setTimeout(() => { dispatch({ type: "hideloginErr" }) }, 3000)
            })
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



export {
    Signup,
    loginWithFacebook,
    // UserSignup,
    LoginFunc,
    Logout
}