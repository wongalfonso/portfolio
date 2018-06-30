import { connect } from "react-redux";
import Login from "./Login"

const mapStateToProps = (state) => {    
  return {
    userLogin: state.user.userLogin
  }
}

export default connect(mapStateToProps)(Login);