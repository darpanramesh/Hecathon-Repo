import React from 'react'
import './Verify.css'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import {connect} from 'react-redux'
import {resendEmail,Logout} from '../../Store/Actions/auth-action'
import {MDBBtn} from 'mdbreact'
import iconVerify from '../../Images/verify.jpg'
class Verify extends React.Component {
    render() {
        return (
            <div>
                <Grid justify='center' container>
                    <Grid item xs={12} sm={12} lg={12} md={12}>
                    <Paper>
                    <div className="verify-container">
                        <div className="img-div">
                            <img className="img-div" src={iconVerify} />
                            <p className="head1">Verify your email to proceed</p>
                            <p className="para">We just sent an email to the address: {this.props.email} <b></b></p>
                            <p className="para2">Please check your email and click on the link provided to verify your address.</p>
                            <MDBBtn  onClick={()=>this.props.resendEmail()} color="indigo">resend verification email</MDBBtn>
                            </div>
                    </div> 
                    </Paper>
                    </Grid>
                    </Grid>
            </div>
                )
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
        resendEmail: () => dispatch(resendEmail()),
         userLogout: () => dispatch(Logout()),
         
      }
  
  }
  export default connect(mapStateToProps,mapDispatchToProps)(Verify)