import { connect } from "react-redux"
import Profile from "./Profile";


const mapStateToProps = (state) => {
  return {
    userLogin: state.user.userLogin,  
    isLoggedIn: state.user.userLogin.isLoggedIn,  
    user: state.user,    
  }
}

export default connect(mapStateToProps)(Profile);