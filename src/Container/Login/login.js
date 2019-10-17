import React from 'react'
import {connect} from 'react-redux'
import {Signup,loginWithFacebook,LoginFunc,Logout} from '../../Store/Actions/auth-action'
import { BrowserRouter as Router, Link } from "react-router-dom";
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
import "./Login.css";

class Login extends React.Component{
  constructor(){
    super();
    this.state={
      password:'',
      email:'',
    }
    this.email= React.createRef()
    this.password= React.createRef()
  }
    
      toggleCollapse = collapseID => () =>
        this.setState(prevState => ({
          collapseID: prevState.collapseID !== collapseID ? collapseID : ""
        }));
        
        login = ()=>{
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
            email:this.state.email,
            password:this.state.password
          }
          this.props.userLoginFunc(obj,this.props.history)
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
                      <MDBAnimation type="fadeIn  Left" delay=".3s">
                        <MDBCard id="classic-card">
                          <MDBCardBody className="white-text">
                            <h3 className="text-center">
                              <MDBIcon icon="user" /> Log in
                            </h3>
                            <hr className="hr-light" />
                   
                            <MDBInput
                              className="white-text"
                              iconClass="white-text"
                              label="Your email"
                              icon="envelope"
                              ref={this.email}
                              onChange={(e)=>this.setState({email:e.target.value})}
                            />
                            <MDBInput
                              className="white-text"
                              iconClass="white-text"
                              label="Your password"
                              icon="lock"
                              type="password"
                              ref={this.password}
                              onChange={(e)=>this.setState({password:e.target.value})}
                            />
                            <div className="text-center mt-4 black-text">
                              <MDBBtn  color="indigo" onClick={()=>this.login()}>Log in</MDBBtn><br />
                              <span><Link to='/Sign-Up' style={{color:'white'}}>Create new Account</Link></span>
                              <hr className="hr-light" />
                              <div className="text-center d-flex justify-content-center white-label" >
                             
                            
                            
                                <MDBBtn color="indigo" onClick={()=>this.props.userloginWithFacebook()}  >
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
    return {
      message: state.message,
      errormessage:state.errormessage
    }
}
const mapDispatchToProps = dispatch => {
    return {
       userloginWithFacebook: () => dispatch(loginWithFacebook()),
       userLoginFunc: (data,path) => dispatch(LoginFunc(data,path)),
       userLogout: () => dispatch(Logout()),
       
    }

}
export default connect(mapStateToProps,mapDispatchToProps)(Login)