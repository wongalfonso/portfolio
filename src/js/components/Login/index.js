import { connect } from "react-redux";
import Login from "./Login"

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(Login);