import React from 'react'
import {connect} from 'react-redux'
import {Signup,loginWithFacebook,Logout} from '../../Store/Actions/auth-action'
import { BrowserRouter as Router,Link } from "react-router-dom";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBMask,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBBtn,
  MDBView,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBFormInline,
  MDBAnimation
} from "mdbreact";
import "./SignUP.css";

class SignUp extends React.Component{
  constructor(){
    super();
    this.state={
      password:'',
      address:'',
      email:'',
      name:'',
    }
    this.name = React.createRef()
    this.email = React.createRef()
    this.address = React.createRef()
    this.password = React.createRef()
  }
    
      toggleCollapse = collapseID => () =>
        this.setState(prevState => ({
          collapseID: prevState.collapseID !== collapseID ? collapseID : ""
        }));

      signup =async ()=>{

        let flag = false;
        for(var key in this.state){
          console.log(this.state[key])
          if(this.state[key] == ""){
            flag = true;
           this[key].current.setFocus()
          }
        }
        if(flag === false){ 
          let obj = {
            name:this.state.name,
            address:this.state.address,
            email:this.state.email,
            password:this.state.password
          }
         await this.props.userSignUp(obj,this.props.history)
          console.log(obj)
        }

      }
    
      render() {
        const overlay = (
          <div
            id="sidenav-overlay"
            style={{ backgroundColor: "transparent" }}
            onClick={this.toggleCollapse("navbarCollapse")}
          />
        );
        return (
          <div style={{background:"url('http://sheffieldhatters.com/wp-content/uploads/2014/09/backgrounds-for-websites-3.jpg')"}} id="classicformpage">
            <Router>
              <div>
                <MDBNavbar dark expand="md" fixed="top">
                  <MDBContainer>
                    <MDBNavbarBrand>
                      <strong className="white-text">Wel Come</strong>
                    </MDBNavbarBrand>
                    <MDBNavbarToggler
                      onClick={this.toggleCollapse("navbarCollapse")}
                    />
                    <MDBCollapse
                      id="navbarCollapse"
                      isOpen={this.state.collapseID}
                      navbar
                    >
                    
                    </MDBCollapse>
                  </MDBContainer>
                </MDBNavbar>
                {this.state.collapseID && overlay}
              </div>
            </Router>
    
            <MDBView>
              <MDBMask className="d-flex justify-content-center align-items-center gradient">
                <MDBContainer>
                  <MDBRow>    
                    <MDBCol style={{marginLeft:'30%'}} md="6" xl="5" className="mb-4">
                      <MDBAnimation type="fadeInRight" delay=".3s">
                        <MDBCard id="classic-card">
                          <MDBCardBody className="white-text">
                            <h3 className="text-center">
                              <MDBIcon icon="user" /> Sign UP
                            </h3>
                            <hr className="hr-light" />
                            <MDBInput
                              className="white-text"
                              onChange={(e)=>this.setState({name:e.target.value})}
                              ref={this.name}
                              iconClass="white-text"
                              label="Your name"
                              icon="user"
                            />

                            <MDBInput
                              className="white-text"
                              iconClass="white-text"
                              ref={this.email}
                              onChange={(e)=>this.setState({email:e.target.value})}
                              label="Your email"
                              icon="envelope"
                            />
                              <MDBInput
                              className="white-text"
                              iconClass="white-text"
                              label="Your Address"
                              ref={this.address}
                              onChange={(e)=>this.setState({address:e.target.value})}
                              icon="home"
                            />
                            <MDBInput
                              className="white-text"
                              iconClass="white-text"
                              label="Your password"
                              ref={this.password}
                              onChange={(e)=>this.setState({password:e.target.value})}
                              icon="lock"
                              type="password"
                            />
                            <div className="text-center mt-4 black-text">
                              <MDBBtn  onClick={()=>this.signup()} color="indigo">Sign up</MDBBtn><br />
                              <span><Link to='/' style={{color:'white'}}>Already Have Account?</Link></span>
                              <hr className="hr-light" />
                              <div className="text-center d-flex justify-content-center white-label" >
                             
                            
                            
                                <MDBBtn color="indigo"  onClick={()=>this.props.userloginWithFacebook()} >
                                <MDBIcon
                                    fab
                                    icon="facebook"
                                    className="white-text"
                                    style={{marginRight :"10px"}}
                                  />
                                    Log in with facebook</MDBBtn>
                              </div>

                            </div>
                          </MDBCardBody>
                        </MDBCard>
                      </MDBAnimation>
                        <div id="snackbar" className={this.props.message}>{this.props.errormessage}</div>
                    </MDBCol>
                  </MDBRow>
                </MDBContainer>
              </MDBMask>
            </MDBView>
    
    
          </div>
        );
      }
}

const mapStateToProps = state => {
  console.log(state.SignupErr,state.snackBar)
    return {
message: state.message,
errormessage:state.errormessage
    }
}
const mapDispatchToProps = dispatch => {
    return {
       userSignUp: (data,path) => dispatch(Signup(data,path)),
       userloginWithFacebook: () => dispatch(loginWithFacebook()),
       userLogout: () => dispatch(Logout()),
       
    }

}
export default connect(mapStateToProps,mapDispatchToProps)(SignUp)