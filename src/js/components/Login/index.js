import { connect } from "react-redux";
import Login from "./Login"
import SignUp from "./Signup"

const mapStateToProps = (state) => {
  console.log("STATE", state);
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(Login);