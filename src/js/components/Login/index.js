import { connect } from "react-redux";
import Login from "./Login"

const mapStateToProps = (state) => {
  console.log(state);
  return {
    userLogin: state.user
  }
}

export default connect(mapStateToProps)(Login);