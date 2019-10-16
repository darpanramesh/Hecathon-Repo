import React from 'react'
import {firebaseApp} from '../../Config/Firebase/firebase'
import {Verify} from '../index'
export default class Home extends React.Component{
    constructor(){
        super();
        this.state={
            check:'',
        }
    }
    componentDidMount(){
        let that = this
        firebaseApp.auth().onAuthStateChanged(function(user) {
            if (user) {
              console.log(user.emailVerified);
              let emailVerified = user.emailVerified;
              that.setState({check:emailVerified})
            } else {
              // No user is signed in.
            }
          });
    }
    render() {
        return (
            <div>
                {this.state.check ?
                <h1>Home</h1>
                :
                <div>
                <Verify />    
                </div>}
            </div>
        )
    }
}