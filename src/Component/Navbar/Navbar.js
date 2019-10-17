import React, { Component } from "react";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBDropdown,
MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBContainer, MDBIcon } from "mdbreact";
import { BrowserRouter as Router,Link } from "react-router-dom";
import {Logout} from '../../Store/Actions/auth-action'
import { connect } from 'react-redux'
class NavbarPage extends Component {
state = {
  collapseID: ""
};

toggleCollapse = collapseID => () =>
  this.setState(prevState => ({
  collapseID: prevState.collapseID !== collapseID ? collapseID : ""
}));
logOut(data){
    console.log(data,900);
    this.props.Logout(this.props.path)
  }
render() {
  return (
      <div style={{background:"url('http://sheffieldhatters.com/wp-content/uploads/2014/09/backgrounds-for-websites-3.jpg')"}}>
      <Router>
    <MDBNavbar  dark expand="md" style={{ marginTop: "10px" }}>
      <MDBNavbarBrand>
        <strong className="white-text">MDBNavbar</strong>
      </MDBNavbarBrand>
      <MDBNavbarToggler onClick={this.toggleCollapse("navbarCollapse3")} />
      <MDBCollapse id="navbarCollapse3" isOpen={this.state.collapseID} navbar>
      <MDBNavbarNav left>
      {
                this.props.list.map((val)=>{
                return <MDBNavItem>
                <MDBNavLink className="waves-effect waves-light" to="#!">
                  <MDBIcon  className="mr-1" /><Link style={{color:'white'}} to={val.path}>{val.name}</Link></MDBNavLink>
              </MDBNavItem>
              })
            }
       </MDBNavbarNav>
        <MDBNavbarNav right>
          <MDBNavItem>
            <MDBDropdown>
              <MDBDropdownToggle nav caret>
                <MDBIcon icon="user" className="mr-1" />Profile
              </MDBDropdownToggle>
              <MDBDropdownMenu className="dropdown-default" right>
                <MDBDropdownItem href="#!">My account</MDBDropdownItem>
                <MDBDropdownItem onClick={()=>this.logOut(this.props.path)} >Log out</MDBDropdownItem>
              </MDBDropdownMenu>
            </MDBDropdown>
          </MDBNavItem>
        </MDBNavbarNav>
      </MDBCollapse>
    </MDBNavbar>
    </Router>
    </div>
    );
  }
}
const mapStateToProps = state => {
    return {
        name: state.name,
    }
  }
  const mapDispatchToProps = dispatch => {
    return {
        Logout: (path) => dispatch(Logout(path)),
    }
  }
  export default connect(mapStateToProps, mapDispatchToProps)(NavbarPage);